import { useEffect, useState } from "react";

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
    backgroundImage: "url(https://i.imgur.com/wCG2csZ.png)",
    backgroundPosition: `5% ${scrollPos * 0.2}px`,
    backgroundSize: "cover",
    height: "100vh",
    backgroundSize:"100%",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
  };

  return <div style={backgroundStyle} />;
};
export default Background;