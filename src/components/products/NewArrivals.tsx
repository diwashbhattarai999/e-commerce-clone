"use client";

import { BiTimeFive } from "react-icons/bi";

import Container from "../Container";
import Heading from "../Heading";
import NewProductCard from "./NewProductCard";

export interface Product {
  _id: string;
  name: string;
  description: string;
  brand: string;
  slug: string;
  category: string;
  subCategories: string[];
  details: {
    name: string;
    value: string;
    _id: string;
  }[];
  questions: any[];
  subProducts: {
    images: {
      url: string;
      public_url: string;
    }[];
    description_images: any[];
    color: {
      color: string;
      image: string;
    };
    sizes: {
      size: string;
      qty: number;
      price: number;
      _id: string;
    }[];
    discount: number;
    _id: string;
  }[];
  numReviews: number;
  rating: number;
  refundPolicy: string;
  reviews: {
    reviewBy: string;
    rating: string;
    review: string;
    size: string;
    style: {
      color: string;
      image: string;
    };
    fit: string;
    images: {
      url: string;
      public_url: string;
    }[];
    _id: string;
    createdAt: string;
    updatedAt: string;
  }[];
  shipping: string;
}

interface NewArrivalsProps {
  products: Product[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
  return (
    <div>
      <Container>
        <Heading title="New Arrivals" Icon={BiTimeFive} />
        <div className="products">
          {products.map((product: Product) => (
            <div key={product._id}>
              <NewProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
