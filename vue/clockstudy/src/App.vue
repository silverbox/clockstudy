<template>
  <v-app>
    <v-main>
      <v-container>
        <analog-clock
          title="じかんをすすめたり、もどしたりしてみよう！"
          height="401"
          width="401"
          :minutes="curMins"
          :animate="useAnimation"
        />
        <v-row align="center">
          <v-col cols="5" class="text-right">
            <span>じかん</span>
          </v-col>
          <v-col cols="7" class="text-left">
            <v-btn-toggle
              v-model="hourValue"
              class="transparent"
            >
              <v-btn :value="0" >0</v-btn>
              <v-btn :value="1" >1</v-btn>  
              <v-btn :value="2" >2</v-btn>
              <v-btn :value="3" >3</v-btn>  
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="5" class="text-right">
            <span>ふん</span>
          </v-col>
          <v-col cols="7" class="text-left">
            <v-btn-toggle
              v-model="minValue"
              class="transparent"
            >
              <v-btn :value="0" >0</v-btn>
              <v-btn :value="15" >15</v-btn>  
              <v-btn :value="30" >30</v-btn>
              <v-btn :value="45" >45</v-btn>  
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn @click="onAdd" >すすめる</v-btn>
            <v-btn @click="onDel" >もどす</v-btn>  
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-col cols="12">
            <div class="display-1" v-text="curTime" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import AnalogClock from './components/AnalogClock.vue';

@Component({
  components: {
    AnalogClock
  }
})
export default class App extends Vue {
  name = 'App'
  curMins = 0
  hourValue = 0
  minValue = 30
  curTime = "12 じ 0 ふんです"
  useAnimation = true

  timeoutId = -1

  onAdd(): void {
    this.setCurTime(true)
  }
  onDel(): void {
    this.setCurTime(false)
  }
  setCurTime(isAdd: boolean): void {
    const wkMins = isAdd ? (this.curMins + this.minValue + (this.hourValue * 60)) : (this.curMins - this.minValue - (this.hourValue * 60))
    this.useAnimation = true
    this.curMins = wkMins

    const wkHour = Math.floor(((this.curMins + 72000) % 720) / 60)
    const wkMin = ((this.curMins + 72000) % 60)
    const wkHour2 = (wkHour == 0 ? 12 : wkHour)
    const wkMinStr = wkMin == 0 ? "" : (wkMin + " ふん")
    this.curTime = wkHour2 + " じ " + wkMinStr + "です"

    if (this.timeoutId != -1) {
      clearTimeout(this.timeoutId)
    }

    this.timeoutId = setTimeout(function(this: any){
      const wkMins = (this.curMins + 720) % 720
      if (wkMins != this.curMins) {
        this.useAnimation = false
        this.curMins = wkMins
      }
      this.timeoutId = -1
    }.bind(this), 2000)
  }
}
</script>
