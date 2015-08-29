angular.module('restaurant-menu',[])
.directive('restaurantmenu',function () {
	return {
		restrict: 'E',
		templateUrl: "./angular-restaurant-menu/restaurantmenu.html",
		scope: {
			menu: '=',
			menucover: '=',
			limitamount: '=?',
			cateringmessage: '=?',
			showcart: '=?',
			menuopen: '=?',
			removeclose: '=?',
			pagination: '=?',
			cateringmessage: '=?',
			menuheight: '=?'
		},
		link: function (scope,element,attrs) {

			scope.init = function() {
				scope.initDomVars();
				scope.initDirectiveVars();
			};
			scope.initDomVars = function () {
				scope.container = $( '#rm-container' );
				scope.cover = scope.container.find( 'div.rm-cover' );
				scope.middle = scope.container.find( 'div.rm-middle' );
				scope.right = scope.container.find( 'div.rm-right' );
				scope.open = scope.cover.find('a.rm-button-open');
				scope.close = scope.right.find('span.rm-close');
				scope.details = scope.container.find( 'a.rm-viewdetails' );
				scope.modal = $('.rm-modal');
				scope.coverspacing = $('.rm-content h3');
			};
			scope.initDirectiveVars = function () {
				scope.viewDetails = false;
				scope.leftoffset=0;
				scope.midoffset=0;
				scope.rightoffset=0;
				if(!scope.pagination){
					scope.limitamount = undefined;
				}
				if(scope.menuheight){
					scope.container.height(scope.menuheight);
					if(scope.menuheight < 600){
						scope.coverspacing.css({"margin": "0px", "padding":"0px"});
					}
				}
				scope.totalprice=0;
				scope.cart = {};
			}
			scope.openMenu = function () {
				scope.menuopen = true;
			};
			scope.closeMenu = function () {
				scope.detailsView = false;
				scope.currDish = null;
				scope.menuopen = false;
				console.log('hi');
			};
			scope.showViewDetails = function (dish) {
				scope.detailsView = true;
				scope.currDish = dish;
			};


			scope.init();

		}
	};

});