import React, { useEffect, useState } from "react";
import donutImg from "/images/donut.webp";

const FallingDonuts = () => {
  const [donuts, setDonuts] = useState([]);

  const createDonut = () => {
    const id = Date.now();
    const left = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 30;
    const rotation = Math.random() * 360;

    setDonuts((prev) => [
      ...prev,
      { id, left, size, rotation, top: -100, speed: Math.random() * 2 + 1 },
    ]);
  };

  useEffect(() => {
    const interval = setInterval(createDonut, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animation = setInterval(() => {
      setDonuts((prev) =>
        prev
          .map((donut) => ({
            ...donut,
            top: donut.top + donut.speed,
          }))
          .filter((donut) => donut.top < window.innerHeight)
      );
    }, 16);

    return () => clearInterval(animation);
  }, []);

  const handleClick = (id) => {
    setDonuts((prev) => prev.filter((donut) => donut.id !== id));
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    >
      {donuts.map((donut) => (
        <img
          key={donut.id}
          src={donutImg}
          alt="donut"
          className="absolute pointer-events-auto cursor-pointer select-none"
          style={{
            left: donut.left,
            top: donut.top,
            width: donut.size,
            height: donut.size,
            transform: `rotate(${donut.rotation}deg)`,
            transition: "transform 0.2s ease",
          }}
          onClick={() => handleClick(donut.id)}
        />
      ))}
    </div>
  );
};

export default FallingDonuts;