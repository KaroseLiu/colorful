

Template.colorCard.onRendered(function() {
  // Subscribe
  var colorData = this.data,
    colorCardDom = this.find('.karose-color-card'),
    tempArr = this.data.colorCode.split(''),
    reverseColor = '#';
  tempArr.shift();
  reverseColor += tempArr.reverse().join('');

  $(colorCardDom).css(
    {
      'background-color': colorData.colorCode,
      'border': '1px solid '+ colorData.colorCode,
      'box-shadow': 'inset 0 1px 1px ' + colorData.colorCode,
      'color': reverseColor
    }
  );

})

Template.colorCard.events({

  'click div.karose-color-card' : function(event){

    var targetValue = event.target.innerText;

    $('body').css({'background-color': targetValue});
  }

})
