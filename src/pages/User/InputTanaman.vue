<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Tanaman</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Tanaman</q-badge>

            <q-input
              label="Nama Tanaman"
              lazy-rules
              color="primary"
              v-model="NAMA_TANAMAN"
              :rules="[
                (val) => (val !== null && val !== '') || 'Nama Dibutuhkan',
              ]"
            >
              <template v-slot:append>
                <q-icon name="title" />
              </template>
            </q-input>

            <q-input
              label="Jenis Tanaman"
              lazy-rules
              color="primary"
              v-model="JENIS_TANAMAN"
              :rules="[
                (val) => (val !== null && val !== '') || 'Harga Dibutuhkan',
              ]"
            >
              <template v-slot:append>
                <q-icon name="tag" />
              </template>
            </q-input>

            <!-- <q-select
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
            </q-select> -->

            <!-- <q-file
              accept=".jpg, image/*"
              color="teal"
              filled
              v-model="GAMBAR"
              label="Upload Gambar"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file> -->
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
      NAMA_TANAMAN: null,
      JENIS_TANAMAN: null,
      IDUSER: null,
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
      const formData = {
        NAMA_TANAMAN: this.NAMA_TANAMAN,
        JENIS_TANAMAN: this.JENIS_TANAMAN,
        DESKRIPSI: this.DESKRIPSI,
        IDUSER: this.$q.localStorage.getItem("user").IDUSER,
      };

      api.post(`tanaman/input`, formData).then((res) => {
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
          this.$router.push("/user/tanaman");
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
};
</script>

<style scoped></style>
