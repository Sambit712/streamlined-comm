var request = require('request');
var db = require('./db/controllers');

exports.getRelationshipPosts = function(req, res, next){
  console.log('get relationship posts hit', req.body);
  var email = req.url.split('/').pop();
  db.getRelationshipPosts(email)
    .then(function(result){
      res.status(200).send(result);
    })
};

exports.createPost = function(req, res, next){
  console.log('createPost hit', req.body);
  var email = req.url.split('/').pop();
  db.createPost(email, req.body)
    .then(function(post){
      res.status(200).send(post);
    });
};

exports.deletePost = function(req, res, next){
  console.log('deletePost hit', req.body);
  var id = req.url.split('/').pop();
  db.deletePost(id)
    .then(function(result){
      console.log(result);
      res.status(200).send(result);
    });
};

exports.updatePost = function(req, res, next){
  var id = req.url.split('/').pop();
  db.updatePost(id, req.body)
    .then(function(post){
      console.log(post);
      res.status(201).send(post);
    });
};

// exports.createUser = function(req, res, next){
//   console.log('hit create user', req.body);
//   db.createUser(req.body.email, req.body.mood)
//     .then(function(user){
//       if(user === undefined){
//         return db.getUserByEmail(req.body.email)
//           .then(function(user){
//             res.status(200).send(user);
//           })
//       }else{
//         res.status(200).send(user);
//       }
//     });
// };

// exports.updateUser = function(req, res, next){
//   console.log(req.body);
// };

// exports.createRelationship = function(req, res, next){

// };

// exports.getRelationship = function(req, res, next){

// };

  // app.post('/api/users/:email', postRequestHandler.createUser);
  // app.put('/api/users/:email', postRequestHandler.updateUser);
  // app.post('/api/relationship/:calendarId', postRequestHandler.createRelationship);
  // app.get('/api/relationship/:email'), postRequestHandler.getRelationship);