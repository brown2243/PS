// 11723
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [N, ...arr] = input.split("\n");

  let ans = "";
  let bits = 0;
  for (let row of arr) {
    let [cmd, val] = row.split(" ");
    val = Number(val);

    switch (cmd) {
      case "add":
        bits |= 1 << val;
        break;
      case "remove":
        bits &= ~(1 << val);
        break;
      case "check":
        if (bits & (1 << val)) ans += "1\n";
        else ans += "0\n";
        break;
      case "toggle":
        bits ^= 1 << val;
        break;
      case "all":
        bits = (1 << 20) - 1;
        break;
      case "empty":
        bits = 0;
        break;
    }
  }
  console.log(ans);
}
