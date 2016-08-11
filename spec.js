describe('getDuplicates', function(){
  var array1 = null,
      array2 = "boo",
      array3 = [1,2],
      array4 = [ ],
      array5 = [1,2,"a",4],
      array6 = [1,2.1,3.1,4.8],
      array7 = [1,1,1,2,2,3,4],
      array8 = [1,1,2,2],
      array9 = [2,1,1,2],
      array10 = [1,2,3,4],
      array11 = [3,3,1,2,15,4,5,4,10,11,15];

  it('throws exception when not array',function(){
    expect(function(){getDuplicates(array1)}).toThrow("not array");
    expect(function(){getDuplicates(array2)}).toThrow("not array");
    expect(function(){getDuplicates(array3)}).not.toThrow("not array");
  });

  it('returns zero sized array',function(){
    expect(getDuplicates(array4)).toBe(array4);
  });

  it('throws exception when non-integer is in array', function(){
    expect(function(){getDuplicates(array5)}).toThrow("contains non-integer");
    expect(function(){getDuplicates(array3)}).not.toThrow("contains non-integer");
    expect(function(){getDuplicates(array4)}).not.toThrow("contains non-integer");
  });

  it('returns a sorted array of duplicated numbers with no repeats', function(){
    expect(getDuplicates(array7)).toEqual([ 1, 2 ]);
    expect(getDuplicates(array8)).toEqual([ 1, 2 ]);
    expect(getDuplicates(array9)).toEqual([ 1, 2 ]);
  });

  it('returns an empty array if no duplicated numbers', function(){
    expect(getDuplicates(array10)).toEqual([ ]);
  });

  it('returns an empty array if no duplicated numbers', function(){
    expect(getDuplicates(array11)).toEqual([3,4,15 ]);
    expect(getDuplicates(array11)).not.toEqual([3,15,4 ]);
    expect(getDuplicates(array11)).not.toEqual([15,3,4 ]);
  });
});

// DONE getDuplicates() is to accept one parameter an array of integers
// DONE,(Maths doesn't work in tryJas, skip float check) If the input array contains any non-integers, throw an error
// DONE Return an array of the duplicate numbers sorted in ascending error. The duplicate numbers are returned only once in the result
// DONE Return an empty array if the input array has no duplicates
// DONE If the input is not an array, throw an error.
// DONE Zero sized array is a valid input.
// DONE The integers in the input array may not be in order.
