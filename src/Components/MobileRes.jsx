import { useState, useEffect } from "react";

const MobileRes = () => {
  const [mob, setmob] = useState({ width: undefined });

  useEffect(() => {
    function handleresize() {
      setmob({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleresize);
    handleresize();
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  useEffect(() => {
    let { width } = mob;

    // Remove the GIF background
    document.getElementById("root").style.backgroundImage = "none";

    // Optional: Set a default background color
    if (width < 600) {
      document.getElementById("root").style.backgroundColor = "#f0f0f0"; // Light gray background for mobile
    } else {
      document.getElementById("root").style.backgroundColor = "#ffffff"; // White background for larger screens
    }

    if (width > 1300) {
      document.getElementById("root").style.backgroundSize = "100% 100%";
    } else {
      document.getElementById("root").style.backgroundSize = "auto 100%";
    }
  }, [mob]);

  return mob;
};

export default MobileRes;
