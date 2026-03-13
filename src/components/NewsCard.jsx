import { useNavigate } from 'react-router-dom';

const LITERATA = "'Rethink Sans', sans-serif";

const DismissButton = () => (
  <button className="p-1 flex-shrink-0">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18"/>
      <path d="M6 6l12 12"/>
    </svg>
  </button>
);

const NewsCard = ({ item }) => {
  const navigate = useNavigate();

  // Full-image card (like the International Business / Trump story)
  if (item.fullImage) {
    return (
      <div className="border-b border-[var(--border-color)]">
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] text-[var(--text-secondary)] font-normal">{item.category}</span>
            <DismissButton />
          </div>
          <button onClick={() => navigate(`/article/${item.id}`)} className="text-left w-full block">
            <h3 className="text-[21px] font-bold leading-[1.25] mb-4 text-[var(--text-primary)]" style={{ fontFamily: LITERATA }}>
              {item.boldPart && <span className="font-extrabold">{item.boldPart}</span>}
              <span className="font-semibold">{item.normalPart || item.headline}</span>
            </h3>
          </button>
        </div>
        <button onClick={() => navigate(`/article/${item.id}`)} className="w-full block">
          <img src={item.image} alt="" className="w-full h-[240px] object-cover" />
        </button>
      </div>
    );
  }

  return (
    <div className="border-b border-[var(--border-color)]">
      <div className="px-4 py-4">
        {/* Category row */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-0">
            <span className="text-[13px] text-[var(--text-secondary)]">{item.category}</span>
            {item.toiPlus && (
              <>
                <span className="text-[var(--text-tertiary)] mx-2 text-[13px]">|</span>
                <span className="text-[var(--text-primary)] font-bold text-[13px] tracking-tight">TOI</span>
                <span className="text-[#e53935] font-extrabold text-[15px] ml-0.5 leading-none">+</span>
              </>
            )}
            {item.isLive && (
              <>
                <span className="text-[var(--text-tertiary)] mx-2 text-[13px]">|</span>
                <div className="flex items-center gap-1">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#e53935]"></div>
                  <span className="text-[#e53935] text-[13px] font-medium">Live</span>
                </div>
              </>
            )}
          </div>
          <DismissButton />
        </div>

        {/* Content row */}
        <button onClick={() => navigate(`/article/${item.id}`)} className="text-left w-full block">
          <div className="flex gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-[18px] font-bold leading-[1.3] text-[var(--text-primary)]" style={{ fontFamily: LITERATA }}>
                {item.boldPart && <span className="font-extrabold">{item.boldPart}</span>}
                <span className="font-semibold">{item.normalPart || item.headline}</span>
              </h3>
              {item.liveUpdates && (
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="text-[var(--text-secondary)] text-[13px]">↳</span>
                  <span className="text-[var(--text-secondary)] text-[13px]">{item.liveUpdates}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--text-tertiary)">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>
              )}
            </div>
            {item.image && (
              <div className="relative w-[120px] h-[84px] rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                {item.hasVideo && (
                  <div className="absolute bottom-1.5 right-1.5">
                    <div className="w-6 h-6 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
