class Rod{
    constructor(){
        var opt={

            isStatic: true

    
        } 
        this.body=Bodies.rectangle(200,100,300,30,opt);
        this.width=150;
        this.height=30;
        World.add(world,this.body);
    }

    disp(){
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,300,30);
    }
}