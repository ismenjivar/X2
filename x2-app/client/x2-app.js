Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home', {data: {title: 'X2'}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/testimonials');

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/RFI');

Router.route('/profile');

