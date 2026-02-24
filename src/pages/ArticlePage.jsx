import { useNavigate } from 'react-router-dom';
import { articleData } from '../data/newsData';

const LITERATA = "'Literata', Georgia, serif";

const InlineAd = () => (
  <div className="my-6 -mx-4 bg-[var(--bg-surface)] px-4 py-3">
    <div className="bg-gradient-to-b from-[#1a1614] via-[#2a2320] to-[#1a1614] rounded-lg overflow-hidden">
      <div className="flex flex-col items-center py-6 px-4">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mb-1"></div>
            <span className="text-[10px] font-bold text-yellow-600">AMBIENCE</span>
            <span className="text-[7px] text-gray-500 italic">the new standard</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-yellow-600">AMBIENCE</span>
            <span className="text-[8px] text-yellow-700 font-semibold">CREACIONS</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[22px] font-bold text-white tracking-wide mb-1" style={{ fontFamily: 'Georgia, serif' }}>THE FINAL</div>
          <div className="text-[18px] font-bold text-white tracking-[0.15em]" style={{ fontFamily: 'Georgia, serif' }}>STRETCH</div>
          <div className="text-[9px] text-gray-400 mt-2 tracking-widest">— READY TO MOVE-IN —</div>
          <div className="text-[8px] text-gray-400 mt-0.5">3/4 BHK APARTMENTS & PENTHOUSES</div>
          <div className="mt-2">
            <span className="text-[10px] font-bold text-white bg-red-700 px-2 py-0.5 rounded-sm">STARTING FROM ₹5.95 CR*</span>
          </div>
          <div className="text-[7px] text-gray-500 mt-1">📍 SECTOR 22, GURUGRAM</div>
          <div className="text-[14px] text-green-500 font-semibold mt-3">📞 9717003006</div>
        </div>
      </div>
      <div className="flex justify-between px-4 pb-2 text-[6px] text-gray-600">
        <span>Haryana RERA Number 310 of 2017 | www.haryanarera.gov.in</span>
        <span>*T&C APPLY</span>
      </div>
    </div>
    <p className="text-[12px] text-[var(--text-secondary)] mt-1.5">Ad</p>
  </div>
);

const AD_INTERVAL = 3;

const ArticlePage = () => {
  const navigate = useNavigate();
  const article = articleData;

  return (
    <div className="pb-[70px]">
      {/* Hero Image - full bleed */}
      <div className="relative">
        <img
          src={article.heroImage}
          alt=""
          className="w-full h-[380px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[80px]" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
        <p className="absolute bottom-3 left-4 text-[13px] text-[var(--text-secondary)]">
          {article.imageCaption}
        </p>
      </div>

      {/* Article content area */}
      <div className="bg-[var(--bg-primary)] rounded-t-3xl -mt-6 relative z-10 pt-1">
        {/* Category & Date */}
        <div className="px-4 pt-5 pb-3 flex items-center gap-2">
          <span className="text-[var(--text-secondary)] text-[14px] font-medium">{article.category}</span>
          <span className="text-[var(--text-tertiary)] text-[14px]">|</span>
          <span className="text-[var(--text-secondary)] text-[13px]">{article.date}</span>
        </div>

        {/* Headline */}
        <h1 className="px-4 text-[28px] font-extrabold leading-[1.2] text-[var(--text-primary)] mb-5" style={{ fontFamily: LITERATA }}>
          {article.headline}
        </h1>

        {/* Body paragraphs */}
        <div className="px-4">
          {article.paragraphs.map((para, index) => (
            <div key={index}>
              {/* First paragraph - highlighted green */}
              {index === 0 && (
                <p className="mb-5 text-[18px] leading-[1.65] text-[var(--text-primary)]" style={{ fontFamily: LITERATA }}>
                  <span className="bg-[var(--highlight-green)] box-decoration-clone py-0.5">{para}</span>
                </p>
              )}

              {/* Regular paragraphs */}
              {index > 0 && index !== 5 && (
                <p className="mb-5 text-[18px] leading-[1.65] text-[var(--text-primary)] opacity-90" style={{ fontFamily: LITERATA }}>
                  {para}
                </p>
              )}

              {/* "BUYER BEWARE" - highlighted yellow/gold */}
              {index === 5 && (
                <p className="mb-5 text-[18px] leading-[1.65]" style={{ fontFamily: LITERATA }}>
                  <span className="bg-[var(--highlight-green)] text-yellow-400 font-bold py-0.5">{para}</span>
                </p>
              )}

              {/* Inline ad at equal intervals */}
              {index > 0 && (index + 1) % AD_INTERVAL === 0 && <InlineAd />}

              {/* Related video after paragraph 4 */}
              {index === 4 && article.relatedVideo && (
                <div className="mb-5">
                  <div className="rounded-xl overflow-hidden relative">
                    <img
                      src={article.relatedVideo.thumbnail}
                      alt=""
                      className="w-full h-[220px] object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 rounded text-[9px] text-white font-medium">
                      WHITE HOUSE | APRIL 2, 2025
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold" style={{ fontFamily: 'Georgia, serif' }}>TOI</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <p className="text-red-500 text-[15px] font-extrabold text-center tracking-wide">U.S. STOPS COLLECTING</p>
                      <p className="text-center mt-1">
                        <span className="text-yellow-400 text-[14px] font-extrabold bg-black/60 px-3 py-1 tracking-wide">TRUMP'S 'UNJUST' TARIFFS</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--text-primary)] text-[14px] mt-3 font-medium leading-snug" style={{ fontFamily: LITERATA }}>{article.relatedVideo.title}</p>
                </div>
              )}

              {/* Quote after related video */}
              {index === 4 && article.quotes && (
                <p className="mb-5 text-[18px] leading-[1.65] text-[var(--text-primary)]" style={{ fontFamily: LITERATA }}>
                  <span className="bg-[var(--highlight-green)] box-decoration-clone py-0.5">{article.quotes[0]}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[var(--bg-surface)] border-t border-[var(--border-color)] z-50">
        <div className="flex items-center justify-between px-5 py-3">
          <button onClick={() => navigate(-1)} className="p-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/>
              <path d="M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <button className="flex items-center gap-2 border border-[var(--border-color)] rounded-lg px-5 py-2.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e53935" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
            <span className="text-[var(--text-primary)] text-[14px] font-medium">Go Ad-free</span>
          </button>

          <button className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </button>

          <button className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--icon-active)">
              <circle cx="12" cy="5" r="1.5"/>
              <circle cx="12" cy="12" r="1.5"/>
              <circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
