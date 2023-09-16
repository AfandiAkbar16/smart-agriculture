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
            label="Tambah Kategori"
            to="/admin/inputkategori"
          />
          <q-space />
          <div v-if="$q.screen.xs || $q.screen.sm">
            <q-card style="width: 100px" flat>
              <q-input
                filled
                dense
                debounce="300"
                color="primary"
                v-model="filter"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-card>
          </div>
          <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
            <q-card style="width: 300px" flat>
              <q-input
                filled
                dense
                debounce="300"
                color="primary"
                v-model="filter"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-card>
          </div>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <!-- <q-td key="IDKATEGORI" :props="props">{{ props.row.IDKATEGORI }}</q-td> -->
            <q-td key="NAMA_KATEGORI" :props="props">{{
              props.row.NAMA_KATEGORI
            }}</q-td>
            <q-td key="KETERANGAN" :props="props">{{
              props.row.KETERANGAN
            }}</q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn
                  color="teal"
                  dense
                  size="sm"
                  @click="edit(props.row.IDKATEGORI)"
                  class="q-px-xs"
                  icon="edit"
                  label="Edit"
                ></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapus(props.row.IDKATEGORI)"
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
  name: "KategoriPage",
  data() {
    return {
      loading: false,
      filter: "",
      rowCount: 10,
      columns: [
        // {
        //   name: "IDKATEGORI",
        //   required: true,
        //   label: "ID Kategori",
        //   align: "left",
        //   field: (row) => row.IDKATEGORI,
        //   format: (val) => `${val}`,
        //   sortable: true
        // },
        {
          name: "NAMA_KATEGORI",
          required: true,
          label: "Kategori",
          align: "left",
          field: (row) => row.NAMA_KATEGORI,
          format: (val) => `${val}`,
          sortable: true,
        },
        // { name: "NAMA_KATEGORI", align: "left", label: "Kategori", field: "NAMA_KATEGORI", sortable: true },
        {
          name: "KETERANGAN",
          align: "left",
          label: "Keterangan",
          field: "KETERANGAN",
          sortable: true,
        },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      data: [],
    };
  },
  methods: {
    getDataKategori() {
      api.get("kategori/get").then((res) => {
        console.log(res.data.data);
        this.data = res.data.data;
      });
    },
    edit(IDKATEGORI) {
      this.$router.push("editkategori/" + IDKATEGORI);
    },
    hapus(IDKATEGORI) {
      api.delete("kategori/delete/" + IDKATEGORI).then((res) => {
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
          this.getDataKategori();
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
    this.getDataKategori();
  },
};
</script>
