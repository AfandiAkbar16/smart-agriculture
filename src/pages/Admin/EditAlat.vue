<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Ubah Data Alat</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Alat</q-badge>
            <q-input
              label="MAC Address "
              lazy-rules
              color="primary"
              v-model="MAC_ADDRESS"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'MAC Address Dibutuhkan',
              ]"
            >
              <template v-slot:append>
                <q-icon name="title" />
              </template>
            </q-input>

            <!-- <q-input
            label="Nama Alat"
            lazy-rules
            color="primary"
            v-model="NAMA_ALAT"
            :rules="[
            val => val !== null && val !== '' || 'Nama Alat Dibutuhkan'
            ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input> -->

            <q-input
              label="Nama Alat "
              lazy-rules
              color="primary"
              v-model="NAMA_ALAT"
              :rules="[
                (val) => (val !== null && val !== '') || 'Nama Alat Dibutuhkan',
              ]"
            >
            </q-input>
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
      MAC_ADDRESS: null,
      NAMA_ALAT: null,
      DATA_SENSOR: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .put(`alat/edit/${this.$route.params.id}`, {
          MAC_ADDRESS: this.MAC_ADDRESS,
          NAMA_ALAT: this.NAMA_ALAT,
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
            this.$router.push("/admin/alat");
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
    getAlatById() {
      api.get(`alat/get/${this.$route.params.id}`).then((res) => {
        console.log(res.data);
        this.MAC_ADDRESS = res.data.data.MAC_ADDRESS;
        this.NAMA_ALAT = res.data.data.NAMA_ALAT;
        this.DATA_SENSOR = res.data.data.DATA_SENSOR;
      });
    },
  },
  mounted() {
    this.getAlatById();
  },
};
</script>

<style scoped></style>
