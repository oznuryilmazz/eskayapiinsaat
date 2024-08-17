import React, { useEffect, useState } from "react";
import "./style.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  let dizi = ["E", "S", "K", "A", "Y", "A", "P", "I"];
  return (
    <div className={`loading-screen ${loading ? "active" : "inactive"}`}>
      {dizi.map((value, index) => (
        <div className="preloader__letter" key={index}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;
