var size = 8 ;
var i , j ;
var output = '' ;
var toggle = true ;
for(i = 1; i <= size; i++) {
    for(j = 1; j <= size; j++)
       if((i+j) % 2 == 0)
        output += " " ;
        else
            output += "#" ;
    output += "\n" ;
}
console.log(output) ;