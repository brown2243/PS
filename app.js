function totalFruit(fruits) {
  let left = 0,
    right = 0,
    max_picked = 0;
  const basket = new Map();

  for (; right < fruits.length; right++) {
    const fruit = fruits[right];
    basket.set(fruit, (basket.get(fruit) || 0) + 1);

    if (basket.size > 2) {
      console.log(basket, basket.get(fruits[left]));
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      console.log(basket, basket.get(fruits[left]));
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
        console.log("removee", basket);
      }
      left += 1;
    }
    max_picked = Math.max(max_picked, right - left + 1);
    console.log(max_picked, basket.size);
  }
  return max_picked;
}
totalFruit([1, 2, 3, 2, 2]);

function totalFruit(fruits) {
  let left = 0,
    right = 0,
    max_picked = 0;
  const basket = new Map();

  for (; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

    if (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left += 1;
    }
    max_picked = Math.max(max_picked, right - left + 1);
  }
  return max_picked;
}
