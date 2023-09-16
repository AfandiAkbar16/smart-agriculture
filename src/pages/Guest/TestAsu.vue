<template>
  <div class="app">
    <apexchart
      width="550"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: Array.from({ length: 20 }, (_, i) => i), // Panjang data 20
        },
        markers: {
          size: 6,
          colors: ["#008FFB"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 8,
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [0], // Data awal 0 di baris pertama
        },
      ],
    };
  },
  mounted() {
    this.startRealtimeUpdate();
  },
  methods: {
    updateChart(newData) {
      this.series[0].data.push(newData);
      if (this.series[0].data.length > 20) {
        this.series[0].data.shift();
      }
    },
    startRealtimeUpdate() {
      this.interval = setInterval(() => {
        const max = 90;
        const min = 20;
        const newData = Math.floor(Math.random() * (max - min + 1)) + min;
        this.updateChart(newData);
      }, 2000); // Set interval sesuai kebutuhan Anda
    },
    stopRealtimeUpdate() {
      clearInterval(this.interval);
    },
  },
  beforeUnmount() {
    this.stopRealtimeUpdate();
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
