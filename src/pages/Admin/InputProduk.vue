<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Produk</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Produk</q-badge>
            <q-input
              label="ID Produk"
              lazy-rules
              color="primary"
              v-model="IDPRODUK"
              :rules="[
                (val) => (val !== null && val !== '') || 'ID Dibutuhkan',
              ]"
            >
              <template v-slot:append>
                <q-icon name="title" />
              </template>
            </q-input>

            <q-input
              label="Nama Produk"
              lazy-rules
              color="primary"
              v-model="NAMA_PRODUK"
              :rules="[
                (val) => (val !== null && val !== '') || 'Nama Dibutuhkan',
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
                  (val !== null && val !== '') || 'Stok Produk harus diisi',
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

            <q-file
              accept=".jpg, image/*"
              color="teal"
              filled
              v-model="GAMBAR"
              label="Upload Gambar"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
            <!-- <div class="col">
              <q-btn
                outline
                class="q-mr-sm"
                icon="delete"
                color="red"
                @click="removeForm(i)"
                v-show="i || (!i && form.length > 1)"
              />
              <q-btn
                outline
                icon="add"
                color="primary"
                @click="addForm(i)"
                v-show="i == form.length - 1"
              />
            </div> -->
          </div>

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
  data() {
    return {
      // form: model(),
      // form: {
      //   IDPRODUK: null,
      //   NAMA_PRODUK: null,
      //   HARGA: null,
      //   STOK: null,
      //   IDKATEGORI: null,
      // },
      IDPRODUK: null,
      NAMA_PRODUK: null,
      HARGA: null,
      STOK: null,
      IDKATEGORI: null,
      IDUSER: null,

      GAMBAR: null,

      kategoriOptions: [],
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.GAMBAR);
      // api
      //   .post(`produk/input`, {
      //     IDPRODUK: this.IDPRODUK,
      //     NAMA_PRODUK: this.NAMA_PRODUK,
      //     HARGA: this.HARGA,
      //     STOK: this.STOK,
      //     IDKATEGORI: this.IDKATEGORI,
      //     GAMBAR: this.GAMBAR,
      //     IDUSER: this.$q.localStorage.getItem("user").IDUSER,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     if (res.data.status) {
      //       this.$q.notify({
      //         color: "negative",
      //         message: res.data.message,
      //         icon: "ion-close",
      //       });
      //     } else {
      //       this.$q.notify({
      //         color: "positive",
      //         message: res.data.message,
      //         icon: "ion-close",
      //       });
      //       this.$router.push("/produk");
      //     }
      //   });
      const formData = new FormData();
      formData.append("IDPRODUK", this.IDPRODUK);
      formData.append("NAMA_PRODUK", this.NAMA_PRODUK);
      formData.append("HARGA", this.HARGA);
      formData.append("STOK", this.STOK);
      formData.append("IDKATEGORI", this.IDKATEGORI);
      formData.append("GAMBAR", this.GAMBAR);
      formData.append("IDUSER", this.$q.localStorage.getItem("user").IDUSER);

      api.post(`produk/input`, formData).then((res) => {
        console.log(res);
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
          this.$router.push("/admin/produk");
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

    // create: async function () {
    //   const data = {
    //     form: this.form,
    //     IDUSER: this.$q.localStorage.getItem("user").IDUSER,
    //   };
    // data.IDPRODUK = this.IDPRODUK;
    // data.NAMA_PRODUK = this.NAMA_PRODUK;
    // data.HARGA = this.HARGA;
    // data.STOK = this.STOK;
    // data.IDKATEGORI = this.IDKATEGORI;
    // // data.GAMBAR = this.GAMBAR

    // await api.post(`produk/input`, data).then((res) => {
    //   console.log(res);
    //   if (res.data.status) {
    //     this.$q.notify({
    //       color: "negative",
    //       message: res.data.message,
    //       icon: "ion-close",
    //     });
    //   } else {
    //     this.$q.notify({
    //       color: "positive",
    //       message: res.data.message,
    //       icon: "ion-close",
    //     });
    //     this.$router.push("/user/produk");
    //   }
    // });
    // },
    // addForm(index) {
    //   this.form.push({
    //     IDPRODUK: null,
    //     NAMA_PRODUK: null,
    //     HARGA: null,
    //     STOK: null,
    //     IDKATEGORI: null,
    //   });
    //   // this.GAMBAR.push({
    //   //   GAMBAR: null,
    //   // })
    // },
    // removeForm(index) {
    //   this.form.splice(index, 1);
    //   // this.GAMBAR.splice(index, 1)
    // },

    getKategoriOptions() {
      api.get("kategori/get").then((res) => {
        console.log(res);
        this.kategoriOptions = res.data.data.map((kategori) => ({
          label: kategori.NAMA_KATEGORI,
          value: kategori.IDKATEGORI,
        }));
      });
    },
  },

  created() {
    this.getKategoriOptions();
  },
};
</script>

<style scoped></style>
