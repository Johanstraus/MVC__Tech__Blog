const { User } = require('../models');

const  testUser =  [
    {
       id: 1,
       username: "John",
       email: "john@gmail.com",
       password: "pass1234",
    },
    {
        id: 2,
        username: "Michael",
        email: "michael@gmail.com",
        password: "pass4567",
     },
];

const seedUsers = () => User.bulkCreate(testUser);

module.exports = seedUsers;