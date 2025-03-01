import axios from "axios";

export const fetchProducts = async (categoryName) => {
  try {    
    const { data: { products } } = await axios.get(`https://fakestoreapi.in/api/products${categoryName ? `/category?type=${categoryName}` : ""}`);
    return products;
  } catch (error) {
    return error;
  }
};
