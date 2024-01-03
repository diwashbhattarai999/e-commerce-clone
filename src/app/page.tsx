import Banner from "@/components/banner/Banner";
import DealOfTheDay from "@/components/dealOfTheDay/DealOfTheDay";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import Product from "@/models/Products";
import db from "@/utils/db";

export default async function Home() {
  let allProducts = [];
  try {
    await db.connectDB();
    let products = await Product.find().sort({ createdAt: -1 }).lean();
    allProducts = JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log("Error", error);
  } finally {
    await db.disconnectDB();
  }
  // console.log(allProducts);

  return (
    <main>
      <Banner />
      <DealOfTheDay products={allProducts} />
      <NewArrivals products={allProducts} />
      {/* <h1>Promotion Banner</h1>
        <h1>Popular Brands</h1> */}
      {/* <h1>Reviews</h1>
        <h1>Brand Showcase</h1>
        <Container>
          <h1>Offer Zones</h1>
          <h1>What&apos;s Hot</h1>
        </Container>
        <h1>Whatsapp banner</h1>
        <Container>
          <h1>SD Picks</h1>
          <h1>Second Promotion Banner</h1>
          <h1>New Arrivals</h1>
        </Container> */}
    </main>
  );
}
