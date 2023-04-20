const HOUR_TS = 60 * 60 * 1000;
const DAY_TS = 24 * HOUR_TS;
const f = (ts = Date.now(), cycle = 0) => {
  console.log("----");
  const now = new Date(ts);

  const days = now.getUTCDay(); // 5 금
  console.log(days);
  const hours = now.getUTCHours(); // UTC 8 === K 17

  let leftDays = 0;
  if (days === 5 && hours >= 8) {
    leftDays = 7;
  } else {
    leftDays = days > 5 ? 12 - days : 5 - days;
    console.log("dwqdqwdqw", leftDays, 7 - ((days + 2) % 7));
  }

  console.log(now);
  console.log(
    new Date(
      Math.floor(now.getTime() / DAY_TS) * DAY_TS +
        leftDays * DAY_TS +
        HOUR_TS * 8
    )
  );
  console.log("----");
};

f();
f(Date.now() + DAY_TS * 1 - 1000 * 60 * 60 * 1);
f(Date.now() + DAY_TS * 1 - 1000 * 60 * 60 * 2);
f(Date.now() + DAY_TS * 1);
f(Date.now() + DAY_TS * 2);
