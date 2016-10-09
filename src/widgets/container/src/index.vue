<template lang="html">
  <div :class="fluid ? 'mui-container-fluid' : 'mui-container'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MuiContainer',
  props: {
    fluid:{
      type: Boolean,
      default: false
    }
  }
};
</script>
