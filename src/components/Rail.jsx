import Track from "./Track";

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
      className="h-screen flex justify-center flex-col gap-1 overflow-x-auto scrollbar-hide"
      style={{
        paddingLeft: `${startPosition}px`,
      }}
    >
      <div className="flex flex-row gap-[214px]">
        {Object.entries(deckA).map(([key, value]) => (
          <Track key={key} value={value} />
        ))}
      </div>
      <div className="flex flex-row gap-[214px] pl-[356px]">
        {Object.entries(deckB).map(([key, value]) => (
          <Track key={key} value={value} />
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
