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

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 text-center">
      <p className="font-body text-sm md:text-base font-bold leading-snug">
        <span className="text-yellow-400">NÃO FECHE OU SAIA</span>
        <br />
        Desconto especial só <span className="text-yellow-400">HOJE</span> nesta página:
        <br />
        <span className="text-yellow-400">25/02/2026</span> | Tempo restante:{" "}
        <span className="text-yellow-400 font-display">
          {hours}h {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s
        </span>
      </p>
    </div>
  );
};

export default CountdownBar;
