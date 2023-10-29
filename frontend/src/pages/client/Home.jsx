import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as CartIcon } from "../../icons/cart.svg";
import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import { Navbar, NavItem } from "../../components/Navbar";
import { ProductGrid, ProductTile } from "../../components/Product";
import Modal from "../../components/Modal";
import React, { useState } from "react";
import iphone from "../../images/iphone.png";
import Cart from "../../components/Cart"
import axios from "axios";


const baseURL = "http://127.0.0.1:5000";

// var products = [
//   {
//     id: 1,
//     name: "iPhone 11",
//     price: 800.0,
//     variants: [
//       {
//         variant_id: 1,
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores?",
//       },
//       {
//         variant_id: 2,
//         description:
//           "Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "iPhone Pro",
//     price: 1000.0,
//     variants: [
//       {
//         variant_id: 1,
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores?",
//       },
//       {
//         variant_id: 2,
//         description:
//           "Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
//       },
//     ],
//   },
// ];

function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/api/products`).then((response) => {
      setProducts(response.data)
    });
  }, []);

  const handleOpenDialog = ({ productId }) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <>
      <Navbar>
        <div className="logo-container">
          <LogoIcon className="nav-bar-logo-icon" />
        </div>
        <div className="nav-bar-route-container">
          <NavItem>
            <MenuIcon />
          </NavItem>
          <NavItem>
            <UserIcon />
          </NavItem>
          <NavItem>
            <CartIcon onClick={handleOpenCart} />
          </NavItem>
        </div>
      </Navbar>
      <div className="category-menu"></div>
      <div>
        <p className="main-text">All Products</p>
      </div>
      <ProductGrid>
        {products.map((product, index) => {
          return (
            <ProductTile
              key={index}
              src={product.imageUrl}
              onClick={() => {
                // alert(product.id)
                handleOpenDialog({ productId: product.variant_id });
              }}
              title={product.title}
              price={product.price}
            ></ProductTile>
          );
        })}
      </ProductGrid>
      <Modal
        open={openDialog}
        handleClose={handleCloseDialog}
        title="Add product to Cart"
      >
        {openDialog && (
          <div className="add-product-to-cart-modal">
            <div style={divStyle1}>
              <p className="add-product-name-text">{selectedProduct.name}</p>
              <div className="add-product-modal-image-container">
                <img src={iphone} alt="" className="add-product-image" />
              </div>
            </div>

            <div className="choose-variant-and-price-container">
              <p className="add-product-variant-text">Product Variants:</p>
              <div className="variant-container">
                {selectedProduct.variants.map((variant) => (
                  <div
                    key={variant.variant_id}
                    className="variant-description-container"
                  >
                    <p>{variant.description}</p>
                  </div>
                ))}
              </div>
              <div style={divStyle2}>
                <p style={priceTextStyle}>Price: ${selectedProduct.price}</p>
                <div style={addProductButtonStyle}>
                  <p>Add Product</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Cart open={openCart} handleClose={handleCloseCart} items={
        [{
          id: 2,
          name: "iPhone Pro",
          price: 1000.0,
          variant : {
            variant_id: 2,
            description:
              "Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
          },
        }]
      } />
    </>
  );
}

const divStyle1 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const divStyle2 = {
  display: "flex",
  width: "90%",
  justifyContent: "space-around",
  alignItems: "center",
};

const priceTextStyle = {
  fontSize: "18pt",
  fontWeight: "700",
};

const addProductButtonStyle = {
  fontSize: "16pt",
  color: "white",
  backgroundColor: "#317af0",
  padding: "5px 10px",
  display: "flex",
  borderRadius: "5px",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
