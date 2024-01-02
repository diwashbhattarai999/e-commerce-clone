import mongoose from "mongoose";
import { CategoryType } from "./Category";

export interface subCategoryType {
  name: string;
  slug: string;
  parent: CategoryType;
}

const { ObjectId } = mongoose.Schema;

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "must be at least 2 characters"],
      maxlength: [32, "must be less than 32 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
