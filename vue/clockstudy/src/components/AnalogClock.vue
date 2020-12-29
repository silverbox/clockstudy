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
  name: 'analog-clock'
  @Prop() readonly title!: string
  @Prop() readonly minutes!: number
  // @Prop() readonly hour!: number
  // @Prop() readonly minute!: number
  @Prop() readonly height!: number
  @Prop() readonly width!: number

  message = "This is a message"

  /** lifecycle hook */
  mounted(): void {
    console.log('mounted')
    // this.refreshHand()
  }

  get getOutlineStyle (): string {
    return "margin:auto;height:" + this.height + "px;width:" + this.width + "px;"
  }

  get getHourHandStyle (): string {
    const hourDeg = this.minutes / 2
    console.log(hourDeg)
    return "position:absolute; transform:rotate(" + hourDeg + "deg);transition: all 1000ms 0s ease;"
  }

  get getMinHandStyle (): string {
    // console.log((this.hour))
    // console.log((this.minute))
    return "position:absolute; transform:rotate(" + (this.minutes * 6) + "deg);transition: all 1000ms 0s ease;"
  }

  get getTitle (): string {
    return this.title + this.message
  }

  get getMessage (): string {
    return this.message
  }

  /** methods */
  refreshHand(): void {
    // hourHandElem.setAttribute('transform', 'rotate(' + hourDeg + ')')
    // minHandElem.setAttribute('transform', 'rotate(' + this.minute * 6 + ')')
  }  
}
</script>
