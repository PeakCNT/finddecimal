const finddecimal = (num1, num2, index) => {
  ans = ((num1 / num2) * 10 ** index) % 10;
  return Math.floor(ans);
};
