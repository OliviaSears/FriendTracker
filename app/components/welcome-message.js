import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class WelcomeMessageComponent extends Component {
  // @tracked name = 'Olivia'; //if read squiggle under name go to preferences and settings
  //search experimental decorators and check enable/disable
  //@tracked allows ember to track the value of name, knowing it may change in the future
  @tracked shouldShowWelcomeMessage = true;

  @action
  toggleWelcomeMessage() {
    this.shouldShowWelcomeMessage = !this.shouldShowWelcomeMessage;
  }
}
