
Template.colorTempCard.onRendered(function() {

  var tempColorValue = "#" + Session.get('color.search.filter.value');
  var colorDom = this.find('.color-temp-card');
  var titleDom = this.find('.color-temp-wrapper p');

  this.autorun(function() {

    var tempColorValue = Session.get('color.search.filter.value'),
      hexColorValue = '#' + tempColorValue;

    if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColorValue)){
      hexColorValue = '';
    }
    if(!hexColorValue) return;

    $(colorDom).css(
      {
        'background-color': hexColorValue
      }
    );

    $(titleDom).css(
      {'color': hexColorValue}
    )

  });
});


Template.colorTempCard.events({
  'click .color-temp-card': function(evet){

    event.preventDefault();

    var hexColorValue = event.target.innerText || '';

    if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColorValue)) {
      sAlert.error('Not valid hex color code~, the letter should between 0~F!');
      return;
    };

    // Colors.insert({
    //   colorCode: hexColorValue
    // })
    //
    Meteor.call('newColor', {colorCode: hexColorValue.toLocaleUpperCase()}, function(){
      $('#search_value').val('');
      Session.set('color.search.filter.value', '');
      sAlert.success('Save the color successfully~');
    });

  }
})


Template.colorTempCard.helpers({
  colorObject: function(){
    var tempColorValue = Session.get('color.search.filter.value'),
      hexColorValue = '#' + tempColorValue;
    if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColorValue)){
      hexColorValue = '';
    }
    return {colorCode: hexColorValue}
  }
});

Template.registerHelper('arrayify',function(obj){
    var result = [];
    for (var key in obj) result.push({name:key,value:obj[key]});
    return result;
});
