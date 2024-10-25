function Rail({ value, index }) {
  const trackIndex = Number(index) + 1;

  return (
    <div className="bg-zinc-600 bg-opacity-50 backdrop-blur-md px-10 py-8 flex-none w-[500px] snap-center rounded-lg">
      <div className="flex justify-between gap-9 items-center bg-opacity-100 text-white">
        <span className="text-4xl font-bold w-16 flex-shrink-0 text-center relative">
          <span className="w-24 absolute left-1/2 transform -translate-x-1/2 text-xs font-light opacity-20 uppercase -top-5">
            IN
          </span>
          {value.in}
          <span className="w-24 absolute left-1/2 transform -translate-x-1/2 text-xs font-light text-blue-500 uppercase -bottom-5">
            {value.mix_in}
          </span>
        </span>
        <div className="flex-grow">
          <p className="w-[220px] font-semibold uppercase overflow-hidden whitespace-nowrap truncate">
            {trackIndex}. {value.track}
          </p>
          <p className="w-[220px] text-sm font-light overflow-hidden whitespace-nowrap truncate">
            {value.artist}
          </p>
        </div>
        <span className="text-4xl font-bold w-16 flex-shrink-0 text-center relative">
          <span className="w-24 absolute left-1/2 transform -translate-x-1/2 text-xs font-light opacity-20 uppercase -top-5">
            OUT
          </span>
          {value.out}
          <span className="w-24 absolute left-1/2 transform -translate-x-1/2 text-xs font-light text-blue-500 uppercase -bottom-5">
            {value.mix_out}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Rail;
