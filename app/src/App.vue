<template>
  <div id="app">
    <div class="c-tabs">
      <div class="c-tabs__header">
        <TabHeader text="Employer" :active="tab === 'employer'" @click="tab = 'employer'" />
        <TabHeader text="Employee" :active="tab === 'employee'" @click="tab = 'employee'" />
      </div>
      <div class="c-tabs__content">
        <Wrapper
          :tab="tab"
        >
          <template #employer>
            <TabContent text="Enter maximum offer" />
          </template>
          <template #employee>
            <TabContent text="Enter minimum salary" />
          </template>
        </Wrapper>
      </div>
    </div>
    <Modal v-if="tabActive">
      <div class="c-content">
        <h2 class="has-text-success has-text-center">Success!</h2>
        <p>Maximum offer was: 50 000$</p>
        <p>Maximum expected salary was: 50 000$</p>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Wrapper from '@/common/Wrapper.vue'
import Modal from '@/common/Modal.vue'
import TabContent from '@/components/TabContent.vue'
import TabHeader from '@/components/TabHeader.vue'

@Component({
  components: {TabContent, Wrapper, TabHeader, Modal}
})
export default class App extends Vue {
  protected salary: number = 0
  protected offer: number = 0
  protected tab: string = 'employer'
  private tabActive: boolean = false
}
</script>

<style lang="scss">
@import 'assets/scss/app';

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-tabs {
  display: block;
  max-width: 400px;
  width: 100%;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  border-radius: $radius;
  box-shadow: $box-shadow;

  &__header {
    width: 100%;
    display: flex;
    border-bottom: 1px solid $grey-lighter;
  }
  &__content {
    width: 100%;
    padding: 1.5rem;
  }
}
</style>
