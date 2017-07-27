var flipCard = angular.module('flipCard', []);

flipCard.component('flipCard', {

	templateUrl:'partials/flip-card.template.html',

	controller: function FlipCardController(){

		var frontImages = ['img/w01f.jpg', 'img/w02f.jpg', 'img/w03f.jpg'];
		var backImages = ['img/w01b.jpg', 'img/w02b.jpg', 'img/w03b.jpg'];


		this.flipImages = frontImages.map(function(value, index) {
	    	return {
		        frontImg: value,
		        backImg: backImages[index]
		    }
		});


		$(document).ready(function(){
		  $(".card").flip({
		  axis: 'y',
		  trigger: 'hover'
		  });   
		});
	}
});





	