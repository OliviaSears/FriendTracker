import { helper } from '@ember/component/helper';

function contains(args) {
  const [arr, item] = args;
  return arr.includes(item);
}

export default helper(contains);
