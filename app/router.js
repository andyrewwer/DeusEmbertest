import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('backroomDirectives', function() {
    this.route('respond', {path: '/respond/:directive_id'});
  });
  this.route('index');
  //FIND A WAY TO FORWARD FROM INDEX TO frontroom
  this.route('frontroom', function() {
    this.route('directives');
    this.route('settings');
    this.route('edit', {path: '/edit/:news_id'});
  });
  this.route('error', {path: '/*path'});
  this.route('login');
});

export default Router;
