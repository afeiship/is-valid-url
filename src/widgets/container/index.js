const MuiContainer = require('./src/index.vue');

MuiContainer.install = function(Vue) {
  Vue.component(MuiContainer.name, MuiContainer);
};

module.exports = MuiContainer;
