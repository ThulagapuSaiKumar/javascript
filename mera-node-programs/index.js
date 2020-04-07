var Rect={
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}
function solveRect(l,b){
    console.log("solving for rectange");
    if(l<=0 || b<=0)
       console.log("rectangle dimensiton should be greater thena zero");
    else{
        console.log("perimeter is "+Rect.perimeter(l,b));
        console.log("area is "+ Rect.area(l,b));
    }
}
solveRect(1,5);
solveRect(0,2);
solveRect(3,4);