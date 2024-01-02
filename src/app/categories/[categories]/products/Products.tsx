"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

type Products = {
  id: number;
  name: string;
  subcategories: string;
};

const products: Products[] = [
  {
    id: 1,
    name: "Product 1",
    subcategories: "food-essentials",
  },
  {
    id: 2,
    name: "Product 2",
    subcategories: "sd-liquors",
  },
  {
    id: 3,
    name: "Product 3",
    subcategories: "",
  },
  {
    id: 4,
    name: "Product 4",
    subcategories: "",
  },
  {
    id: 5,
    name: "Product 5",
    subcategories: "",
  },
  {
    id: 6,
    name: "Product 6",
    subcategories: "",
  },
];

const Products = () => {
  const router = useRouter();
  const params = useParams();
  const { categories } = params;

  const handleClick = (product: Products) => {
    router.push(
      `/categories/${categories}/${product.subcategories}/product${product.id}`
    );
  };

  return (
    <div className="bg-white p-4">
      {products.map((product) => {
        return (
          <h1
            key={product.id}
            className="cursor-pointer"
            onClick={() => handleClick(product)}
          >
            {product.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Products;
