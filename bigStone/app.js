// 4375
{
  const fs = require("fs");

  const inputs = fs
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "./bigStone/input.txt"
    )
    .toString()
    .trim()
    .split("\n");

  let ans = "";

  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    const bint = BigInt(input);

    if (bint === 1n) {
      ans += `1\n`;
      continue;
    }

    let target = BigInt("".padStart(input.length + 1, "1"));

    while (true) {
      if (target % bint === 0n) {
        ans += `${target.toString().length}\n`;
        break;
      }
      target = target * 10n + 1n;
    }
  }
  console.log(ans);
}
