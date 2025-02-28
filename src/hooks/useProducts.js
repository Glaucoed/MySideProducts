import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const { data: { products } } = await axios.get("https://fakestoreapi.in/api/products");
    return products;
  } catch (error) {
    return error;
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
