<template>
  <q-page>
    <div class="q-pa-md q-ma-md">
      <q-table
        flat
        bordered
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
        :rows-per-page-options="[8, 10, 15, 20, 25, 50, -1]"
      >
        <template v-slot:top>
          <q-btn
            color="primary"
            :disable="loading"
            label="Tambah Alat"
            to="inputalat"
          />
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
            <q-td key="MAC_ADDRESS" :props="props">
              {{ props.row.MAC_ADDRESS }}
            </q-td>
            <q-td key="NAMA_ALAT" :props="props">
              {{ props.row.NAMA_ALAT }}
            </q-td>

            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="nonaktif(props.row.MAC_ADDRESS)"
                  class="q-px-xs"
                  icon="delete"
                  label="Non Aktif"
                ></q-btn>
              </div>
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
  name: "DataAlat",
  data() {
    return {
      loading: false,
      filter: "",
      columns: [
        {
          name: "MAC_ADDRESS",
          required: true,
          label: "MAC Address",
          align: "left",
          field: (row) => row.MAC_ADDRESS,
          format: (val) => `${val}`,
          sortable: true,
        },
        // { name: "MAC_ADDRESS", align: "center", label: "NamaBarang", field: "MAC_ADDRESS",  sortable: true},
        {
          name: "NAMA_ALAT",
          align: "left",
          label: "Nama Alat",
          field: "NAMA_ALAT",
          sortable: true,
        },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getByUser() {
      api
        .get("alat/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER)
        .then((res) => {
          console.log(res);
          this.data = res.data.data;
        });
    },
    nonaktif(MAC_ADDRESS) {
      api.put("alat/non/" + MAC_ADDRESS).then((res) => {
        if (res.data.status) {
          this.$q.notify({
            color: "positive",
            message: res.data.message,
            actions: [
              {
                icon: "close",
                color: "white",
                round: true,
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
          this.getByUser();
        } else {
          this.$q.notify({
            color: "negative",
            message: res.data.message,
            actions: [
              {
                icon: "close",
                color: "white",
                round: true,
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        }
      });
    },
  },
  mounted() {
    this.getByUser();
  },
};
</script>
