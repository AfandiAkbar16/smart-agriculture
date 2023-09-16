<template>
  <q-page>
    <div class="q-pa-md q-ma-md">
      <q-table
        flat
        bordered
        :rows="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >
        <template v-slot:top>
          <q-btn
            color="primary"
            :disable="loading"
            label="Tambah Data Set Tanam"
            to="inputsettanaman"
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
            <q-td key="MEDIA_TANAM" :props="props">
              {{ props.row.MEDIA_TANAM }}
            </q-td>
            <q-td key="NAMA_TANAMAN" :props="props">
              <div v-for="tanam in props.row.TANAMAN_DATA" :key="tanam.GUID">
                {{ tanam.NAMA_TANAMAN }}
              </div>
            </q-td>
            <q-td key="NAMA_ALAT" :props="props">
              <div v-for="sensor in props.row.ALAT_DATA" :key="sensor.GUID">
                {{ sensor.NAMA_ALAT }}
              </div>
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
  data() {
    return {
      filter: "",
      loading: false,

      columns: [
        {
          name: "MEDIA_TANAM",
          required: true,
          label: "Media Tanam",
          align: "left",
          field: (row) => row.MEDIA_TANAM,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "NAMA_TANAMAN",
          align: "left",
          label: "Tanaman",
          field: "NAMA_TANAMAN",
          sortable: true,
        },
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
    getSetTanaman() {
      api
        .get(
          "settanam/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER
        )
        .then((res) => {
          this.data = res.data.data;
        });
    },
    edit(GUID) {
      this.$router.push("editsettanam/" + GUID);
    },
    hapus(GUID) {
      api.delete("settanam/delete/" + GUID).then((res) => {
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
          this.getSetTanaman();
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
  created() {
    this.getSetTanaman();
  },
};
</script>
