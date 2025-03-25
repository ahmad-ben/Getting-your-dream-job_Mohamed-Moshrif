abstract class Pizza{
  private pizzaName: string | null;
  constructor(pizzaName: string){
    this.pizzaName = pizzaName;
  }

  private makeBase(){
    console.log(`Making ${this.pizzaName} pizza base.`)
  };

  private addToppings(){
    console.log(`Add ${this.pizzaName} to our pizza.`);
  };

  private bakePizza(){
    console.log(`Bake the ${this.pizzaName} pizza.`)
  };

  makingPizza(){
    this.makeBase();
    this.addToppings();
    this.bakePizza();
  };
};

class ChickenPizza extends Pizza{
  constructor(){
    super("Chicken");
  };
};

class BeefPizza extends Pizza{
  constructor(){
    super("Beef")
  };
};

class CheesePizza extends Pizza{
  constructor(){
    super("Cheese")
  };
};

class ShrimpPizza extends Pizza{
  constructor(){
    super("Shrimp")
  };
};

const chosePizza = (pizzaNum: number) => {
  let pizzaIns : null | Pizza = null;
  
  switch(pizzaNum){
    case 1:
      pizzaIns = new ChickenPizza();
      break;  
    case 2:
      pizzaIns = new BeefPizza();
      break;  
    case 3:
      pizzaIns = new CheesePizza();
      break;  
    case 4:
      pizzaIns = new ShrimpPizza();
      break;  
  }

  if(!pizzaIns) return console.log("Invalid Input!!");
  pizzaIns.makingPizza();
  
};

chosePizza(1);
console.log("=============================================================");
chosePizza(2);
console.log("=============================================================");
chosePizza(3);
console.log("=============================================================");
chosePizza(4);
console.log("=============================================================");
chosePizza(5);

