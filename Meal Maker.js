const menu = {
  _courses : {
    appetizers : [], 
    mains : [], 
    desserts : []
  },
  get appetizers() {
    return this._courses.appetizers
  }, 
  get mains() {
    return this._courses.mains
  }, 
  get desserts() {
    return this._courses.desserts
  }, 
  set appetizers(appetizers) {
    if (typeof appetizers === 'string' && appetizers.length > 0) {
      this._courses.appetizers = appetizers; 
    } else {
      console.log('ERROR: input must be a non-empty string')
    }
   },
  set mains(mains) {
    if (typeof mains === 'string' && mains.length > 0) {
      this._courses.mains = mains; 
    } else {
      console.log('ERROR: input must be a non-empty string')
    }
  },
  set desserts(desserts) {
    if (typeof desserts === 'string' && desserts.length > 0) {
      this._courses.desserts = desserts; 
    } else {
      console.log('ERROR: input must be a non-empty string')
    }
  }, 
  get courses() {
    return {
      appetizers : this.appetizers, 
      mains : this.mains, 
      desserts : this.desserts
    }; 
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name : dishName, 
      price : dishPrice
    }; 
    return this._courses[courseName].push(dish); 
  }, 
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length); 
    return dishes[randomIndex]; 
  }, 
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers'); 
    const main = this.getRandomDishFromCourse('mains'); 
    const dessert = this.getRandomDishFromCourse('desserts'); 
    const totalPrice = appetizer.price + main.price + dessert.price; 
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`; 
  }
}; 

menu.addDishToCourse('appetizers', 'Cheese Plate', 10); 
menu.addDishToCourse('appetizers', 'Meat Plate', 11); 
menu.addDishToCourse('appetizers', 'Veggie Plate', 8); 

menu.addDishToCourse('mains', 'Frisco Melt', 12); 
menu.addDishToCourse('mains', 'Steak', 21); 
menu.addDishToCourse('mains', 'Oysters', 15); 

menu.addDishToCourse('desserts', 'Ice Cream Sandwich', 9); 
menu.addDishToCourse('desserts', 'Pie', 7); 
menu.addDishToCourse('desserts', 'Cake', 8); 

const meal = menu.generateRandomMeal(); 

console.log(meal); 



