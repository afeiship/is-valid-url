<template lang="html">
  <div class="api-container">
    <api-header>{{name}}</api-header>
    <api-item v-for="item in properties">
      <template slot="hd">{{item.key}}</template>
      <template slot="sub-title">{{item.value}}</template>
      <section slot="bd">
        <span class="clearfix" v-for="val in item.value">
            <vi-button v-if="item.key == 'type'" :type="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'size'" :size="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'activated'" :activated="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'style'" :style="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'shape'" :shape="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'display'" :display="val">{{val}}</vi-button>
            <vi-button v-if="item.key == 'color'" :color="val">{{val}}</vi-button>
        </span>
      </section>
      <section slot="code-preview">{{item.codePreview}}</section>
    </api-item>
  </div>
</template>

<script>
import ViButton from 'widgets/button';
import {
  ApiItem,
  ApiHeader
} from 'components/index';
export default {
  data() {
      return {
        name: 'ViButton',
        properties: [{
          key: 'type',
          value: ['button', 'submit'],
          codePreview: require('./snippets/type.html')
        }, {
          key: 'size',
          value: ['large', 'small', 'default'],
          codePreview: require('./snippets/size.html')
        }, {
          key: 'style',
          value: ['outline', 'clear', 'solid'],
          codePreview: require('./snippets/style.html')
        }, {
          key: 'shape',
          value: ['normal', 'round', 'fab'],
          codePreview: require('./snippets/shape.html')
        }, {
          key: 'display',
          value: ['normal', 'full', 'block'],
          codePreview: require('./snippets/display.html')
        }, {
          key: 'color',
          value: ['default', 'light', 'danger', 'secondary', 'dark','wechat'],
          codePreview: require('./snippets/color.html')
        }]
      };
    },
    components: {
      ViButton,
      ApiItem,
      ApiHeader
    }
};
</script>
