const AdBanner = ({ sticky = false }) => {
  return (
    <div className={`w-full ${sticky ? 'pb-0' : 'py-2'}`}>
      <div className="h-[50px] bg-[var(--bg-elevated)] flex items-center justify-between px-3 overflow-hidden">
        <div className="flex items-center gap-1">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mb-0.5"></div>
            <span className="text-[8px] font-bold text-yellow-600 leading-none">AMBIENCE</span>
            <span className="text-[6px] text-gray-500 leading-none italic">the new standard</span>
          </div>
        </div>
        <div className="text-center flex-1 mx-2">
          <div className="text-[11px] font-bold text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>THE FINAL STRETCH</div>
          <div className="text-[7px] text-gray-400 tracking-wide">— READY TO MOVE-IN —</div>
          <div className="text-[7px] text-gray-400">3/4 BHK APARTMENTS & PENTHOUSES</div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-[8px] font-bold text-white bg-red-700 px-1 rounded-sm">STARTING FROM ₹5.95 CR*</span>
          </div>
          <div className="text-[6px] text-gray-500">📍 SECTOR 22, GURUGRAM</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[8px] font-bold text-yellow-600 leading-none">AMBIENCE</span>
          <span className="text-[7px] text-yellow-700 font-semibold leading-none">CREACIONS</span>
          <div className="text-[8px] text-green-500 font-semibold mt-0.5">📞 9717003006</div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
