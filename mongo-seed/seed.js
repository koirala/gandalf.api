// Since Seeding in Mongo is done in alphabetical order... It's is important to keep
// file names alphabetically ordered, if multiple files are to be run.

db.gandalf.insertMany([
  {
    _id: 1,
    name: "Tensor",
    age: 6
  },
  {
    _id: 2,
    name: "Flow",
    age: 10
  }
]);

db.policymatrix.insertMany([
  {
    _id: 1,
    name: "Tensor",
    age: 6
  },
  {
    _id: 2,
    name: "Flow",
    age: 10
  }
]);

db.scoring_test.insertMany([
  {
    _id: 1,
    name: "Tensor",
    age: 6
  },
  {
    _id: 2,
    name: "Flow",
    age: 10
  }
]);
