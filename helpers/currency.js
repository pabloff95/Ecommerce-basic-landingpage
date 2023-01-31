import { helper } from '@ember/component/helper';

export default helper(function currency(params, hash) {
  const [number] = params;
  const { sign } = hash;
  const euros = Math.floor(number);
  let cents = Math.floor((number * 100) % 100);

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }
  return `${euros}.${cents}${sign}`;
});
