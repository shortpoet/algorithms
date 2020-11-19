function lifePathNumber(dateOfBirth) {
  // Your solution...
  const sum = (nums) => {
    // console.log(nums)
    const out = nums.split('').reduce((a, b) => a + parseInt(b), 0) < 10
      ? nums.split('').reduce((a, b) => a + parseInt(b), 0)
      : sum(nums.split('').reduce((a, b) => a + parseInt(b), 0).toString())
    // console.log(out);
    return out;
  }
  const dates = dateOfBirth.split('-')
  // console.log(dates);
  const lifenum = dates.reduce((a, b) => {
    console.log(a);
    console.log(b);
    console.log(sum(b));
    return a + sum(b);
  }, 0)
  console.log(lifenum);
  const out = lifenum < 10 
    ? lifenum
    : sum(lifenum.toString());
  console.log(out);
  return out;
}

lifePathNumber("1982-10-05")