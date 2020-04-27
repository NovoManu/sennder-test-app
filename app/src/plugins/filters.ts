import Vue from 'vue'

const round = (n: number): number => (n ^ 0)

const filters: any = {
  round
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
