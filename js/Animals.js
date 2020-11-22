class Animal {
    constructor(x,y){
       // this.image = loadImage("base.png")
       this.body = createSprite(x,y,50,50)
       this.body.shapeColor = "blue"

    }

displayAnimal(){
    drawSprites();
}

showFoodHabit(){
    console.log("Animals can eat plant or other animals")
}
}