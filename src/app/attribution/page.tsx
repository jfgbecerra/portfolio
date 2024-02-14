import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/Header';

export default function Attribution() {
  return (
    <div className='flex h-full flex-col'>
      <PortfolioHeader />
      <span className='flex-grow'>Attribution</span>
      <Footer />
    </div>
  );
}
