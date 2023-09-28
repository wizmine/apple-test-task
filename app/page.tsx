import FooterNav from "@/components/FooterNav";
import Home from "@/components/Home";
import PhoneList from "@/components/PhoneList";
import ProductList from "@/components/ProductList";
import SlideShow from "@/components/SlideShow";

export default function HomePage() {
  return (
    <main>
      <Home />
      <PhoneList />
      <ProductList />
      <SlideShow />
      <FooterNav />
    </main>
  );
}
