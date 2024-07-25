import { getMainPageDetails } from "@/lib/getMainPageDetails";
import Hero from "@/components/HomepageComponents/Hero";
import AboutUs from "@/components/HomepageComponents/AboutUs";
import OrderCta from "@/components/HomepageComponents/OrderCta";
import VideoSection from "@/components/HomepageComponents/VideoSection";
import { getProducts } from "@/lib/getProducts";
export default async function Home() {
  const details = await getMainPageDetails();
  const producs = await getProducts();
  const product = producs[0];

  console.log(details);

  return (
    <main className="homepage">
      <Hero
        title={details.title}
        image={details.backgroundImg}
        subtitle={details.subtitle}
      />
      <OrderCta product={product} />
      <AboutUs description={details.description} />
      <VideoSection />
    </main>
  );
}
