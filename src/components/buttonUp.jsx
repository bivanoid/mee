import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ButtonUp({ onClick }) {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowUpButton(window.scrollY >= 1000);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`buttonUp ${showUpButton ? "up" : "down"}`}
      aria-label="Scroll ke atas"
    >
      <ArrowUp />
    </button>
  );
}
