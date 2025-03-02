"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "@/services/fetchProducts";
import Image from "next/image";
import styles from "@/styles/product.module.css";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/componentes/Loading";
import { IoArrowBackOutline } from "react-icons/io5";

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
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(product.price)}
              </p>
              <p>{product.description}</p>
              <div className={styles.buttons}>
              <button>Comprar</button>
              <button>Adicionar ao carrinho</button>
            </div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}
