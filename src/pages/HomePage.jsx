import Header from '../components/Header';
import QuickActions from '../components/QuickActions';
import PromoCarousel from '../components/PromoCarousel';
import TabNav from '../components/TabNav';
import NewsCard from '../components/NewsCard';
import LiveVideoCard from '../components/LiveVideoCard';
import AdBanner from '../components/AdBanner';
import BottomNav from '../components/BottomNav';
import { newsItems } from '../data/newsData';

const HomePage = () => {
  return (
    <div className="pb-[110px]">
      <Header />
      <QuickActions />
      <PromoCarousel />
      <TabNav />

      {/* International Business - full image card */}
      <NewsCard item={newsItems[0]} />

      {/* Business & Economy */}
      <NewsCard item={newsItems[1]} />

      {/* India */}
      <NewsCard item={newsItems[2]} />

      {/* Live Videos */}
      <LiveVideoCard />

      {/* Middle East */}
      <NewsCard item={newsItems[3]} />

      {/* Inline Ad */}
      <AdBanner />

      {/* Cricket Live */}
      <NewsCard item={newsItems[4]} />

      {/* South Asia */}
      <NewsCard item={newsItems[5]} />

      {/* Inline Ad */}
      <AdBanner />

      <BottomNav />
    </div>
  );
};

export default HomePage;
