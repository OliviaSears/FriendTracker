import Route from '@ember/routing/route';
import { friendsData } from '../data';

export default class FriendDetailRoute extends Route {
  async model(params) {
    const friendId = params.friend_id
    const friend = friendsData.find(friend => friend.id === friendId);
    return friend;
    
  }
}
