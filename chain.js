class Chain{
    constructor(a,b,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
       
        var opt={
            bodyA:a,
            bodyB:b,
            length:200,
            stiffness: 1,
            pointB:{ x:this.offsetX, y:this.offsetY}
        }
        this.chain=Constraint.create(opt);
        
        World.add(world,this.chain);
    }
    disp(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var anchorX=pointB.x+this.offsetX;
        var anchorY=pointB.y+this.offsetY;

        strokeWeight(3);
        line(pointA.x,pointA.y,anchorX,anchorY);
    }
}