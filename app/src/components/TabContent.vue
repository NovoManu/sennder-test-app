<template>
  <div>
    <sn-input-field
      :value="value"
      type="number"
      :label="text"
      @input="$emit('input', Number($event))"
    />
    <div class="has-text-center u-mt-3">
      <sn-button text="submit" @click="$emit('submit')" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model } from 'nuxt-property-decorator'

@Component
export default class TabContent extends Vue {
  @Model('input') public value!: number
  @Prop({ required: false, default: 'Title' }) protected text!: string
}
</script>
