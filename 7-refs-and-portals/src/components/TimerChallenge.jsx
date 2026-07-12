import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const dialog = useRef();

  const [timeRemain, SetTimeRemain] = useState(targetTime * 1000);
  const timerIsActive = timeRemain > 0 && timeRemain < targetTime * 1000;

  if (timeRemain <= 0) {
    clearInterval(timerRef.current);
    dialog.current.open();
  }

  function handleReset() {
    SetTimeRemain(targetTime * 1000);
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      SetTimeRemain((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timerRef.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime={timeRemain} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
