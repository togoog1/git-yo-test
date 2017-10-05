'use strict';
const angular = require('angular');
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('newYomanApp.admin', [
  'newYomanApp.auth',
  'ngRoute'
])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
