import { useEffect, useState } from "react";
import "./Background.css";
import background from "./background.jpg";
const Background = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundStyle = {
    background: `url(${background}) repeat 0 0 `,
    backgroundPosition: `5% ${scrollPos * 0.2}px`,
    backgroundSize: "stretch",
    backgroundRepeat: "repeat",
    height: "100vh",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
  };

  return <div style={backgroundStyle} className="background" />;
};
export default Background;
