<template>
  <div v-if="cast" class="c-weather">
    <div class="c-weather__title">London,UK</div>
    <div class="c-weather__temp">
      <div class="c-weather__temp-title">{{ cast.temp | round }}&#8451;</div>
      <div class="c-weather__temp-details">
        <img src="../assets/img/menu-up.svg" />{{
          cast.temp_max | round
        }}&#8451;

        <img src="../assets/img/menu-down.svg" />{{
          cast.temp_min | round
        }}&#8451;
      </div>
    </div>
    <div class="c-weather__details">
      <div class="c-weather__details-title">
        details
      </div>
      <div class="c-weather__details-item">
        <span>Feels like</span>
        <span>{{ cast.feels_like | round }}&#8451;</span>
      </div>
      <div class="c-weather__details-item">
        <span>Humidity</span>
        <span>{{ cast.humidity | round }} %</span>
      </div>
      <div class="c-weather__details-item">
        <span>Pressure</span>
        <span>{{ cast.pressure | round }} hPa</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

interface ICast {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

@Component
export default class CastComponent extends Vue {
  private cast: ICast | null = null
  private async created() {
    // VUE_APP_OPEN_WEATHER_MAP_API_KEY=e8ea5c316fd537537fb274b0dca37fdd
    await this.getCast()
  }
  private async getCast(): Promise<void> {
    if (!process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY) {
      console.log('No api key found')
      return
    }
    try {
      const url = 'https://api.openweathermap.org/data/2.5/weather'
      const params = {
        q: 'London,uk',
        units: 'metric',
        appid: process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY
      }
      const {
        data: { main }
      } = await axios.get(url, {
        params
      })
      this.cast = main
    } catch (e) {
      console.log(e.message)
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/app';

.c-weather {
  width: 300px;
  max-width: 100%;
  padding: 1.5rem;
  margin: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
  background-color: $blue-light;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  overflow-wrap: break-word;
  white-space: normal;
  border-radius: $radius;
  box-shadow: 5px 5px 20px 0 rgba(204, 204, 207, 0.32);
  &__title {
    width: 100%;
    font-size: 2rem;
  }
  &__temp {
    width: calc(50% - 0.5rem);
    margin-right: 0.5rem;
    &-title {
      font-size: 3rem;
      font-weight: $weight-medium;
    }
    &-details {
      display: flex;
      align-items: center;
    }
  }
  &__details {
    width: 50%;
    &-title {
      text-transform: uppercase;
      border-bottom: 1px solid $grey-lighter;
      margin-bottom: 1rem;
      letter-spacing: 0.0892857143em;
    }
    &-item {
      padding-bottom: 0.25rem;
      font-size: $size-7;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
