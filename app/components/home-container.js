import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { myProfileData, friendsData } from '../data';
import { action } from '@ember/object'; //needed to call functions

export default class HomeContainerComponent extends Component {
    @tracked myProfileData = myProfileData;
    @tracked favoritesIds = [];

  get favorites() {
    return this.favoritesIds.map((id) =>
      friendsData.find((friend) => friend.id == id)
    );
  }

  get nonFavorites() {
    return friendsData.filter(
      (friend) => !this.favoritesIds.includes(friend.id)
    );
  }

  @action
  toggleFavorite(person) {
    if (this.favoritesIds.includes(person.id)) {
      this.favoritesIds = this.favoritesIds.filter((id) => id !== person.id); // removes id from array
    } else {
      this.favoritesIds = this.favoritesIds.concat(person.id); // adds id to array
    }
  }

  @action
  resetFavorites() {
    this.favoritesIds = [];
  }
}
