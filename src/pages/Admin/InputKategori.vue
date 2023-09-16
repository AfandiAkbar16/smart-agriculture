<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Kategori</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div v-for="(kategori, i) in form" :key="i" class="q-gutter-xs">
            <q-badge color="primary"> Data Kategori</q-badge>
            <q-input
              label="ID Kategori"
              lazy-rules
              color="primary"
              v-model="kategori.IDKATEGORI"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Kategori Barang Harus Diisi',
              ]"
            >
              <template v-slot:append>
                <q-icon name="tag" />
              </template>
            </q-input>

            <q-input
              label="Kategori"
              lazy-rules
              color="primary"
              v-model="kategori.NAMA_KATEGORI"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Kategori Barang Harus Diisi',
              ]"
            >
              <template v-slot:append>
                <q-icon name="category" />
              </template>
            </q-input>

            <q-input
              label="Keterangan"
              lazy-rules
              color="primary"
              v-model="kategori.KETERANGAN"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Keterangan Dibutuhkan',
              ]"
            >
              <template v-slot:append>
                <q-icon name="info" />
              </template>
            </q-input>
            <div class="col">
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
            </div>
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

// const model = () => {
//   return {
//     IDKATEGORI: null,
//     KATEGORI_BARANG: [{
//         NAMA_KATEGORI: null,
//         keterangan: null,
//     }]
//   }
// }

export default {
  name: "InputKategori",
  data() {
    return {
      // form: model(),
      form: [
        {
          IDKATEGORI: null,
          NAMA_KATEGORI: null,
          KETERANGAN: null,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.form.KATEGORI_BARANG)
      console.log(this.form);
      this.create();

      //   api.post("kategori/input", {
      //     NAMA_KATEGORI: this.form.KATEGORI_BARANG,
      //     keterangan: this.form.KATEGORI_BARANG
      //   })
      //     .then((res) => {
      //       console.log(res)
      //       if (res.data.status) {
      //         this.$q.notify({
      //           color: "negative",
      //           message: res.data.msg,
      //           icon: 'close',
      //         });
      //       } else {
      //         this.$q.notify({
      //           color: "positive",
      //           message: res.data.msg,
      //           icon: 'close',
      //         });
      //         this.$router.push("kategori");
      //       }
      //     });
    },
    create: async function () {
      const data = this.form;
      data.IDKATEGORI = this.IDKATEGORI;
      data.NAMA_KATEGORI = this.NAMA_KATEGORI;
      data.KETERANGAN = this.KETERANGAN;

      // data.KATEGORI_BARANG = data.KATEGORI_BARANG.map(r => {
      //   return {
      //     NAMA_KATEGORI: r.NAMA_KATEGORI,
      //     KETERANGAN: r.KETERANGAN
      //   }
      // })
      await api.post("kategori/input", data).then((res) => {
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
          this.$router.push("/admin/kategori");
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

      // .then((res) => {
      // if (!this.$parseResponse(res.data)) {
      //   this.$succesNotif(res.data.message)
      //   this.$router.push({nama: '/kategori'})
      //     }
      //   })
    },
    addForm(index) {
      this.form.push({
        IDKATEGORI: null,
        NAMA_KATEGORI: null,
        KETERANGAN: null,
      });
    },
    removeForm(index) {
      this.form.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
