<template>
  <div>
    <p>Current temperature: {{ temperature }}</p>
    <p>Target temperature: {{ targetTemperature }}</p>
    <p>Average temperature: {{ averageTemperature }}</p>
    <button @click="increaseTemperature">+</button>
    <button @click="decreaseTemperature">-</button>
    <h2>Temperature History</h2>
    <ul>
      <li v-for="temp in temperatureHistory" :key="temp">{{ temp }}</li>
    </ul>
    <h2>Scheduled Temperatures</h2>
    <ul>
      <li v-for="temp in scheduledTemperatures" :key="temp.time">
        {{ temp.time }}: {{ temp.temperature }}
      </li>
    </ul>
    <h2>Temperature Alerts</h2>
    <form @submit.prevent="addScheduledTemperature">
      <label for="time">Time:</label>
      <input
        type="text"
        v-model="newScheduledTemperature.time"
        id="time"
        required
      />
      <label for="temperature">Temperature:</label>
      <input
        type="number"
        v-model="newScheduledTemperature.temperature"
        id="temperature"
        required
      />
      <button type="submit">Add Scheduled Temperature</button>
    </form>
    <form @submit.prevent="addTemperatureAlert">
      <label for="time">Time:</label>
      <input
        type="text"
        v-model="newTemperatureAlert.time"
        id="time"
        required
      />
      <label for="temperature">Temperature:</label>
      <input
        type="number"
        v-model="newTemperatureAlert.temperature"
        id="temperature"
        required
      />
      <button type="submit">Add Temperature Alert</button>
    </form>
  </div>
</template>

<script lang="ts">
import temperatureControl from '../../temperatureControl'
// import "../../temperatureControl"

export default {
  name: "Home",
  components: {
    temperatureControl,
  },
  data() {
    return {
      newScheduledTemperature: {
        time: "",
        temperature: 0,
      },
      newTemperatureAlert: {
        time: "",
        temperature: 0,
      },
    };
  },
  methods: {
    addScheduledTemperature() {
      this.$refs.temperatureControl.addScheduledTemperature(
        this.newScheduledTemperature.time,
        this.newScheduledTemperature.temperature
      );
      this.newScheduledTemperature.time = "";
      this.newScheduledTemperature.temperature = 0;
    },
    addTemperatureAlert() {
      this.$refs.temperatureControl.addTemperatureAlert(
        this.newTemperatureAlert.time,
        this.newTemperatureAlert.temperature
      );
      this.newTemperatureAlert.time = "";
      this.newTemperatureAlert.temperature = 0;
    },
  },
};
</script>

<style>
button {
  background-color: #44D62C;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 10px;
}

button:hover {
  background-color: #00A6A6;
}

p {
  color: #6A1B9A;
  font-size: 18px;
  margin: 20px 0;
  text-align: center;
}

span {
  color: #FF6F61;
  font-size: 24px;
  font-weight: bold;
}

h2 {
  text-align: center;
  color: #9E9E9E;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}

li {
  margin: 10px;
  font-size: 14px;
}
</style>



