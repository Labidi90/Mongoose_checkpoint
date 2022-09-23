const mongoose = require("mongoose");

// Connect to database
mongoose.connect(
  "mongodb://localhost:27017/mongoose_checkpoint",
  () => {
    console.log("connected");
    // createPerson();
  },
  (e) => console.error(e)
);

// Create a personSchema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

//Create and save a record of a model
const Person = mongoose.model("Person", personSchema);

const createPerson = async () => {
  const person = new Person({
    name: "Cersei Lannister",
    age: 45,
    favoriteFoods: ["fruits", "vegetables", "meat"],
  });

  try {
    const result = await person.save();
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

// //Create many records
// const PersonModel = mongoose.model("person", personSchema);
// const people = PersonModel.create(
//   [
//     {
//       name: "john snow",
//       age: 30,
//       favoriteFoods: ["bread", "tacos", "hamburger"],
//     },
//     {
//       name: "Arya Stark",
//       age: 16,
//       favoriteFoods: ["fruits", "bread", "meat"],
//     },
//     {
//       name: "Lord Varys",
//       age: 56,
//       favoriteFoods: ["fruits", "bread", "meat"],
//     },
//     {
//       name: "Sansa Stark",
//       age: 26,
//       favoriteFoods: ["sandwich", "burritos", "vegetables"],
//     },
//   ],
//   function (err, small) {
//     if (err) return handleError(err);
//   }
// );

// // Find a person by model.find
// PersonModel.find({ name: "Arya Stark" }, (err, person) =>
//   err ? console.log(err) : console.log(person)
// );

// // Find a person by model.findOne
// const favoriteFoods = ["bread", "tacos", "hamburger"];
// PersonModel.findOne({ favoriteFoods: favoriteFoods }, (err, person) =>
//   err ? console.log(err) : console.log(person)
// );

// //Find a person by model.findById
// PersonModel.findById("632cdfe245d68ebf19070c2a", function (err, person) {
//   err ? console.log(err) : console.log(person);
// });

//Update a person by classic by find,edit,save
// const updatePerson = async (id, favoriteFoods) => {
//   try {
//     const person = await Person.findById(id);
//     person.favoriteFoods = favoriteFoods.push("humburger");
//     // person.favoriteFoods = person.favoriteFoods.push("humburger");
//     const result = await person.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// updatePerson('632cef6af50274626e8d3545');

//Update a person usin findOneAndUpdate
// const updatePerson = async (id, age) => {
//   try {
//     const person = await Person.findOneAndUpdate(
//       id,
//       {
//         $set: { age: 20 },
//       },
//       { new: true }
//     );

//     console.log(person);
//   } catch (error) {
//     console.log(err.message);
//   }
// };
// updatePerson("632cef6af50274626e8d354e");

//Delete a person
const removePerson = async (id) => {
  try {
    const result = await Person.deleteOne({ _id: id });
    // const contact = await Person.findByIdAndRemove(id);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};
removePerson("632cef6af50274626e8d3543");

//Search query
const queryPerson = async () => {
  try {
    const people = await Person.find()
      .limit(2)
      .sort("name")
      .select({ name: 1, favoriteFoods: 1 })
      .exec(err.data);
    console.log(people);
  } catch (err) {
    console.log(err.message);
  }
};
// queryPerson();
