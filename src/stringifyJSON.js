// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof(obj) === 'function' || obj === undefined || obj === null) {
    return 'null';
  } else if(typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return '' + obj;
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    } else {
      var arrayVals = obj.map(function(objItem){
        return stringifyJSON(objItem);
      });
      return '[' + arrayVals.toString() + ']';
    }
  } else if (typeof(obj) === 'object') {
    var objArray = (Object.keys(obj)).map(function(key) {
      if(typeof(obj[key]) === 'function' || obj[key] === undefined) {
        return '';
      }
      return '"' + key + '":' + stringifyJSON(obj[key]);
    });
    var allNull = objArray.every(function(obj) {
      return obj === '';
    });
    if (allNull) {
      return '{' + objArray.join('') + '}'
    }
    return '{' + objArray.join(',') + '}';
  }
};
