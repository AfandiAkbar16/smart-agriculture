<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <div class="q-pa-md q-ma-md">
      <q-table
        bordered
        :title="nama.NAMA_ALAT"
        :rows="data"
        :columns="columns"
        row-key="DATE_TIME"
        :filter="filter"
        :loading="loading"
        :rows-per-page-options="[8, 10, 15, 20, 25, 50, -1]"
      >
        <template v-slot:top-right>
          <q-space />
          <div v-if="$q.screen.xs || $q.screen.sm">
            <q-card style="width: 100px" flat>
              <q-input filled dense color="primary" v-model="filter">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-card>
          </div>
          <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
            <q-card style="width: 300px" flat>
              <q-input filled dense color="primary" v-model="filter">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-card>
          </div>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="DATE_TIMET" :props="props">
              {{ props.row.DATE_TIMET }}
            </q-td>
            <q-td key="DATE_TIMEW" :props="props">
              {{ props.row.DATE_TIMEW }}
            </q-td>
            <q-td key="DATA_SENSOR" :props="props">
              {{ props.row.DATA_SENSOR }}
            </q-td>
            <q-td key="KETERANGAN" :props="props">
              {{ props.row.KETERANGAN }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { worker } from "src/boot/axios";

export default {
  data() {
    return {
      selectedDate: new Date(),
      filter: "",
      loading: false,

      columns: [
        {
          name: "DATE_TIMET",
          required: true,
          label: "Tanggal",
          align: "center",
          field: (row) => row.DATE_TIMET,
          format: (val) => `${val}`,
          sortable: true,
        },

        {
          name: "DATE_TIMEW",
          align: "center",
          label: "Waktu",
          field: "DATE_TIMEW",
          sortable: true,
        },

        {
          name: "DATA_SENSOR",
          align: "center",
          label: "Data Sensor",
          field: "DATA_SENSOR",
        },
        {
          name: "KETERANGAN",
          align: "left",
          label: "Keterangan",
          field: "KETERANGAN",
        },
      ],
      data: [],
      nama: {},
    };
  },

  methods: {
    getLogId() {
      worker.get(`datalog/get/${this.$route.params.id}`).then((res) => {
        this.nama = res.data;
        this.data = res.data.DATA_SENSOR.map((item) => {
          return {
            ...item,
            DATE_TIMET: this.formatDate(item.DATE_TIME),
            DATE_TIMEW: this.formatTime(item.DATE_TIME),
          };
        }).reverse();
      });
    },

    formatDate(dateTime) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return new Date(dateTime).toLocaleDateString("id-ID", options);
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
  created() {
    this.getLogId();
  },
};
</script>
