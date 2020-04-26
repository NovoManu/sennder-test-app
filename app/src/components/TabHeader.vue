<template>
  <div class="g-tab" :class="{'g-tab--active': active}" v-on="$listeners">{{ text }}</div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class TabHeader extends Vue {
    @Prop({ required: true }) private text!: string
    @Prop({ required: true }) private active!: boolean
  }
</script>
<style lang="scss">
@import '../assets/scss/app';
$tab-active: $primary;
$text-active: $white;
.g-tab {
  flex: 0 1 50%;
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .0892857143em;
  line-height: normal;
  font-weight: 500;
  outline: none;
  user-select: none;
  cursor: pointer;
  opacity: 0.9;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: calc( 100% - 1px);
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: .2s ease-in-out;
  }
  &:hover::before {
    background-color: $primary;
  }
  &:first-child {
    border-top-left-radius: $radius;
  }
  &:last-child {
    border-top-right-radius: $radius;
  }
  &--active {
    background-color: $tab-active;
    color: $text-active;
  }
}
</style>
