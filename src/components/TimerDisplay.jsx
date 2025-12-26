const TimerDisplay = ({ days, hours, minutes, seconds }) => {
  const Slot = ({ val, lbl }) => (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full aspect-square flex items-center justify-center bg-slate-900 rounded-3xl shadow-xl border border-slate-800">
        <span className="text-3xl sm:text-5xl font-mono font-bold text-blue-400 tabular-nums">
          {val.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 text-[10px] font-black text-slate-400 uppercase tracking-tighter">{lbl}</span>
    </div>
  );

  return (
    <div className="flex gap-4 w-full">
      <Slot val={days} lbl="Days" />
      <Slot val={hours} lbl="Hours" />
      <Slot val={minutes} lbl="Mins" />
      <Slot val={seconds} lbl="Secs" />
    </div>
  );
};
export default TimerDisplay;