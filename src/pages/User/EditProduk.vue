<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Ubah Data Produk</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-badge color="primary"> Data Produk</q-badge>
          <q-input
            label="Nama Produk"
            lazy-rules
            color="primary"
            v-model="NAMA_PRODUK"
            :rules="[
              (val) => (val !== null && val !== '') || 'Nama Produk Dibutuhkan',
            ]"
          >
            <template v-slot:append>
              <q-icon name="title" />
            </template>
          </q-input>

          <q-input
            label="Harga"
            lazy-rules
            color="primary"
            type="number"
            v-model="HARGA"
            :rules="[
              (val) => (val !== null && val !== '') || 'Harga Dibutuhkan',
            ]"
          >
            <template v-slot:append>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <q-input
            label="Stok"
            lazy-rules
            color="primary"
            type="number"
            v-model="STOK"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Stok Barang harus diisi',
            ]"
          >
            <template v-slot:append>
              <q-icon name="storage" />
            </template>
          </q-input>

          <q-select
            v-model="IDKATEGORI"
            :options="kategoriOptions"
            emit-value
            map-options
            color="primary"
            label="Kategori"
          >
            <template v-slot:no-option> Tidak ada opsi tersedia </template>
            <template v-slot:append>
              <q-icon name="tag" />
            </template>
          </q-select>

          <q-img
            :src="baseUrl + this.gambar"
            style="width: 250px; height: 250px"
          />
          <q-toggle v-model="gantiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gantiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
              (val) => (val !== null && val !== '') || 'Gambar Dibutuhkan',
            ]"
          >
            <template v-slot:append>
              <q-icon name="add_photo_alternate" />
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="Simpan Data"
              style="height: 50px"
              color="primary"
            />
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default {
  name: "EditProduk",
  data() {
    return {
      gantiGambar: false,
      baseUrl: "http://localhost:5050/gambar/",
      NAMA_PRODUK: null,
      HARGA: null,
      STOK: null,
      IDKATEGORI: null,
      GAMBAR: null,

      kategoriOptions: [],
    };
  },
  methods: {
    selectFile() {
      this.GAMBAR = this.$refs.file.$refs.input.files[0];
    },
    onSubmit() {
      api
        .put(`produk/edit/${this.$route.params.id}`, {
          NAMA_PRODUK: this.NAMA_PRODUK,
          HARGA: this.HARGA,
          STOK: this.STOK,
          IDKATEGORI: this.IDKATEGORI,
          GAMBAR: this.GAMBAR,
        })
        .then((res) => {
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
            this.$router.push("/user/produk");
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
    getProdukById() {
      api.get(`produk/get/${this.$route.params.id}`).then((res) => {
        console.log(res);
        this.NAMA_PRODUK = res.data.data.NAMA_PRODUK;
        this.HARGA = res.data.data.HARGA;
        this.STOK = res.data.data.STOK;
        this.IDKATEGORI = res.data.data.IDKATEGORI;
        this.GAMBAR = res.data.data.GAMBAR;
      });
    },
    getKategoriOption() {
      api.get("kategori/get").then((res) => {
        console.log(res);
        this.kategoriOptions = res.data.data.map((kategori) => ({
          label: kategori.NAMA_KATEGORI,
          value: kategori.IDKATEGORI,
        }));
      });
    },
  },
  mounted() {
    this.getKategoriOption();
    this.getProdukById();
  },
};
</script>

<style scoped></style>
