"use client";
import styles from "@/styles/page.module.css";
import ProductCard from "@/componentes/ProductCard";
import Input from "@/componentes/Input";
import Checkbox from "@/componentes/Checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/fetchProducts";
import Loading from "@/componentes/Loading";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState("");
  const [categories, _setCategories] = useState([
    "audio",
    "gaming",
    "mobile",
    "tv",
  ]);

  const { register, watch, setValue } = useForm();
  const categoryName = watch("categories");

  const { data, isLoading } = useQuery({
    queryKey: ["products", categoryName],
    queryFn: () => fetchProducts(categoryName),
  });

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <Input
          placeholder="Digite o nome do produto"
          name="search"
          title="Filtro de produto"
          type="text"
          handleOnChange={(e) => setFilteredProducts(e.target.value)}
        />

          <h2 className={styles.title}>Categorias</h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Checkbox
              key={category}
              name="categories"
              title={category}
              register={register}
              setValue={setValue}
              value={category}
            />
          ))}
        </div>
      </div>

      <div className={styles.containerProducts}>
        {isLoading ? (
          <Loading />
        ) : (
          data.length > 0 &&
          data
            .filter((product) =>
              filteredProducts.length > 0
                ? product.title.toLowerCase().includes(filteredProducts)
                : product
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        )}
      </div>
    </div>
  );
}
