var getDuplicates = function(array){
  if (!Array.isArray(array))
  {throw "not array";}
  if (array.length === 0)
  {return array; }

  var notNum = false;
  array.forEach(function(unit){
    if(typeof unit !== "number"){
      notNum = true;
    }
  });
  if (notNum)
  {throw "contains non-integer";}

  // var notInt = false;
  // array.forEach(function(unit){
  // if(unit !== Maths.floor(unit)){
  //    notInt = true;
  //  }
  // });
  // if (notInt)
  // {throw "contains non-integer";}
  var notInt = false;
  array.forEach(function(unit){
    var numCheck = parseInt(unit);
    if (numCheck !== unit){
      notInt = true;
    }
  });
  if (notInt)
  {throw "contains non-integer";}


  var uniqueArr = [];
  var duplicateArr = [];
  array.forEach(function(unit){
    if( !uniqueArr.includes(unit) )
      { uniqueArr.push(unit); }
    else{
      if( !duplicateArr.includes(unit) )
      { duplicateArr.push(unit); }
    }
  });

  return duplicateArr.sort(function(a, b){return a-b;});

};
