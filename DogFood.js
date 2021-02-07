class DogFood {
    constructor(){
        //this.image=loadImage("Milk.png")
    }
    display(){

  var x=80 , y=100

if(this.FoodStock!=0){

    for (var i=0;i<this.FoodStock;i++){

    if(i%10==0){
    x=80;
    y=y+50;
    }

    var milk=createSprite(x,y,50,50)
    x=x+30

    console.log("x")
    console.log("y")
    }
    }   
}


getFoodStock(){
    var FoodStock=database.ref('DogFood')
}

ReadFoodStock(data){

 FoodStock=data.val();

}

UpdateFoodStock(value){
    database.ref('DogFood').set({
        'DogFood':FoodStock + value , 
         
     })

}

}
