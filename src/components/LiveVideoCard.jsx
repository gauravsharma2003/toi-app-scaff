import { liveVideo } from '../data/newsData';

const LITERATA = "'Rethink Sans', sans-serif";

const LiveVideoCard = () => {
  return (
    <div className="border-b border-[var(--border-color)]">
      <div className="px-4 pt-5 pb-4">
        <p className="text-[13px] text-[var(--text-secondary)] mb-1">{liveVideo.category}</p>
        <h3 className="text-[20px] font-bold text-[var(--text-primary)] leading-[1.25] mb-4" style={{ fontFamily: LITERATA }}>{liveVideo.title}</h3>
        <div className="relative rounded-xl overflow-hidden bg-[var(--bg-surface)]">
          <img src={liveVideo.thumbnail} alt="" className="w-full h-[230px] object-cover" />
          {/* Center pause button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded">
              <div className="w-3.5 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          {/* Mute icon top-right */}
          <button className="absolute top-3 right-3 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          </button>
          {/* TOI badge top-left */}
          <div className="absolute top-3 left-3 w-7 h-7 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white text-[8px] font-bold" style={{ fontFamily: 'Georgia, serif' }}>TOI</span>
          </div>
          {/* Live indicator bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' }}>
            <div className="flex items-center gap-1.5">
              <div className="w-[9px] h-[9px] rounded-full bg-[#e53935]"></div>
              <span className="text-[var(--text-primary)] text-[13px] font-bold tracking-wide">LIVE</span>
            </div>
            <span className="text-[var(--text-secondary)] text-[11px] ml-1">Partners</span>
            <div className="flex items-center gap-2.5 ml-1">
              <span className="text-[11px] text-[var(--text-secondary)] font-semibold">Bissell</span>
              <span className="text-[11px] text-[var(--text-secondary)] font-semibold">Cetaphil</span>
              <span className="text-[11px] text-[var(--text-secondary)] font-semibold">K</span>
              <span className="text-[11px] text-[var(--text-secondary)] font-semibold">Sling</span>
            </div>
            <button className="ml-auto">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--icon-active)">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoCard;
