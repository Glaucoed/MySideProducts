import axios from "axios";

export const fetchProducts = async (categoryName) => {
  try {    
    const { data: { products } } = await axios.get(`https://fakestoreapi.in/api/products${categoryName ? `/category?type=${categoryName}` : ""}`);
    return products;
  } catch (error) {
    return error;
  }
};


export const fetchProduct = async (id) => {
  try {    
    const { data: { product } } = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    return product;
  } catch (error) {
    return error;
  }
};
