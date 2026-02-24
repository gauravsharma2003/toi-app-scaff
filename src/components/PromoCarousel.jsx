import { promoCards } from '../data/newsData';

const PromoCarousel = () => {
  return (
    <div className="flex gap-3 px-4 py-2 overflow-x-auto">
      {promoCards.map((card) => (
        <div
          key={card.id}
          className="flex-shrink-0 w-[88%] bg-[var(--bg-surface)] rounded-xl overflow-hidden flex h-[100px]"
        >
          <div className="flex-1 px-3 py-2.5 flex items-start">
            <p className="text-[13px] text-[var(--text-primary)] opacity-90 font-medium leading-[1.35] line-clamp-4">{card.title}</p>
          </div>
          <div className="w-[40%] flex-shrink-0">
            <img src={card.image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCarousel;
