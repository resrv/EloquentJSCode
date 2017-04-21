var countBs = function(string) {
    return countChar(string,'B') ;
}

var countChar = function(string,char) {
    count = 0 ;
    for(var i=0 ; i < string.length ; i++ ) {
        if( string[i] === char)
            count++ ;
    }
    return count ;
}

console.log(countBs("Beware of Black Boys")) ;