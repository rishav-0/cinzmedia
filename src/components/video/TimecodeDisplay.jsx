import React, { useState, useEffect } from "react";

const TimecodeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00:00");

  useEffect(() => {
    const updateTimecode = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const frames = String(Math.floor(date.getMilliseconds() / 40)).padStart(
        2,
        "0"
      );
      setCurrentTime(`${hours}:${minutes}:${seconds}:${frames}`);
    };
    const interval = setInterval(updateTimecode, 40);
    return () => clearInterval(interval);
  }, []);

  return <div className="font-mono text-sm text-gray-400">{currentTime}</div>;
};

export default TimecodeDisplay;