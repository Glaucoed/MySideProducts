"use client";
import styles from "@/styles/page.module.css";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/componentes/ProductCard";
import Input from "@/componentes/Input";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState("");

  return (
    <div className={styles.page}>
      <Input
        placeholder="Digite o nome do produto"
        name="search"
        title="Buscar produto"
        type="text"
        handleOnChange={(e) => setFilteredProducts(e.target.value)}
      />
      <div className={styles.container}>
        {isLoading ? (
          <span className={styles.loader}></span>
        ) : (
          data
            .filter((product) =>
              filteredProducts
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
