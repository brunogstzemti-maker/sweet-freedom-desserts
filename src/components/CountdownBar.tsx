import { useState, useEffect } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap text-center">
        <div className="font-body text-xs md:text-sm font-bold leading-tight">
          <span className="block md:inline">NÃO FECHE OU SAIA</span>
          <span className="block md:inline md:ml-1">Desconto especial só <span className="text-yellow-400">HOJE</span> nesta página: <span className="text-yellow-400">24/2/2026</span></span>
        </div>
        <div className="font-display text-xl md:text-2xl font-bold tabular-nums">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;
