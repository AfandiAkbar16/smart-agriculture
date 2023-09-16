<template>
  <q-page>
    <div class="q-pa-md q-ma-md">
      <div class="item-start q-col-gutter-md">
        <div class="q-pa-sm">
          <q-card flat class="q-pt-sm q-pb-none q-px-sm">
            <div class="row">
              <div class="col-6 text-h6">Dashboard</div>
              <p class="col-3">
                <strong class="flex flex-center">
                  <q-icon class="q-pr-xs" name="schedule" />
                  {{ currentTime }}
                </strong>
              </p>

              <p class="col-3 text-center">
                <strong class="flex flex-center">
                  <q-icon class="q-pr-xs" name="today" />
                  {{ formattedDate }}
                </strong>
              </p>
            </div>
          </q-card>
        </div>

        <!-- <div
          v-for="(settanam, i) in realTimeData"
          :key="i"
          class="q-px-sm q-pb-sm q-pt-none"
        >
          <q-card class="q-py-sm q-px-sm">
            <div v-for="(tanam, tIndex) in settanam.TANAMAN_DATA" :key="tIndex">
              <q-item>
                <q-item-section class="q-pa-sm">
                  <q-item-label class="text-subtitle1">
                    <strong>Nama Tanaman = {{ tanam.NAMA_TANAMAN }} </strong>
                  </q-item-label>
                  <q-item-label>
                    Media Tanam = {{ settanam.MEDIA_TANAM }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="row q-col-gutter-md">
              <div
                class="my-card"
                v-for="(alatData, aIndex) in settanam.ALAT_DATA"
                :key="aIndex"
              >
                <div
                  v-for="(datasensor, dsIndex) in alatData.DATA_SENSOR"
                  :key="dsIndex"
                >
                  <div class="row border">
                    <q-card-section class="q-py-xs q-px-xs col">
                      <q-item>
                        <q-item-section>
                          <q-item-label
                            class="text-bold text-center text-subtitle1"
                          >
                            <strong>
                              {{ alatData.NAMA_ALAT }} =
                              {{ datasensor.DATA_SENSOR }}
                            </strong>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item>
                        <q-item-section>
                          <q-item-label
                            class="text-center text-bold text-dark"
                            caption
                          >
                            <strong>
                              {{ formatTime(datasensor.DATE_TIME) }}
                            </strong>
                          </q-item-label>
                          <q-item-label
                            class="text-center text-bold text-primary"
                            caption
                          >
                            <strong>
                              {{ datasensor.KETERANGAN }}
                            </strong>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-card-section>
                    <q-separator vertical inset></q-separator>
                    <q-card-section class="q-px-xs q-py-sm">
                      <q-item-label class="q-pb-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="text_snippet"
                          @click="logdata(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Data Log</q-tooltip>
                        </q-btn>
                      </q-item-label>

                      <q-separator></q-separator>
                      <q-item-label class="q-pt-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="show_chart"
                          @click="chartdata(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Grafik Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>
                    </q-card-section>
                    <q-separator vertical inset></q-separator>
                    <q-card-section class="q-px-xs q-py-sm">
                      <q-item-label class="q-pb-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="settings"
                          @click="setalat(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Set Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>

                      <q-separator></q-separator>
                      <q-item-label class="q-pt-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="dataset"
                          @click="logsetalat(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Log Set Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>
                    </q-card-section>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div> -->

        <div
          v-for="(settanam, i) in selectedDataSource"
          :key="i"
          class="q-px-sm q-pb-sm q-pt-none"
        >
          <q-card class="q-py-sm q-px-sm">
            <div v-for="(tanam, tIndex) in settanam.TANAMAN_DATA" :key="tIndex">
              <q-item>
                <q-item-section class="q-pa-sm">
                  <q-item-label class="text-subtitle1">
                    <strong>Nama Tanaman = {{ tanam.NAMA_TANAMAN }} </strong>
                  </q-item-label>
                  <q-item-label>
                    Media Tanam = {{ settanam.MEDIA_TANAM }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="row q-col-gutter-md">
              <div
                class="my-card"
                v-for="(alatData, aIndex) in settanam.ALAT_DATA"
                :key="aIndex"
              >
                <div
                  v-for="(datasensor, dsIndex) in alatData.DATA_SENSOR"
                  :key="dsIndex"
                >
                  <div class="row border">
                    <q-card-section class="q-py-xs q-px-xs col">
                      <q-item>
                        <q-item-section>
                          <q-item-label
                            class="text-bold text-center text-subtitle1"
                          >
                            <strong>
                              {{ alatData.NAMA_ALAT }} =
                              {{
                                datasensor !== null ? datasensor.DATA_SENSOR : 0
                              }}
                            </strong>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item>
                        <q-item-section>
                          <q-item-label
                            class="text-center text-bold text-dark"
                            caption
                          >
                            <strong>
                              {{
                                datasensor !== null
                                  ? formatTime(datasensor.DATE_TIME)
                                  : "-"
                              }}
                            </strong>
                          </q-item-label>
                          <q-item-label
                            class="text-center text-bold text-primary"
                            caption
                          >
                            <strong>
                              {{
                                datasensor !== null
                                  ? datasensor.KETERANGAN
                                  : "-"
                              }}
                            </strong>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-card-section>
                    <q-separator vertical inset></q-separator>
                    <q-card-section class="q-px-xs q-py-sm">
                      <q-item-label class="q-pb-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="text_snippet"
                          @click="logdata(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Data Log</q-tooltip>
                        </q-btn>
                      </q-item-label>

                      <q-separator></q-separator>
                      <q-item-label class="q-pt-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="show_chart"
                          @click="chartdata(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Grafik Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>
                    </q-card-section>
                    <q-separator vertical inset></q-separator>
                    <q-card-section class="q-px-xs q-py-sm">
                      <q-item-label class="q-pb-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="settings"
                          @click="setalat(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Set Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>

                      <q-separator></q-separator>
                      <q-item-label class="q-pt-sm">
                        <q-btn
                          flat
                          rounded
                          color="primary"
                          icon="dataset"
                          @click="logsetalat(alatData.MAC_ADDRESS)"
                        >
                          <q-tooltip class="bg-primary">Log Set Alat</q-tooltip>
                        </q-btn>
                      </q-item-label>
                    </q-card-section>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api, worker } from "src/boot/axios";
import { io } from "socket.io-client";

export default {
  name: "DashboardPage",
  data() {
    return {
      selectedDate: new Date(),
      realTimeData: {},

      database: [],
      currentedTime: this.timeFormat(new Date()),
      currentTime: this.formatTime(new Date()),
      useRealTimeData: true,
    };
  },
  methods: {
    toggleDataSource() {
      this.useRealTimeData = !this.useRealTimeData;
    },
    getSettanam() {
      api
        .get(
          "settanam/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER
        )
        .then((res) => {
          console.log(res.data.data);
          this.database = res.data.data;
        });
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
      });

      this.interval = setInterval(() => {
        sendMessage();
      }, 1000);
    },
    updateTime() {
      const now = new Date();
      this.currentedTime = this.timeFormat(now);
      this.currentTime = this.formatTime(now);
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
    timeFormat(dateTime) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
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
    logdata(GUID) {
      this.$router.push("log/" + GUID);
    },
    chartdata(GUID) {
      this.$router.push("chart/" + GUID);
    },
    setalat(MAC_ADDRESS) {
      this.$router.push("inputsetalat/" + MAC_ADDRESS);
    },
    logsetalat(MAC_ADDRESS) {
      this.$router.push("setalat/" + MAC_ADDRESS);
    },
  },
  computed: {
    selectedDataSource() {
      if (this.useRealTimeData && Object.keys(this.realTimeData).length > 0) {
        // Jika useRealTimeData aktif dan realTimeData memiliki data
        return this.realTimeData;
      } else {
        // Jika useRealTimeData tidak aktif atau realTimeData tidak memiliki data
        return this.database;
      }
    },
    formattedDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(this.selectedDate).toLocaleDateString("id-ID", options);
    },
    dateFormated() {
      const options = {
        weekday: "short",
        month: "numeric",
        day: "numeric",
      };
      return new Date(this.selectedDate).toLocaleDateString("id-ID", options);
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  mounted() {
    this.initializeSocketIO();
    this.updateTime();
    this.interval = setInterval(this.updateTime, 1000);
    this.getSettanam();
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}

.border {
  border: 2px solid #21ba45;
}
</style>
