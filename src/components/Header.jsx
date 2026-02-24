const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-primary)]">
      <div className="flex items-center gap-4">
        <button className="flex flex-col gap-[4px] w-[22px]">
          <span className="block w-full h-[2.5px] bg-[var(--icon-active)] opacity-90 rounded-full"></span>
          <span className="block w-full h-[2.5px] bg-[var(--icon-active)] opacity-90 rounded-full"></span>
          <span className="block w-full h-[2.5px] bg-[var(--icon-active)] opacity-90 rounded-full"></span>
        </button>
        <span className="text-[var(--text-primary)] font-extrabold text-[22px] tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif' }}>TOI</span>
      </div>
      <button className="p-1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--icon-active)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </button>
    </div>
  );
};

export default Header;
