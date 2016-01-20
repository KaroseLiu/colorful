
Template.colorPanel.onRendered(function() {
  // Subscribe
 var subs = this.subscribe("colors");
 // Do reactive stuff when subscribe is ready
 this.autorun(function() {
   if(! subs.ready())
     return;
 });

})


Template.colorPanel.helpers({

});

Template.colorPanel.events({
  'click .karose-color-card': function (event) {

    event.preventDefault();

  },
})


Template.registerHelper('colors', function(){

  var filterValue = Session.get('color.search.filter.value');
  var aColors = Colors.find().fetch();
  if(!filterValue) return aColors;
  return _.filter(aColors,function(color){
    return (color.colorName && color.colorName.toLowerCase().indexOf(filterValue) >= 0) || color.colorCode.toLowerCase().indexOf(filterValue) >= 0;
  })

})
