const MuiDivider = require('./src/index.vue');

MuiDivider.install = function(Vue) {
  Vue.component(MuiDivider.name, MuiDivider);
};

module.exports = MuiDivider;
