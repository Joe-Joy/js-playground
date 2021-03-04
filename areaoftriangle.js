
// area of triangle = 1/2*bh

function areaOfTriangle(base, height){
    var a = (base*height) /2;
    return a;
}
console.log(areaOfTriangle(10, 25));

// area of triangle 3 sides = (a+b+c)/2 , Area=sqrt{s(s−a)(s−b)(s−c)}
 
function areaOfTrianglein3sides (a, b, c) {
    var s = (a+b+c)/2;
    var Area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return Area;
}
console.log(areaOfTrianglein3sides(20,10,12));