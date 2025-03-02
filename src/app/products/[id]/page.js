"use client";
import { useQuery } from "@tanstack/react-query";
import { IoArrowBackOutline } from "react-icons/io5";
import { fetchProduct } from "@/services/fetchProducts";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/styles/product.module.css";
import Loading from "@/componentes/Loading";
import Button from "@/componentes/Button";

export default function page() {
  const params = useParams();
  const router = useRouter();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => fetchProduct(params.id),
  });

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={styles.containerBack}
            onClick={() => router.push("/")}
          >
            <IoArrowBackOutline size={20} />
            <span>Voltar para produtos</span>
          </div>
          <div className={styles.containerProduct}>
            <div className={styles.image}>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
              />
            </div>
            <div className={styles.info}>
              <h2>{product.title}</h2>
              <p className={styles.category}>{product.category}</p>
              <span />
              <h3>Descrição</h3>
              <p className={styles.description} >{product.description}</p>
              <span />
              <p className={styles.price}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(product.price)}
              </p>
              <div className={styles.buttons}>
                <Button value="Comprar" />
                <Button value="Adicionar ao carrinho" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
