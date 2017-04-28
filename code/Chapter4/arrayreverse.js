function reverseArray(arr) {
    var outputArray = [] ;
    var pos = 0 ;
    for(var i = arr.length - 1 ; i >= 0 ; i--) {
        outputArray[pos++] = arr [i] ;
    }
    return outputArray ;
}
function reverseArrayInPlace(arr) {
    var front = 0 , temp = 0 ;
    var back = arr.length - 1 ;
    for( var i = 0 ;  i < (arr.length/2) ; i++ )
    {
        temp = arr[front] ;
        arr[front] = arr[back] ;
        arr[back] = temp;
        front++;
        back-- ;
    }
    return arr ;
}
var arr = [1,2,3,4,5] ;
var arr1 = [5,4,3,2,1] ;
console.log(reverseArray(arr)) ;
console.log(reverseArrayInPlace(arr1)) ;