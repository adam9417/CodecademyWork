// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    _specimenNum: specimenNum,
    get specimenNum() {
      return this._specimenNum
    },
    set specimenNum(newSpecimenNum) {
      if (typeof newSpecimenNum === 'number') {
        this._specimenNum = newSpecimenNum;
      } else {
        console.log('Error: specimenNum must be a number')
      }
    },
    _dna: dna,
    get dna() {
      return this._dna
    },
    set specimenNum(newDna) {
      if (newDna.length > 0) {
        this._dna = newDna;
      } else {
        console.log('Error: dna must be a non-empty array')
      }
    },

    //end of return object
  }
};







