import React, { useState, useEffect } from "react";
import Rail from "./components/Rail";
import Info from "./components/Info";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [halfScreenWidth, setHalfScreenWidth] = useState(null);

  useEffect(() => {
    setHalfScreenWidth(window.innerWidth / 2);

    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    <div className="bg-neutral-700 w-screen h-screen flex items-center justify-center">
      return <div>Loading</div>;
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-neutral-700 w-screen h-screen">
      <div className="fixed inset-y-0 left-[calc(50%-100px)] w-px bg-white"></div>
      <div className="fixed inset-y-0 left-[calc(50%+100px)] w-px bg-white"></div>
      {data && <Rail data={data} halfScreenWidth={halfScreenWidth} />}
      <div className="fixed inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-red-500"></div>
      <Info />
    </div>
  );
}

export default App;
