import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isHome = location.pathname === '/';

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50">
      {/* Sticky ad banner above nav */}
      <div className="h-[48px] bg-[var(--bg-elevated)] flex items-center justify-between px-3 overflow-hidden">
        <div className="flex items-center gap-1">
          <div className="flex flex-col items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mb-0.5"></div>
            <span className="text-[7px] font-bold text-yellow-600 leading-none">AMBIENCE</span>
            <span className="text-[5px] text-gray-500 leading-none italic">the new standard</span>
          </div>
        </div>
        <div className="text-center flex-1 mx-2">
          <div className="text-[9px] font-bold text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>THE FINAL STRETCH</div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-[7px] font-bold text-white bg-red-700 px-1 rounded-sm">STARTING FROM ₹5.95 CR*</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[7px] font-bold text-yellow-600 leading-none">AMBIENCE</span>
          <span className="text-[6px] text-yellow-700 font-semibold leading-none">CREACIONS</span>
          <div className="text-[7px] text-green-500 font-semibold mt-0.5">📞 9717003006</div>
        </div>
      </div>
      {/* Nav bar */}
      <div className="bg-[var(--bg-surface)] border-t border-[var(--border-color)]">
        <div className="flex items-center justify-around py-2.5">
          <button onClick={() => navigate('/')} className="flex flex-col items-center gap-1 min-w-[70px]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill={isHome ? 'var(--icon-active)' : 'var(--icon-inactive)'}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className={`text-[11px] ${isHome ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'}`}>Newsfeed</span>
          </button>
          <button onClick={toggleTheme} className="flex flex-col items-center gap-1 min-w-[70px]">
            {theme === 'dark' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--icon-inactive)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2"/>
                <path d="M12 21v2"/>
                <path d="M4.22 4.22l1.42 1.42"/>
                <path d="M18.36 18.36l1.42 1.42"/>
                <path d="M1 12h2"/>
                <path d="M21 12h2"/>
                <path d="M4.22 19.78l1.42-1.42"/>
                <path d="M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--icon-inactive)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
            <span className="text-[11px] text-[var(--text-secondary)]">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button className="flex flex-col items-center gap-1 min-w-[70px]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--icon-inactive)" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 15h18"/>
            </svg>
            <span className="text-[11px] text-[var(--text-secondary)]">Exclusive</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
