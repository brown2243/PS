const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const WEEK_MS = 7 * DAY_MS;

const getCycleTS = (ts) => {
  const cycle = 0;
  const now = new Date(ts);
  console.log("now", now);
  const days = now.getUTCDay(); // 3 수
  const hours = now.getUTCHours(); // UTC 8 === K 17

  let leftDays = 0;
  if (days === 3 && hours >= 8) {
    leftDays = 7;
  } else {
    leftDays = days > 3 ? 12 - days : 3 - days;
  }
  const nextWed =
    Math.floor(now.getTime() / DAY_MS) * DAY_MS +
    leftDays * DAY_MS +
    HOUR_MS * 8;

  const startTime = nextWed - WEEK_MS * (cycle + 1);
  const endTime = nextWed - WEEK_MS * cycle;
  console.log(new Date(startTime), new Date(endTime));
  return { startTime, endTime };
};

console.log("==================");
getCycleTS(Date.now() + DAY_MS * 0);
getCycleTS(Date.now() + DAY_MS * 1 + HOUR_MS * 2);
getCycleTS(Date.now() + DAY_MS * 1 + HOUR_MS * 3);
getCycleTS(Date.now() + DAY_MS * 1 + HOUR_MS * 4);
// f(Date.now() + DAY_TS * 5);
// f(Date.now() + DAY_TS * 6);
// f(Date.now() + DAY_TS * 7);
console.log("==================");
