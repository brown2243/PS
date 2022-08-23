function generateHashtag(str) {
  const txt = str
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((v) => v.substring(0, 1).toUpperCase() + v.substring(1))
    .join("");
  return !txt || txt.length > 140 ? false : `#${txt}`;
}
console.log(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
console.log(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
console.log(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
console.log(
  generateHashtag("a".repeat(139)),
  "#A" + "a".repeat(138),
  "Should work"
);
console.log(generateHashtag("a".repeat(140)), false, "Too long");
