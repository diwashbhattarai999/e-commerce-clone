import mongoose from "mongoose";
import { CategoryType } from "./Category";
import { subCategoryType } from "./SubCategory";

export interface subProductType {
  sku: string;
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
}

const { ObjectId } = mongoose.Schema;

export type reviewByType = {
  name: string;
  email: string;
  role: string;
  image: string;
  emailVerfied: boolean;
  defaultPaymentMethod: string;
  updatedAt: string;
  _id: string;
  address: {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    city: string;
    zipcode: string;
    state: string;
    country: string;
    active: boolean;
  }[];
};

export type reviewsType = {
  reviewBy: reviewByType;
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
  likes: { likes: string };
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  brand: string;
  slug: string;
  category: CategoryType;
  subCategories: subCategoryType[];
  details: {
    name: string;
    value: string;
    _id: string;
  }[];
  questions: any[];
  subProducts: subProductType[];
  numReviews: number;
  rating: number;
  refundPolicy: string;
  reviews: reviewsType[];
  shipping: string;
}

const reviewSchema = new mongoose.Schema({
  reviewBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  style: {
    color: String,
    image: String,
  },
  fit: {
    type: String,
    required: true,
  },
  images: [],
  likes: [],
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      // lowercase: true,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
    },
    subcategories: [
      {
        type: ObjectId,
        ref: "subCategory",
      },
    ],
    details: [
      {
        name: String,
        value: String,
      },
    ],
    questions: [
      {
        question: String,
        answer: String,
      },
    ],
    reviews: [reviewSchema],
    refundPolicy: {
      type: String,
      default: "30 days",
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    shipping: {
      type: Number,
      required: true,
    },
    subProducts: [
      {
        sku: String,
        images: [],
        description_images: [],
        color: {
          color: {
            type: String,
          },
          image: {
            type: String,
          },
          sizes: [
            {
              size: String,
              qty: Number,
              price: Number,
            },
          ],
          discount: {
            type: Number,
            default: 0,
          },
          sold: {
            type: Number,
            default: 0,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
