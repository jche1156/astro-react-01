import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SampleReactComponent() {
  const smallScore = 0;
  const smallStep = 5;
  const bigScore = 100;
  const bigStep = 10;

  const [score, setScore] = useState(smallScore + bigScore);

  return (
    <div className="mx-auto my-2 flex max-w-xl flex-col space-y-4 rounded-xl border border-2 bg-red-300 p-4">
      <h1>Counters that update separately</h1>
      <IncrementingButton
        start={smallScore}
        step={bigStep}
        label="Start Small"
        score={score}
        setScore={setScore}
      />
      <IncrementingButton
        start={bigScore}
        step={smallStep}
        label="Start Big"
        score={score}
        setScore={setScore}
      />
      <p>Your total score: {score} points</p>
    </div>
  );
}

function IncrementingButton({ start, step, label, score, setScore }) {
  const [count, setCount] = useState(start);

  function handleClick() {
    setCount(count + step);
    setScore(score + step);
  }

  return (
    <Button onClick={handleClick}>
      {label}: {count}
    </Button>
  );
}
