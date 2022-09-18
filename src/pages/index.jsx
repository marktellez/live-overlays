import { useState } from "react";
import { addDays, intervalToDuration, set } from "date-fns";
import useInterval from "@rooks/use-interval";

const next = set(addDays(new Date(), 1), {
  hours: "09",
  minutes: "00",
  seconds: "00",
});

export default function Homepage() {
  const [tick, setTick] = useState(0);
  useInterval(() => setTick((prev) => prev + 1), 500, true);

  const timeLeft = intervalToDuration({
    start: new Date(),
    end: new Date(next),
  });

  function pad(val) {
    return val.toString().length > 1 ? val : `0${val}`;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="mt-16 container mx-auto">
      <div className="font-lucky text-[200px]">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </div>
    </div>
  );
}
