const QuickActions = () => {
  return (
    <div className="flex justify-center gap-12 py-5 px-4">
      {/* TOI+ */}
      <button className="flex flex-col items-center gap-2.5">
        <div className="w-[60px] h-[60px] rounded-full bg-[var(--bg-surface)] flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14"/>
            <path d="M5 12h14"/>
          </svg>
        </div>
        <span className="text-[11px] text-[var(--text-secondary)] tracking-wide">TOI+</span>
      </button>

      {/* Games */}
      <button className="flex flex-col items-center gap-2.5">
        <div className="w-[60px] h-[60px] rounded-full bg-[var(--bg-surface)] flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 4.5h6v6h-6z"/>
            <path d="M13.5 4.5h6v6h-6z"/>
            <path d="M4.5 13.5h6v6h-6z"/>
            <path d="M16.5 13.5v6"/>
            <path d="M13.5 16.5h6"/>
          </svg>
        </div>
        <span className="text-[11px] text-[var(--text-secondary)] tracking-wide">Games</span>
      </button>

      {/* Watch */}
      <button className="flex flex-col items-center gap-2.5">
        <div className="w-[60px] h-[60px] rounded-full bg-[var(--bg-surface)] flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <path d="M10 9.5l5 3-5 3z" fill="var(--icon-active)" stroke="none"/>
          </svg>
        </div>
        <span className="text-[11px] text-[var(--text-secondary)] tracking-wide">Watch</span>
      </button>
    </div>
  );
};

export default QuickActions;
