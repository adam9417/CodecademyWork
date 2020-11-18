function dogFactory(name, breed, weight) {
  return {
    _name: name,
    get name(){
      return this._name
    },
    set name(newName) { 
      if (typeof newName === 'string' && newName.length > 0) {
        this._name = newName; 
      } else {
        console.log('Error, name must be a non-empty string'); 
      }
    },  
    _breed: breed,
    get breed(){
      return this._breed
    }, 
    set breed(newBreed) { 
      if (typeof newBreed === 'string' && newBreed.length > 0) {
        this._breed = newBreed; 
      } else {
        console.log('Error, breed must be a non-empty string'); 
      }
    }, 
    _weight: weight,
    get weight(){
      return this._weight
    },
    set weight(newWeight) { 
      if (typeof newWeight === 'number' && newWeight > 0) {
        this._weight = newWeight; 
      } else {
        console.log('Error, breed must be a number greater than zero'); 
      }
    },
    bark() {
      return 'ruff! ruff!';  
    }, 
    eatTooManyTreats() {
      this._weight++
    },    
  }
}

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }