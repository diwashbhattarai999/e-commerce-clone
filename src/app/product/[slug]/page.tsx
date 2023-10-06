import Container from "@/components/Container";
import MainSwiper from "@/components/productPage/mainSwiper/MainSwiper";
import BreadCrumbs from "@/components/products/Breadcrumbs";
import ProductInfos from "@/components/productPage/infos/ProductInfos";
import Category from "@/models/Category";
import Product, { ProductType, subProductType } from "@/models/Products";
import SubCategory from "@/models/SubCategory";
import db from "@/utils/db";
interface PageParams {
  params: {
    slug: string;
  };
  searchParams: {
    style: number;
    size: number;
  };
}

export interface CustomProductType extends ProductType {
  images: {
    url: string;
    public_url: string;
  }[];
  sizes: {
    size: string;
    qty: number;
    price: number;
    _id: string;
  }[];
  discount: number;
  sku: string;
  colors: {
    color: string;
    image: string;
  }[];
  priceRange: string;
  price: any;
  priceBefore: number;
  quantity: number;
}

export default async function page({ params, searchParams }: PageParams) {
  const slug = params.slug;
  const style = searchParams.style;
  const size = searchParams?.size || 0;

  let product: ProductType | null;
  let subProduct: subProductType | undefined;
  let prices: number[] | undefined;
  let newProduct: CustomProductType | undefined;

  try {
    //connect to database
    await db.connectDB();

    //get the product and subproduct
    product = await Product.findOne({ slug })
      .populate({ path: "category", model: Category })
      // .populate({ path: "subCategories", model: SubCategory })
      .lean();
    subProduct = product?.subProducts[style];

    //check if product and subproduct exists
    if (!product || subProduct === undefined) {
      return <div>Product not found</div>;
    }

    //get the all prices array
    prices = subProduct?.sizes.map((s) => s.price).sort((a, b) => a - b);

    //define the new custom product
    newProduct = {
      ...product,
      images: subProduct?.images,
      sizes: subProduct?.sizes,
      discount: subProduct?.discount,
      sku: subProduct?.sku,
      colors: product?.subProducts?.map((p) => p.color),
      priceRange: subProduct?.discount
        ? `From ${(prices[0] - prices[0] / subProduct?.discount).toFixed(2)} 
           to ${(
             prices[prices?.length - 1] -
             prices[prices?.length - 1] / subProduct?.discount
           ).toFixed(2)}$`
        : `From ${prices[0]} to ${prices[prices?.length - 1]}$`,
      price:
        subProduct?.discount > 0
          ? (
              subProduct?.sizes[size]?.price -
              subProduct?.sizes[size]?.price / subProduct?.discount
            ).toFixed(2)
          : subProduct?.sizes[size]?.price,
      priceBefore: subProduct?.sizes[size]?.price,
      quantity: subProduct?.sizes[size]?.qty,
    };

    newProduct = JSON.parse(JSON.stringify(newProduct));
  } catch (error) {
    console.log("Error", error);
  } finally {
    await db.disconnectDB();
  }

  return (
    <div className="mobile:pt-2">
      <Container>
        <BreadCrumbs product={newProduct} />
        <div className="bg-white p-2 mb-2 flex flex-col tablet:flex-row gap-6 relative">
          <MainSwiper images={newProduct?.images} />
          <ProductInfos product={newProduct} />
        </div>
      </Container>
    </div>
  );
}
