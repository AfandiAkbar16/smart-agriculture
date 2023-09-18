<template>
  <q-card class="q-pa-md q-ma-md card" style="height: 550px">
    <q-card-section>
      <div class="text-h6 text-center">
        {{ series[0].name }}
      </div>
      <apexchart
        type="line"
        :options="chartOptions"
        :series="series"
        :height="chartOptions.chart.height"
      ></apexchart>
    </q-card-section>
  </q-card>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { io } from "socket.io-client";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "chart-alat",
          zoom: {
            enabled: false,
          },
          height: "250%",
        },

        xaxis: {
          categories: [], // Panjang data 20
        },
        legend: {
          show: true,
        },
        dataLabels: {
          enabled: true,
        },

        colors: ["#21ba45"],
      },
      series: [
        {
          name: "",
          data: [], // Data awal 0 di baris pertama
        },
      ],
      dataCounter: 0, // Untuk menghitung jumlah data yang masuk
      lastReceivedTime: null,
    };
  },
  mounted() {
    this.initializeSocketIO();
  },
  methods: {
    updateChart(newData, waktu) {
      if (this.dataCounter < 10) {
        // Jika masih ada ruang di array, tambahkan data baru
        this.series[0].data.push(newData);
        this.chartOptions.xaxis.categories.push(waktu);
        this.dataCounter++;
      } else {
        // Jika sudah mencapai 20 data, geser data lama ke depan dan tambahkan data baru di akhir
        this.series[0].data.shift();
        this.series[0].data.push(newData);

        // Geser kategori lama dan tambahkan kategori baru di akhir
        this.chartOptions.xaxis.categories.shift();
        this.chartOptions.xaxis.categories.push(waktu);
      }
      this.lastReceivedTime = waktu;
    },
    initializeSocketIO() {
      const socket = io("http://192.168.191.130:3001");
      // const socket = io("http://192.168.123.143:3001");

      const sendMessage = () => {
        socket.emit("send_message", {
          IDUSER: this.$q.localStorage.getItem("user").IDUSER,
        });
      };

      socket.on("dataUpdate", (data) => {
        this.realTimeData = data;
        // console.log(this.realTimeData);

        const selectedData = this.realTimeData.find((item) => {
          const alatData = item.ALAT_DATA;

          return alatData.some(
            (sensorData) => sensorData.MAC_ADDRESS === this.$route.params.id
          );
        });

        if (selectedData) {
          const alatData = selectedData.ALAT_DATA;

          alatData.forEach((sensorData) => {
            if (sensorData.MAC_ADDRESS === this.$route.params.id) {
              const nama = sensorData.NAMA_ALAT;
              const dataSensorArray = sensorData.DATA_SENSOR;

              this.series[0].name = nama;

              dataSensorArray.forEach((dataSensor) => {
                const value = dataSensor.DATA_SENSOR;
                const waktu = dataSensor.DATE_TIME;
                // Add data to your chart
                if (this.formatTime(waktu) !== this.lastReceivedTime) {
                  // Update data chart dan lastReceivedTime jika waktu berubah
                  this.updateChart(value, this.formatTime(waktu));
                }
              });
            }
          });
        }
      });

      this.interval = setInterval(() => {
        sendMessage();
      }, 1000);
    },
    stopRealtimeUpdate() {
      clearInterval(this.interval);
    },
    formatTime(dateTime) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Menggunakan format 24 jam
      };
      const formattedTime = new Date(dateTime).toLocaleTimeString(
        undefined,
        options
      );

      // Ubah 24 menjadi 00
      if (formattedTime.startsWith("24:")) {
        return formattedTime.replace("24:", "00:");
      }

      return formattedTime;
    },
  },
  beforeUnmount() {
    this.stopRealtimeUpdate();
  },
};
</script>

<style>
.card {
  padding-left: 50px;
  padding-right: 50px;
}
</style>
