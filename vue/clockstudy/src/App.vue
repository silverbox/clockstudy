<template>
  <v-app>
    <v-main>
      <v-container>
        <analog-clock
          title="じかんをすすめたり、もどしたりしてみよう！"
          height="401"
          width="401"
          :minutes="curMins"
        />
        <v-row class="text-center">
          <v-col cols="12">
            <span>時間</span>
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
        <v-row class="text-center">
          <v-col cols="12">
            <span>分</span>
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
            <div v-text="curTime" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

import AnalogClock from './components/AnalogClock.vue';

@Component({
  components: {
    AnalogClock
  }
})
export default class App extends Vue {
  name: 'App'
  curMins = 0
  hourValue = 0
  minValue = 30
  curTime = "0 じ 0 ふんです"

  onAdd(): void {
    const wkMins = this.curMins + this.minValue + (this.hourValue * 60)
    // this.curMins = (wkMins + 720) % 720
    this.curMins = wkMins
    this.setCurTime()
  }
  onDel(): void {
    const wkMins = this.curMins - this.minValue - (this.hourValue * 60)
    // this.curMins = (wkMins + 720) % 720
    this.curMins = wkMins
    this.setCurTime()
  }
  setCurTime(): void {
    const wkHour = Math.floor(((this.curMins + 72000) % 720) / 60)
    const wkMin = ((this.curMins + 72000) % 60)
     this.curTime = wkHour + " じ " + wkMin + " ふんです"
  }
}
</script>
