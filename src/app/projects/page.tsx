import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/Header';

export default function Projects() {
  return (
    <div className='flex h-full flex-col'>
      <PortfolioHeader />
      <span className='flex-grow'>Projects</span>
      <Footer />
    </div>
  );
}
