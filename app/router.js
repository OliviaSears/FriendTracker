import EmberRouter from '@ember/routing/router';
import config from 'friend-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user-profile');
  this.route('friend-detail', { path: '/friends/:friend_id' });
});
