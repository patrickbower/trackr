import TrackA from "./TrackA";
import TrackB from "./TrackB";

function Rail({ data, halfScreenWidth }) {
  let deckA = {};
  let deckB = {};

  Object.keys(data).forEach((key, index) => {
    if (index % 2 === 0) {
      deckA[key] = data[key];
    } else {
      deckB[key] = data[key];
    }
  });

  const startPosition = halfScreenWidth - 250;
  const endPosition = halfScreenWidth - 466;

  return (
    <div
      className="h-screen flex justify-center flex-col gap-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      style={{
        paddingLeft: `${startPosition}px`,
      }}
    >
      <div className="flex flex-row gap-[214px]">
        {Object.entries(deckA).map(([key, value]) => (
          <TrackA key={key} index={key} value={value} />
        ))}
      </div>
      <div className="flex flex-row gap-[214px] pl-[356px]">
        {Object.entries(deckB).map(([key, value]) => (
          <TrackB key={key} index={key} value={value} />
        ))}
        <div
          className="flex-none"
          style={{
            width: `${endPosition}px`,
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Rail;
