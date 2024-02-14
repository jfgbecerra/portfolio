import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/Header';

export default function Contact() {
  return (
    <div className='flex h-full flex-col'>
      <PortfolioHeader />
      <span className='flex-grow'>Contact</span>
      <Footer />
    </div>
  );
}
