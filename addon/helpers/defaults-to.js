import { helper } from '@ember/component/helper';

export default helper(function defaultsTo(params/*, hash*/) {
  let [param, defaultParam] = params;
  return param === undefined ? defaultParam : param;
});
