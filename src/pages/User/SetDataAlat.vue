<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        bordered
        :title="nama"
        :rows="data"
        :columns="columns"
        row-key="id"
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
            <!-- <q-td key="IDBARANG" :props="props"> {{ props.row.IDBARANG }} </q-td> -->
            <q-td key="CREATED_AT" :props="props">
              {{ formatDate(props.row.CREATED_AT) }}
            </q-td>
            <q-td key="CREATED_AT" :props="props">
              {{ formatTime(props.row.CREATED_AT) }}
            </q-td>
            <q-td key="MIN" :props="props">
              {{ props.row.DATA_SENSOR.MIN }}
            </q-td>
            <q-td key="MAX" :props="props">
              {{ props.row.DATA_SENSOR.MAX }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  name: "DataProduk",
  data() {
    return {
      loading: false,
      filter: "",
      columns: [
        // {
        //   name: "IDBARANG",
        //   required: true,
        //   label: "ID Kategori",
        //   align: "left",
        //   field: (row) => row.IDBARANG,
        //   format: (val) => `${val}`,
        //   sortable: true
        // },
        {
          name: "CREATED_AT",
          required: true,
          label: "Tanggal",
          align: "left",
          field: (row) => row.CREATED_AT,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "CREATED_AT",
          align: "center",
          label: "Waktu",
          field: "CREATED_AT",
        },
        // { name: "NAMA_PRODUK", align: "center", label: "NamaBarang", field: "NAMA_PRODUK",  sortable: true},
        {
          name: "MIN",
          align: "center",
          label: "Minimal",
          field: "MIN",
        },
        { name: "MAX", align: "center", label: "Maksimal", field: "MAX" },

        // {
        //   name: "INTERVAL",
        //   align: "left",
        //   label: "Jangka Waktu",
        //   field: "INTERVAL",
        //   sortable: true,
        // },
      ],
      data: [],
      nama: {},
    };
  },
  methods: {
    getSetAlatByUser() {
      api.get(`setalat/getbyid/${this.$route.params.id}`).then((res) => {
        console.log(res.data.data);
        this.data = res.data.data.reverse();
        this.data.forEach((item) => {
          const dataAlat = item.DATA_ALAT;
          dataAlat.forEach((namaAlat) => {
            this.nama = namaAlat.NAMA_ALAT;
          });
        });
      });
    },
    formatDate(dateTime) {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      return new Date(dateTime).toLocaleDateString(undefined, options);
    },
    formatTime(dateTime) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      return new Date(dateTime).toLocaleTimeString(undefined, options);
    },
  },
  mounted() {
    this.getSetAlatByUser();
  },
};
</script>
