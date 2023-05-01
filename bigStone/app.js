let n = 4;
const a = ["사과", "딸기", "포도", "배"];
for (let i = 0; i < 1 << n; i++) {
  console.log("-------------");
  console.log("-------------");
  console.log("i:", i, i.toString(2).padStart(n, "0"));
  console.log("-------------");
  let ret = "";
  for (let j = 0; j < n; j++) {
    console.log("j:", j, j.toString(2).padStart(n, "0"));
    if (i & (1 << j)) {
      ret += a[j] + " ";
      console.log(ret);
    }
  }
}
