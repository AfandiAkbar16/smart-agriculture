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
            label="Tambah Data User"
            to="/admin/inputuser"
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
            <q-td key="NAMA" :props="props">
              {{ props.row.NAMA }}
            </q-td>
            <q-td key="EMAIL" :props="props"> {{ props.row.EMAIL }} </q-td>
            <q-td key="ALAMAT" :props="props"> {{ props.row.ALAMAT }} </q-td>
            <q-td key="NO_TELP" :props="props">
              {{ props.row.NO_TELP }}
            </q-td>
            <q-td key="ROLE" :props="props">
              <span v-if="props.row.ROLE == 0" class="no-color text-dark">
                Admin
              </span>
              <span v-else class="no-color text-dark"> User </span>
            </q-td>
            <!-- <q-td key="GAMBAR" :props="props"> {{ props.row.GAMBAR }} </q-td> -->
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  class="q-px-xs"
                  icon="edit"
                  @click="edit(props.row.IDUSER)"
                  label="Edit"
                ></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapus(props.row.IDUSER)"
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
  name: "DataUser",
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
          name: "NAMA",
          required: true,
          label: "Nama",
          align: "left",
          field: (row) => row.NAMA,
          format: (val) => `${val}`,
          sortable: true,
        },
        // { name: "NAMA_BARANG", align: "center", label: "NamaBarang", field: "NAMA_BARANG",  sortable: true},
        {
          name: "EMAIL",
          align: "left",
          label: "E-Mail",
          field: "EMAIL",
          sortable: true,
        },
        { name: "ALAMAT", align: "center", label: "Alamat", field: "ALAMAT" },
        {
          name: "NO_TELP",
          align: "left",
          label: "No Telepon",
          field: "NO_TELP",
          sortable: true,
        },
        {
          name: "ROLE",
          align: "left",
          label: "Role",
          field: "ROLE",
          sortable: true,
        },
        // { name: "GAMBAR", align: "center", label: "Gambar", field: "GAMBAR" },
        { name: "action", align: "center", label: "ACTION", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getDataUser() {
      api.get("user/get").then((res) => {
        // console.log(res.data.data);
        this.data = res.data.data;
      });
    },
    edit(IDUSER) {
      this.$router.push("edituser/" + IDUSER);
    },
    hapus(IDUSER) {
      api.delete("user/delete/" + IDUSER).then((res) => {
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
          this.getDataUser();
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
    this.getDataUser();
  },
};
</script>

<style scoped>
.no-color {
  background-color: transparent;
}
</style>
