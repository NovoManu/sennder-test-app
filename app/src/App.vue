<template>
  <div id="app">
    <div class="c-tabs">
      <div class="c-tabs__header">
        <TabHeader
          text="Employer"
          ref="tab-header-employer"
          :active="tab === 'employer'"
          @click="tab = 'employer'"
        />
        <TabHeader
          text="Employee"
          ref="tab-header-employee"
          :active="tab === 'employee'"
          @click="tab = 'employee'"
        />
      </div>
      <div class="c-tabs__content">
        <Wrapper :tab="tab">
          <template #employer>
            <TabContent
              v-model="offer"
              ref="tab-content-offer"
              text="Enter maximum offer"
              @submit="submit"
            />
          </template>
          <template #employee>
            <TabContent
              v-model="salary"
              ref="tab-content-salary"
              text="Enter minimum salary"
              @submit="submit"
            />
          </template>
        </Wrapper>
      </div>
    </div>
    <Modal v-if="tabActive" @close="tabActive = false">
      <h2
        class="has-text-center"
        :class="isSuccess ? 'has-text-success' : 'has-text-danger'"
      >
        {{ isSuccess ? 'Success!' : 'Failure!' }}
      </h2>
      <p>Maximum offer was: {{ offer }}$</p>
      <p>Maximum expected salary was: {{ salary }}$</p>
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
  components: { TabContent, Wrapper, TabHeader, Modal }
})
export default class App extends Vue {
  protected salary: number = 0
  protected offer: number = 0
  protected tab: string = 'employer'
  private tabActive: boolean = false
  private isSuccess: boolean = true

  private submit(): void {
    this.tabActive = true
    this.isSuccess = this.offer >= this.salary
  }
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
  box-shadow: 5px 5px 20px 0 rgba(204, 204, 207, 0.32);

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
