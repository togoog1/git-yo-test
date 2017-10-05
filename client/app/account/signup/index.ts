'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('newYomanApp.signup', [])
    .controller('SignupController', SignupController)
    .name;
