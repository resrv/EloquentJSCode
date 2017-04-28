function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}
function listToArray(list) {
    var array = [] ;
    while (list != null) {
        array.push(list.value);
        list = list.rest ;
    }
    return array ;
}
function prepend(element, list) {
    var array = listToArray(list) ;
    array.unshift(element) ;
    console.log(array) ;
    return arrayToList(array) ;
}
function nth(list, pos) {
    pos-- ;
    while(pos-- > 0) {
        list = list.rest ;
    }
    console.log(list.value) ;
}
