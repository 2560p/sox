import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SubscriptionPlans />
      <HowItWorks />
      <Footer />
    </main>
  );
}
