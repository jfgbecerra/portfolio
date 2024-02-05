import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/Header';

export default function Home() {
  return (
    <div className='flex h-full flex-col'>
      <PortfolioHeader />
      <div className='flex-grow'></div>
      <Footer />
    </div>
  );
}
