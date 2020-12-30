<template>
  <v-row class="text-center">
    <v-col cols="12">
        <div v-text="title"></div>
        <div :style="getOutlineStyle">
            <v-img
              style="position:absolute;"
              :src="require('../assets/component/analogclock/analogpanel.svg')"
              :height="height"
              :width="width"
            />
            <v-img
              :style="getHourHandStyle"
              :src="require('../assets/component/analogclock/hourHand.svg')"
              :height="height"
              :width="width"
            />
            <v-img
              :style="getMinHandStyle"
              :src="require('../assets/component/analogclock/minHand.svg')"
              :height="height"
              :width="width"
            />
        </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class AnalogClock extends Vue {
  name = 'analog-clock'

  @Prop() readonly title!: string
  @Prop() readonly minutes!: number
  @Prop() readonly height!: number
  @Prop() readonly width!: number
  @Prop() readonly animate!: boolean

  get getOutlineStyle (): string {
    return "margin:auto;height:" + this.height + "px;width:" + this.width + "px;"
  }

  get getHourHandStyle (): string {
    const hourDeg = this.minutes / 2
    return "position:absolute; transform:rotate(" + hourDeg + "deg);" + this.getTransitionCss()
  }

  get getMinHandStyle (): string {
    return "position:absolute; transform:rotate(" + (this.minutes * 6) + "deg);" + this.getTransitionCss()
  }

  getTransitionCss(): string {
    if (this.animate) {
      return "transition: all 1000ms 0s ease;"
    } else {
      return ""
    }
  }
}
</script>
