// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  var resultArray = [];
  function testElement(element) {
    // if the element has a property class and a class of className, push element into resultArray
    if (element.classList && element.classList.value.includes(className)) {
      resultArray.push(element);
    }
    // if the element has children, run testElement on each child
    if(element.childNodes.length > 0) {
      element.childNodes.forEach(function(child) {
        testElement(child);
      });
    }
  }
  testElement(document.body);
  return resultArray;
};
