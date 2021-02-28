class Bob{
    constructor(x){
        this.body=Bodies.circle(x,300,30);
        World.add(world,this.body);
    }

    disp(){
        var pos=this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,30,30);
    }
}