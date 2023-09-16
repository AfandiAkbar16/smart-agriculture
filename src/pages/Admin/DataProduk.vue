<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat
        bordered
        title="Treats"
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
            label="Tambah Data Produk"
            to="/admin/inputproduk"
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
            <q-td key="NAMA_PRODUK" :props="props">
              {{ props.row.NAMA_PRODUK }}
            </q-td>
            <q-td key="HARGA" :props="props"> {{ props.row.HARGA }} </q-td>
            <q-td key="STOK" :props="props"> {{ props.row.STOK }} </q-td>
            <q-td key="IDKATEGORI" :props="props">
              {{ props.row.KATEGORI_DATA.NAMA_KATEGORI }}
            </q-td>
            <q-td key="IDUSER" :props="props">
              {{ props.row.USER_DATA.NAMA }}
            </q-td>
            <q-td key="GAMBAR" :props="props">
              <q-img
                :src="baseUrl + props.row.GAMBAR"
                style="width: 50px; height: 50px"
              />
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  class="q-px-xs"
                  icon="edit"
                  @click="edit(props.row.IDPRODUK)"
                  label="Edit"
                ></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapus(props.row.IDPRODUK)"
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
  name: "DataProduk",
  data() {
    return {
      loading: false,
      filter: "",
      urlGambar: null,
      // baseUrl: "http://localhost:5000/images/",
      // baseUrl: "http://192.168.191.130:5000/images/",
      // baseUrl: "http://192.168.70.143:5000/images/",
      baseUrl: "http://192.168.7.144:5000/images/",

      //Kampus
      // baseUrl: "http://192.168.7.192:5000/images/",
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
          name: "NAMA_PRODUK",
          required: true,
          label: "Nama Produk",
          align: "left",
          field: (row) => row.NAMA_PRODUK,
          format: (val) => `${val}`,
          sortable: true,
        },
        // { name: "NAMA_PRODUK", align: "center", label: "NamaBarang", field: "NAMA_PRODUK",  sortable: true},
        {
          name: "HARGA",
          align: "left",
          label: "Harga",
          field: "HARGA",
          sortable: true,
        },
        { name: "STOK", align: "center", label: "Stok", field: "STOK" },
        {
          name: "IDKATEGORI",
          align: "left",
          label: "Kategori",
          field: "IDKATEGORI",
          sortable: true,
        },
        {
          name: "IDUSER",
          align: "left",
          label: "User",
          field: "IDUSER",
          sortable: true,
        },
        { name: "GAMBAR", align: "center", label: "Gambar", field: "GAMBAR" },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getDataProduk() {
      api.get("produk/get").then((res) => {
        // console.log(res.data.data);
        this.data = res.data.data;
      });
    },
    edit(IDPRODUK) {
      this.$router.push("editproduk/" + IDPRODUK);
    },
    hapus(IDPRODUK) {
      api.delete("produk/delete/" + IDPRODUK).then((res) => {
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
          this.getDataProduk();
        } else {
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
        }
      });
    },
  },
  mounted() {
    this.getDataProduk();
  },
};
</script>
