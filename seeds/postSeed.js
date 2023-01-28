const { Post } = require('../models')

const postSeed = [
    {
      post_body: "Tech tip #30: Use latex gloves when cleaning the components of your computer.",
      votes: '40',
      post_links: 'eZTS4cL4Euo',
      user_id: 1,
    },
    {
        post_body: 'I use google to look for harder topic for coding!',
        votes: '15',
        post_links: 'G1IbRujko-A',
        user_id: 2,
    },
  ];

  const seedPost = () => Post.bulkCreate(postSeed);
  module.exports = seedPost;