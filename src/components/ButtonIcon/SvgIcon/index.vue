<!--
 * @Description: 导航栏 图标组件
 * @Author: Bhb
 * @Date: 2022-04-01 10:26:07
 * @LastEditTime: 2022-04-01 10:43:06
 * @LastEditors: Bhb
 * @FilePath: \src\components\ButtonIcon\SvgIcon\index.vue
-->
<template lang="">
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName(){
      return `#icon-${this.iconClass}`
    },
    svgClass(){
      if(this.className){
        return `#icon-${this.className}`
      }else{
        return 'svg-icon'
      }
    }
  },
}
</script>
<style scoped>
.svg-icon {
  fill: currentColor;
}
</style>
