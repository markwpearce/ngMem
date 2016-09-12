window.library = {
  getRandomColor: function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  setRandomBGColor: function(element) {
    element.style.backgroundColor = window.library.getRandomColor();
  },
  makeData: function() {
    return new Array(1000000).join('!');
  }
};
