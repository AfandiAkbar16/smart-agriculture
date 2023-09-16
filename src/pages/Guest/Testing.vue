<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-card>
          <q-card-section>
            <h2 class="text-h6">Grafik Contoh</h2>
            <canvas id="chartCanvas" width="400" height="200"></canvas>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted } from "vue";
import { Chart } from "chart.js/auto";

export default {
  name: "ChartPage",
  setup() {
    let chartInstance = null;
    let dataValues = [0]; // Start with a zero value
    let dataIndex = 1;

    onMounted(() => {
      const ctx = document.getElementById("chartCanvas").getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Data 1"], // Start with the initial label
          datasets: [
            {
              label: "Contoh Data",
              data: dataValues,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      setInterval(() => {
        // Update new data point
        const newData = Math.random() * 1000;
        dataValues.push(newData);
        dataIndex++;

        chartInstance.data.datasets[0].data = dataValues;
        chartInstance.data.labels.push("Data " + dataIndex);

        if (chartInstance.data.labels.length > 20) {
          chartInstance.data.labels.shift();
          chartInstance.data.datasets[0].data.shift();
        }

        chartInstance.update();
      }, 2000);
    });
  },
};
</script>

<style scoped></style>
