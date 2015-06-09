var page = tabris.create("Page", {
  title: "Touch!",
  topLevel: true,
});

var page2 = tabris.create('Page', {
	title: 'info'
});

var button = tabris.create("Button", {
  text: "点击",
  layoutData: {top: 100, left: 0, right: 0},
  background: 'white'
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "Totally Rock!");
  page.apply({'Button': {text: 'ok'}});
  label.animate({
	  opacity: 0
  }, {
	  duration: 1000,
	  easing: 'ease-out'
  });
  page2.open();
});

button.on('swipe:left', function(widget, event) {
	this.set('text', 'yeah');
});

var drawer = tabris.create('Drawer');
tabris.create('ImageView', {
	image: 'images/w4.jpg',
	scaleMode: 'fill',
	layoutData: {left: 0, right: 0, top: 0, height: 200}
}).appendTo(drawer);
tabris.create('PageSelector', {
	layoutData: {left: 0, top: 200, right: 0, bottom: 0}
}).appendTo(drawer);

page.open();
