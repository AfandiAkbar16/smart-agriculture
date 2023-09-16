<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Alat</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Alat</q-badge>
            <q-input
              label="Mac Address"
              lazy-rules
              color="primary"
              v-model="MAC_ADDRESS"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Mac Address Untuk tambah alat',
              ]"
            >
            </q-input>
          </div>

          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="Tambah Alat"
              style="height: 50px"
              color="primary"
            />
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>
y

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      MAC_ADDRESS: null,
      IDUSER: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .put(`alat/aktif/`, {
          MAC_ADDRESS: this.MAC_ADDRESS,
          IDUSER: this.$q.localStorage.getItem("user").IDUSER,
        })
        .then((res) => {
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
            this.$router.push("/user/alat");
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
