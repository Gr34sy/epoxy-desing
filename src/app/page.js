import { getMainPageDetails } from '@/lib/getMainPageDetails';
import Hero from '@/components/HomepageComponents/Hero';
import AboutUs from '@/components/HomepageComponents/AboutUs';
import OrderCta from '@/components/HomepageComponents/OrderCta';
import VideoSection from '@/components/HomepageComponents/VideoSection';
import { getProducts } from '@/lib/getProducts';

const placeholderProduct = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  premium: false,
  _id: '',
};

const placeholderDetails = {
  title: 'Placeholder',
  subtitle: 'Subtitle',
  backgroundImg: '',
};
export default async function Home() {
  const details = (await getMainPageDetails()) || placeholderDetails;

  const products = (await getProducts()) || [placeholderProduct];

  const product = products[0];

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
