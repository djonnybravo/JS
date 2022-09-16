String.prototype.toJadenCase = function () {
 
  var nStr = "";
  
  this.split(" ").forEach(function(s) { 
      nStr = nStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
  });

  return nStr.substr(1);
};