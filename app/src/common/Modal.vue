<template>
  <div class="c-modal">
    <div class="c-modal__block">
      <slot />
      <div class="c-content__action">
        <button class="g-btn" @click="$emit('close')" >OK</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component
  export default class Modal extends Vue {
  }
</script>
<style lang="scss">
@import "../assets/scss/app";

$modal-z: 40;
$modal-background-background-color: setTransparency($grey, 0.7);

.c-modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: $modal-background-background-color;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: $modal-z;
  transition: .2s cubic-bezier(.25,.8,.25,1);

  &__block {
    display: block;
    width: auto;
    max-width: 100%;
    padding: 1.5rem;
    background-color: $white;
    border-radius: $radius-large;
    overflow-wrap: break-word;
    position: relative;
    white-space: normal;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  &__action {
    width: 100%;
    text-align: center;
  }
}
</style>
