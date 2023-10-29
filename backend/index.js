import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getVariants } from "./modules/varinats.js";

const app = express();
app.use(cors());

const s3BucketName = process.env.S3_BUCKET_NAME;
const s3BucketRegion = process.env.S3_BUCKET_REGION;
const s3AccessKey = process.env.S3_ACCESS_KEY;
const s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: s3AccessKey,
    secretAccessKey: s3SecretAccessKey,
  },
  region: s3BucketRegion,
});

app.get("/api/products", async (req, res) => {
  try {
    let products = await getVariants();
    let outputProducts = [];

    for (let product of products) {
      let getObjectParams = {
        Bucket: s3BucketName,
        Key: product.image,
      };

      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

      outputProducts.push({
        ...product,
        imageUrl: url,
      });
    }

    res.status(200).send(outputProducts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error fetching products" });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
