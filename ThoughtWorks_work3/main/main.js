module.exports = function main(str) {
  // Write your cade her
  let num = parseInt(str);
  var sum = 0;
  for(;num>=1;num/=10){
      var temp = parseInt(num%10);
      sum += temp;
  }
  return sum;
};
