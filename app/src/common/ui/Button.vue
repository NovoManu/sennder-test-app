<template>
  <button ref="sn-button" class="g-btn" v-on="$listeners">{{ text }}</button>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class Button extends Vue {
    @Prop({ required: false, default: 'Button'}) private text!: string
  }
</script>
<style lang="scss">
@import '../../assets/scss/app';
$button-border-width: 1px;

$button-padding-vertical: calc(0.375em - #{$button-border-width});
$button-padding-horizontal: 1.5em;
.g-btn {
  align-items: center;
  background: transparent;
  border-radius: 3px;
  border-style: solid;
  border-width: $button-border-width;
  border-color: $primary;
  color: $white;
  background: $primary;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 16px;
  justify-content: center;
  outline: 0;
  padding: $button-padding-vertical $button-padding-horizontal;
  position: relative;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  transition: 0.3s all ease-in-out;
  &:hover:enabled {
    background: $primary-active;
    border-color: $primary-active;
  }
}
</style>
