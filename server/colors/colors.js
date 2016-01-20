
Meteor.publish('colors', function(){
  return Colors.find({}, {sort: {date: 1}});
});
