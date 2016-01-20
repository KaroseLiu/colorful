
Colors = new Mongo.Collection('colors');

// Colors.allow({
//   insert: function (userId, doc) {
//     return true;
//   }
// })

Meteor.methods({
  newColor: function (color) {
    Colors.insert(color);
  }
})
