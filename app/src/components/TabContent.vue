<template>
  <div class="c-content">
    <sn-input-field type="number" :label="text" />
    <div class="c-content__action">
      <sn-button text="submit" />
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class TabContent extends Vue {
    @Prop({required: false, default: 'Title'}) protected text !: string
  }
</script>
<style lang="scss">
.c-content {
  width: 100%;
  &__action {
    margin-top: 1.5rem;
    text-align: center;
  }
}
</style>
