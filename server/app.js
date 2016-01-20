// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no colors available create sample data
  if (Colors.find().count() === 0) {

    // create sample polls
    var sampleColors = [
      {
        colorCode: '#E9967A',
        colorName: 'darksalmon'
      },
      {
        colorCode: '#5F9EA0',
        colorName: 'cadetblue'
      },
      {
        colorCode: '#8FBC8F',
        colorName: 'darkseagreen'
      },
      {
        colorCode: '#DEB887',
        colorName: 'burlywood'
      },
      {
        colorCode: '#FFFACD',
        colorName: 'lemonchiffon'
      },
      {
        colorCode: '#FFE4B5',
        colorName: 'moccasin'
      },
      {
        colorCode: '#1E90FF',
        colorName: 'dodgerblue'
      },
      {
        colorCode: '#7FFFD4',
        colorName: 'aquamarine'
      },
      {
        colorCode: '#FFB6C1',
        colorName: 'lightpink'
      },
      {
        colorCode: '#FF8C00',
        colorName: 'darkorange'
      },
      {
        colorCode: '#9932CC',
        colorName: 'darkorchid'
      },
      {
        colorCode: '#8FBC8F',
        colorName: 'darkseagreen'
      },
      {
        colorCode: '#FF1493',
        colorName: 'deeppink'
      },
      {
        colorCode: '#00BFFF',
        colorName: 'deepskyblue'
      },
      {
        colorCode: '#B22222',
        colorName: 'firebrick'
      },
      {
        colorCode: '#228B22',
        colorName: 'forestgreen'
      },
      {
        colorCode: '#FFD700',
        colorName: 'gold'
      },
      {
        colorCode: '#BEBEBE',
        colorName: 'gray'
      },
      {
        colorCode: '#FF69B4',
        colorName: 'hotpink'
      },
      {
        colorCode: '#F0E68C',
        colorName: 'khaki'
      },
      {
        colorCode: '#ADD8E6',
        colorName: 'lightblue'
      },
      {
        colorCode: '#FFFFE0',
        colorName: 'lightyellow'
      },
      {
        colorCode: '#BA55D3',
        colorName: 'mediumorchid'
      },
      {
        colorCode: '#FFEFD5',
        colorName: 'papayawhip'
      }

    ];

    // loop over each sample color and insert into database
    _.each(sampleColors, function(color) {
      Colors.insert(color);
    });

  }

});
