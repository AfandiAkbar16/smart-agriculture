<template>
  <q-page>
    <div class="q-pa-md q-ma-md">
      <q-table
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
            label="Tambah Data Alat"
            to="/admin/inputalat"
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

            <q-td key="STATUS" :props="props">
              <q-badge
                v-if="props.row.STATUS === 1"
                color="red"
                class="q-pa-sm"
              >
                Tidak Aktif
              </q-badge>
              <q-badge v-else color="green" class="q-pa-sm"> Aktif </q-badge>
            </q-td>
            <q-td key="IDUSER" :props="props">
              <template
                v-if="props.row.USER_DATA && props.row.USER_DATA.length"
              >
                <div v-for="item in props.row.USER_DATA" :key="item.id">
                  {{ item.NAMA || "-" }}
                </div>
              </template>
              <div v-else>-</div>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  class="q-px-xs"
                  icon="edit"
                  @click="edit(props.row.MAC_ADDRESS)"
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
        {
          name: "NAMA_ALAT",
          align: "left",
          label: "Nama Alat",
          field: "NAMA_ALAT",
          sortable: true,
        },

        { name: "STATUS", align: "center", label: "Status", field: "STATUS" },
        {
          name: "IDUSER",
          align: "center",
          label: "User",
          field: "IDUSER",
          sortable: true,
        },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getDataAlat() {
      api.get("alat/get").then((res) => {
        this.data = res.data.data;
      });
    },
    edit(MAC_ADDRESS) {
      this.$router.push("editalat/" + MAC_ADDRESS);
    },
    hapus(GUID) {
      api.delete("alat/delete/" + GUID).then((res) => {
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
          this.getDataAlat();
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
    this.getDataAlat();
  },
};
</script>
