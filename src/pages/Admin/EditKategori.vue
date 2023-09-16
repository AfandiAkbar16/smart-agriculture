<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Ubah Kategori</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            label="Kategori"
            lazy-rules
            color="primary"
            v-model="NAMA_KATEGORI"
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
            v-model="KETERANGAN"
            :rules="[
              (val) => (val !== null && val !== '') || 'Keterangan Dibutuhkan',
            ]"
          >
            <template v-slot:append>
              <q-icon name="info" />
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
  name: "EditKategori",
  data() {
    return {
      NAMA_KATEGORI: null,
      KETERANGAN: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .put(`kategori/edit/${this.$route.params.id}`, {
          NAMA_KATEGORI: this.NAMA_KATEGORI,
          KETERANGAN: this.KETERANGAN,
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
    },
    getKategoriById() {
      api.get(`kategori/get/${this.$route.params.id}`).then((res) => {
        console.log(res.data.data);
        this.NAMA_KATEGORI = res.data.data.NAMA_KATEGORI;
        this.KETERANGAN = res.data.data.KETERANGAN;
      });
    },
  },
  mounted() {
    this.getKategoriById();
  },
};
</script>

<style scoped></style>
