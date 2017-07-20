'use strict';

var formGroup = angular.module('formGroup', []);

formGroup.component('formGroup', {

	templateUrl: './components/form-group.template.html',

	controller: ['$http',
		function FormGroupController($http){
			this.btnTxt = "Submit";
			this.userList = [];
      		this.name = this.email = this.phone = this.comments = '';

  			this.submit = function () {
      			this.btnTxt = "Thank you for submiting";
      			if (this.name) {
		          	this.userList.push(this.name,this.email,this.comments);
		          	this.name = this.email = this.phone = this.comments = '';
		        }
  			};
  		}
    ]
});