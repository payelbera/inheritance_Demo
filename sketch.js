var lion , tiger, cow

function setup() {
  createCanvas(800,400);
  lion = new Lion(100,100,"brown")
  tiger = new Tiger(200,100,"yellow");
  cow = new Cow(300,100);

  lion.showFoodHabit()
  tiger.showFoodHabit()
  cow.showFoodHabit();
  cow.animalType();

}

function draw() {
  background(255,255,255);  
  lion.displayAnimal()
  tiger.displayAnimal()
  cow.displayAnimal();
  
}