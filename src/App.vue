<template>
  <div id="app">
    <RotatingPieChart />
  </div>
</template>

<script>
import RotatingPieChart from "@/components/RotatingPieChart";

export default {
  name: "app",
  components: {
    RotatingPieChart
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
