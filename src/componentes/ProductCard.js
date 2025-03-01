import Image from "next/image";
import styles from "@/styles/productCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(product.price)}
        </p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
}
