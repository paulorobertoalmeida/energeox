"use strict";
import { ref, computed, watch } from 'vue'

interface Data {
  temperature: number
  targetTemperature: number
  temperatureHistory: number[]
  energyUsage: number
  scheduledTemperatures: { time: string, temperature: number }[]
  temperatureAlerts: { time: string, temperature: number }[]
}

export default {
  setup() {
    const temperature = ref(72)
    const targetTemperature = ref(68)
    const temperatureHistory = ref([70, 71, 72, 73, 74])
    const energyUsage = ref(1000)
    const scheduledTemperatures = ref([
      { time: '9:00 AM', temperature: 70 },
      { time: '6:00 PM', temperature: 72 }
    ])
    const temperatureAlerts = ref([
      { time: '1:00 PM', temperature: 80 },
      { time: '3:00 PM', temperature: 65 }
    ])

    function increaseTemperature() {
      targetTemperature.value += 1
    }

    function decreaseTemperature() {
      targetTemperature.value -= 1
    }

    function addScheduledTemperature(time: string, temp: number) {
      scheduledTemperatures.value.push({ time, temperature: temp })
    }

    function addTemperatureAlert(time: string, temp: number) {
      temperatureAlerts.value.push({ time, temperature: temp })
    }

    const averageTemperature = computed(() => {
      const total = temperatureHistory.value.reduce((sum, current) => sum + current, 0)
      return total / temperatureHistory.value.length
    })

    watch(targetTemperature, () => {
      temperatureHistory.value.push(targetTemperature.value)
    })
    
    return {
      temperature, // add this line
      targetTemperature,
      temperatureHistory,
      energyUsage,
      scheduledTemperatures,
      temperatureAlerts,
      increaseTemperature,
      decreaseTemperature,
      addScheduledTemperature,
      addTemperatureAlert,
      averageTemperature
    }
  }
}
