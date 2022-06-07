import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { myProfileData} from '../data';

export default class UserProfileContainerComponent extends Component {
    @tracked myProfileData = myProfileData;
}
