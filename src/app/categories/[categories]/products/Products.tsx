"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
  {
    id: 5,
    name: "Product 5",
  },
  {
    id: 6,
    name: "Product 6",
  },
];

const Products = () => {
  const router = useRouter();
  const params = useParams();
  const { categories } = params;

  return (
    <div className="bg-white p-4">
      {products.map((product) => {
        return (
          <h1
            key={product.id}
            className="cursor-pointer"
            onClick={() => {
              router.push(`/categories/${categories}/product${product.id}`);
            }}
          >
            {product.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Products;
