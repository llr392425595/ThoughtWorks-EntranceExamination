module.exports = function main(email, suffixes) {
  function getLastName(email){
      var arr = email.split('@');
      return arr[arr.length-1];
  }
  let a = getLastName(email);
  if(suffixes.indexOf(a)>-1){
    return true;
  }else{
    return false;
  }
};
