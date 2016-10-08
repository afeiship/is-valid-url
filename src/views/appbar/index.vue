<template lang="html">
  <mui-appbar>
      <table width="100%">
        <tr style="vertical-align:middle;">
          <td class="mui--appbar-height">Left Side</td>
          <td class="mui--appbar-height" align="right">Right Side</td>
        </tr>
      </table>
  </mui-appbar>
</template>

<script>
import MuiAppbar from 'widgets/appbar';
export default {
  data() {
      return {
        name: 'MuiAppbar'
      };
    },
    components: {
      MuiAppbar
    }
};
</script>
