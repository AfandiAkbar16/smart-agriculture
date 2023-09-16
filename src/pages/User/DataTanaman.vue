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
            label="Tambah Data Tanaman"
            to="inputtanaman"
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
            <!-- <q-td key="IDBARANG" :props="props"> {{ props.row.IDBARANG }} </q-td> -->
            <q-td key="NAMA_TANAMAN" :props="props">
              {{ props.row.NAMA_TANAMAN }}
            </q-td>
            <q-td key="JENIS_TANAMAN" :props="props">
              {{ props.row.JENIS_TANAMAN }}
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="blue"
                  dense
                  size="sm"
                  class="q-px-xs"
                  icon="edit"
                  @click="edit(props.row.GUID)"
                  label="Edit"
                ></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapus(props.row.GUID)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"
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
  name: "DataTanaman",
  data() {
    return {
      loading: false,
      filter: "",
      columns: [
        {
          name: "NAMA_TANAMAN",
          required: true,
          label: "Nama Tanaman",
          align: "left",
          field: (row) => row.NAMA_TANAMAN,
          format: (val) => `${val}`,
          sortable: true,
        },
        // { name: "MAC_ADDRESS", align: "center", label: "NamaBarang", field: "MAC_ADDRESS",  sortable: true},
        {
          name: "JENIS_TANAMAN",
          align: "left",
          label: "Jenis Tanaman",
          field: "JENIS_TANAMAN",
          sortable: true,
        },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getTanamanByUser() {
      api
        .get("tanaman/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER)
        .then((res) => {
          // console.log(res.data.data);
          this.data = res.data.data;
        });
    },
    edit(GUID) {
      this.$router.push("edittanaman/" + GUID);
    },
    hapus(GUID) {
      api.delete("tanaman/delete/" + GUID).then((res) => {
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
          this.getTanamanByUser();
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
    this.getTanamanByUser();
  },
};
</script>
