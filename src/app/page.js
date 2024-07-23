import { getMainPageDetails } from "@/lib/getMainPageDetails";
import Hero from "@/components/HomepageComponents/Hero";
import AboutUs from "@/components/HomepageComponents/AboutUs";
import OrderCta from "@/components/HomepageComponents/OrderCta";
import VideoSection from "@/components/HomepageComponents/VideoSection";
export default async function Home() {
  const details = await getMainPageDetails();

  console.log(details);

  return (
    <main className="homepage">
      <Hero
        title={details.title}
        image={details.backgroundImg}
        subtitle={details.subtitle}
      />
      <OrderCta />
      <AboutUs description={details.description} />
      <VideoSection />
    </main>
  );
}
