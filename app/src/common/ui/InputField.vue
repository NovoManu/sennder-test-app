<template>
  <div class="c-text-field">
    <label class="c-text-field__label">{{ label }}</label>
    <input :type="type" class="c-text-field__input" @input="$emit('input', $event)">
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class InputField extends Vue {
    @Prop({required: false, default: 'Label'}) private label!: string
    @Prop({required: false, default: 'text'}) private type!: string
  }
</script>
<style lang="scss">
@import '../../assets/scss/app';
.c-text-field {
  &__input {
    align-items: center;
    border: 1px solid $grey-lighter;
    box-shadow: none;
    display: inline-flex;
    font-size: $size-6;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    position: relative;
    vertical-align: top;
    max-width: 100%;
    width: 100%;
    background-color: $white-bis;
    border-radius: $radius;
    color: $grey;
    font-weight: $weight-medium;
    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
      background-color: $white;
    }
  }
  &__label {
    display: block;
    color: $grey-light;
    font-size: $size-6;
    font-weight: $weight-normal;
  }
}
</style>
