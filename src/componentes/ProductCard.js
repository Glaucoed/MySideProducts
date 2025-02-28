import Image from "next/image"
import styles from "@/styles/productCard.module.css"

export default function ProductCard({ product }) {
  return (
    <div>
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

