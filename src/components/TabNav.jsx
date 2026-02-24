const TabNav = () => {
  return (
    <div className="flex items-end justify-around pt-4 pb-0 border-b border-[var(--border-color)] sticky top-0 bg-[var(--bg-primary)] z-40">
      <button className="flex flex-col items-center pb-2.5 relative">
        <span className="text-[var(--text-primary)] font-bold text-[16px]">Top</span>
        <div className="absolute bottom-0 w-10 h-[3px] bg-[var(--text-primary)] rounded-full"></div>
      </button>
      <button className="flex items-start gap-0 pb-2.5">
        <span className="text-[var(--text-secondary)] text-[16px]">For You</span>
        <div className="w-[7px] h-[7px] rounded-full bg-[#34c759] mt-0.5 ml-1"></div>
      </button>
      <button className="pb-2.5">
        <span className="text-[var(--text-secondary)] text-[16px]">ePaper</span>
      </button>
    </div>
  );
};

export default TabNav;
