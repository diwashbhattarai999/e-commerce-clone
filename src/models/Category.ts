import mongoose from "mongoose";

export interface CategoryType {
  name: string;
  slug: string;
}

const categorySchema = new mongoose.Schema(
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
    },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
