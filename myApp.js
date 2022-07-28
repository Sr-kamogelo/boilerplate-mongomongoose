require('dotenv').config();
/** # MONGOOSE SETUP #
/*  ================== */

/** 1) Install & Set up mongoose */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

/*--------------------------------------------------------------------------------*/
                           // my first person schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
//THis is the Model I created to use out during the entire process
const Person = mongoose.model("Person", personSchema);

 /*-----------------------------------------------------------------------------*/



function createAndSavePerson(done) {


    var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
  
    janeFonda.save(function(err, data) {
      if (err) return console.error(err);
      done(null, data)
    });
};


//object carrying an array of people
arrayOfPeople = [
  {name:"jacob Isreal", age: 23, favoriteFoods:["unleavenBread", "fish", "yem"]},
  {name:"kamogelo Oliphant", age: 22, favoriteFoods:["GarlicBread", "fish", "burger"]},
  {name:"John Trevalto", age: 40, favoriteFoods:["sushi", "macaronni", "tacos"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  //Inside this function I use the name of the previouse Model I created
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  // The argument personName is an object I can use statically or Dynamicall, by entering a person`s as my search object
  Person.find({name: personName}, function(err, personFound){
    if (err) return console.log(err);
    done(null, personFound);
  });
  
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
