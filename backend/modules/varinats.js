import {pool} from './database.js'

export const getVariants = async () => {
    let results = [];
    try {
        const [rows] = await pool.query(
            `select 
                p.product_id, 
                p.title, 
                v.variant_id, 
                v.price, 
                p.weight,  
                p.category_id, 
                p.default_price,
                v.image, 
                v.details, 
                pr.detailed_description 
                from product as p 
                join variant as v 
                on p.product_id = v.product_id 
                join property as pr 
                on v.variant_id = pr.variant_id`);
        results = rows;
    } catch (err) {
        console.error("Error querying the database:", err);
    } finally {
        return results;
    }
};