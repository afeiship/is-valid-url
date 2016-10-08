<template lang="html">
  <mui-container>
      I am cnotainer
  </mui-appbar>

  <mui-container :fluid="isFluid">
      I am cnotainer
  </mui-appbar>
</template>

<script>
import MuiContainer from 'widgets/container';
export default {
  data() {
      return {
        name: 'MuiAppbar',
        isFluid:true
      };
    },
    components: {
      MuiContainer
    }
};
</script>
