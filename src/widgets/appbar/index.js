const MuiAppbar = require('./src/index.vue');

MuiAppbar.install = function(Vue) {
  Vue.component(MuiAppbar.name, MuiAppbar);
};

module.exports = MuiAppbar;
