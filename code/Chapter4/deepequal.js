function deepEqual(value1,value2) {
    //If both are ordinary variables
    if(value1 === value2) 
        return true ;
    //If either of them is object the following test happens
    if(value1 == null || value2 == null || typeof(value1) != "object" || typeof(value2) != "object")
        return fasle ;
    //When both are objects
    var v1count= 0,v2count = 0 ;
    for(var p in value1)
        v1count ++ ;
    for(var p in value2) {
        v2count++ ;
        if( !(p in value1) || !(deepEqual(value1[p],value1[p])))
            return false ;
    }
    return v1count == v2count ;    
}
var obj = {val:2,ab:1} ;
console.log(deepEqual(obj,{val:2,ab:1})) ;