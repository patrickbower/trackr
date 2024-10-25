import React, { useState } from "react";

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  const InfoBox = function () {
    return (
      <div className="w-96 bg-white rounded-lg p-4 mt-4 shadow-xl">
        <p className="text-neutral-600 font-semibold pb-4">
          DJ tool for mixing information. Where to bring records in, cut out and
          blend together.
        </p>
        <p className="text-neutral-600 font-semibold pb-4">
          Intended for landscape mobile screens, swiping through while DJ'ing.
        </p>
        <ul className="text-neutral-600 font-semibold list-disc list-inside">
          <li>Google Sheets - simple private database</li>
          <li> Goggle App Scripts - custom API endpoints</li>
          <li>React.js - interface</li>
        </ul>
        <div className="my-4 w-96 h-0.5 bg-neutral-600 relative -left-4"></div>
        <a
          href="https://www.patrickbower.com/"
          className="text-neutral-400 hover:text-neutral-600"
        >
          Made by Patrick Bower
        </a>
      </div>
    );
  };

  return (
    <div className="absolute top-4 left-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full w-6 h-6"
      >
        <p className="font-bold text-neutral-600 block">i</p>
      </button>
      {isOpen ? <InfoBox /> : null}
    </div>
  );
};

export default Info;
