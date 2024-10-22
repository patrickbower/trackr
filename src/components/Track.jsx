function Rail({ value }) {
  return (
    <div className="bg-zinc-600 bg-opacity-50 backdrop-blur-md px-10 py-8 flex-none w-[500px]">
      <div className="flex justify-between gap-9 items-center bg-opacity-100 text-white">
        <span className="text-4xl font-bold w-16 flex-shrink-0 text-center">
          {value.in}
        </span>
        <div className="flex-grow">
          <p className="w-[220px] font-semibold uppercase overflow-hidden whitespace-nowrap truncate">
            {value.track}
          </p>
          <p className="w-[220px] text-sm font-light overflow-hidden whitespace-nowrap truncate">
            {value.artist}
          </p>
        </div>
        <span className="text-4xl font-bold w-16 flex-shrink-0">
          {value.out}
        </span>
      </div>
    </div>
  );
}

export default Rail;
