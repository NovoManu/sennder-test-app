<script lang="ts">
  import { VNode } from 'vue'
  import { Prop, Vue, Component } from 'nuxt-property-decorator'

  @Component
  export default class Wrapper extends Vue {
    @Prop({ required: true }) private tab!: string

    public render(createElement: any): VNode {
      return createElement('div', { class: [this.$data.class, this.$data.staticClass] }, this.$slots[this.tab])
    }
  }
</script>

<style lang="scss">
  .o-wizard {
    &__title {
      font-size: 19px;
      margin-bottom: 40px;
    }
  }
</style>
