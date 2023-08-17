import Container from "@/components/Container";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <main className="pt-96 laptop:pt-44">
      <div className="min-h-screen">
        <Banner />
        <Container>
          <h1>Deal Of The Day</h1>
          <h1>Promotion Banner</h1>
          <h1>Popular Brands</h1>
        </Container>
        <h1>Reviews</h1>
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
        </Container>
      </div>
    </main>
  );
}
