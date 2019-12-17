const person = {
  name: "kth",
  age: 28,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => person
  }
};

export default resolvers;
