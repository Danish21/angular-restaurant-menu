# angular-restaurant-menu
Angular directive for restaurant menus

This code wraps and enhances 3D Restaurant Menu Concept By Mary Lou into an angular directive

Link to original web app- http://tympanus.net/codrops/2012/09/25/3d-restaurant-menu-concept/

##Demo Link:
http://danish21.github.io/angular-restaurant-menu/

##Getting Started:

1) git clone https://github.com/Danish21/angular-restaurant-menu.git

2) Include Jquery in index.html file

3) Include angular-restaurant-menu.js in index.hmtl file

3) Include restaurant-menu in as angular app dependency:

`angular.module('angularApp',['angularApp.controllers', 'restaurant-menu']);`

4) In your html file include
`<restaurantmenu menu="menu" menucover="menucover" limitamount="limitamount" showcart="true" menuopen="false" removeclose="false" pagination="true" cateringmessage="cateringmessage" menuheight="menuheight"></restaurantmenu">`


##Usage: 

###menu: 
An array of size 3. Each element in array represents a section of the menu. Each section has a title and an array of dishes. Each dish has a name, description, image, link and price. 

Example:

`$scope.menu = [{title: 'Appetizers',dishes: [
			{
				name: 'Crispy Gnocchi with Arugula',
				description: 'Pan-fried potato gnocchi with arugula salad',
				img: '../js/restaurant-menu/images/11.jpg',
				link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html',
				price: 5
			},
			{
				name: 'Sea Palm Spicy Peanut Curry',
				description: 'Tender sea palm noodles, seasoned vegetables, spicy peanut curry and tempeh fenel croquettes',
				img: '',
				link: '',
				price: 5
			}
		]},
		{title: 'Main Courses',dishes: [
			{
				name: 'Crispy Gnocchi with Arugula',
				description: 'Pan-fried potato gnocchi with arugula salad',
				img: 'images/11.jpg',
				link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html'
			},
		]},
		{title: 'Dessert',dishes: [
			{
				name: 'Rigatoni di Cavolfiore',
				description: 'Rigatoni with roasted cauliflower and spicy tomato sauce' ,
				img: 'images/3.jpg',
				link: 'http://herbivoracious.com/2012/09/rigatoni-with-roasted-cauliflower-and-spicy-tomato-sauce-recipe.html'
			}
		]}];`

###menuCover: 
An object with fields: title, description, streetaddress, city, state, zip, phone, and fax

Example: 

`$scope.menucover= {
			title: 'Gourmet Castle',
			description: 'Fine Dining &amp; Gourmet Takeaway',
			streetaddress: '246 Wonderful Paradise Ln.',
			city: 'Pasadena',
			state: 'CA',
			zip: '91101',
			phone:'626.511.1170',
			fax:'626.992.1020'
};`

###menuheight:
Number for the pixel height of the menu recommended height- 400 - 700

###pagination:
Boolean for paginating every section of the menu to make it fit in the menu

###limitamount: 
Number of dishes to intially in each section for pagination

###cateringmessage
String to display on the bottom right of the menu

###menuopen
Boolean to specify whether the menu should start out open

###removeclose
Boolean to speicfy whether to hide close button



For complete example view demo source code











