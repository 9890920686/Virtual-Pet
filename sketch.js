var dog,sadDog,happyDog;
var feed,add;
var database
var dogfood


function preload(){
 //sadDog=loadImage("Dog.png");
 // happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database();
  
  dog=createSprite(800,200,150,150);
 // dog.addImage(sadDog);
  //dog.scale=0.15;

feed=createButton("Feed The Dog")
feed.position(700,400)
feed.mousePressed(FeedDog);

add=createButton("Add More Food")
add.position(800,400)
add.mousePressed(AddFoodStock);

dogfood = new DogFood();

}

function draw() {
  background(46,139,87);
  dogfood.display();
  drawSprites();
}





function FeedDog(){

if(dogfood.getFoodStock()<=0){
  dogfood.UpdateFoodStock(dogfood.getFoodStock()*0)
}
else{
  dogfood.UpdateFoodStock(dogfood.getFoodStock()-1)
}

}

function AddFoodStock(){


}




//function to update food stock and last fed time


//function to add food in stock
