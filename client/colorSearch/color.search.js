if (Meteor.isClient) {

  Template.colorSearch.helpers({
    timeoutValue: null,
    isValidHexColorCode: function(colors){
      var filterValue = '#' + Session.get('color.search.filter.value'),
        flag = false;
      if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(filterValue) && colors.length === 0) flag = true;

      return flag;

    }
  })

  Template.colorSearch.events({
    'click .color-search-button': function (event) {
      // increment the counter when button is clicked
      event.preventDefault();
    },

    'keydown #search_value': function(event) {

      if(!this.timeoutValue) Meteor.clearTimeout(this.timeoutValue);

      this.timeoutValue = Meteor.setTimeout(function(){
        var filterValue = $('#search_value').val();
        Session.set('color.search.filter.value', filterValue);
      }, 500);

    }
  });
}
