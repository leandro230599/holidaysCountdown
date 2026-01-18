import { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const targetDate = new Date(2026, 1, 7, 16, 0, 0).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      let secondsLeft = Math.max((targetDate - now) / 1000, 0);

      const days = pad(Math.floor(secondsLeft / 86400));
      secondsLeft %= 86400;

      const hours = pad(Math.floor(secondsLeft / 3600));
      secondsLeft %= 3600;

      const minutes = pad(Math.floor(secondsLeft / 60));
      const seconds = pad(Math.floor(secondsLeft % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section">
      <div id="countdown">
        <div className="countdown-inner">

          <h2 className="countdown-title">
            🌴 Vacaciones de verano en…
          </h2>
          <div className="countdown-row">
            <span>{timeLeft.days}</span>
            <span>{timeLeft.hours}</span>
            <span>{timeLeft.minutes}</span>
            <span>{timeLeft.seconds}</span>
          </div>

          <ul className="countdown-row labels">
            <li>Días</li>
            <li>Horas</li>
            <li>Minutos</li>
            <li>Segundos</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

function pad(n) {
  return n < 10 ? "0" + n : n;
}

export default Countdown;