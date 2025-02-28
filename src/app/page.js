"use client";
import styles from "@/styles/page.module.css";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/componentes/ProductCard";

export default function Home() {
  const { data, error, isLoading } = useProducts();

  console.log(data);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
