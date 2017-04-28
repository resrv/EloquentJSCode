function range(start,end,step) {
    var arr = [] ;
    var pos = 0 ;
    if( step == undefined)
        step = 1;
    else if(step < 0)
    {
        if(start < end)
            return 0 ;
        while ( start >= end ) {
        arr[pos++] = start ;
        start += step ;
        }
    }
    else {
        if(start > end)
            return 0 ;
        while ( start <= end ) {
        arr[pos++] = start ;
        start += step ;
        }
    }
    return arr ;
}
function sum(arr) {
    var val = 0 ;
    for(var i = 0; i < arr.length ; i++) {
        val += arr[i] ;
    }
    return val ;
}
console.log(sum(range(5,7,-2)));