<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Ubah Data User</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data User</q-badge>
            <q-input
              label="NAMA"
              lazy-rules
              color="primary"
              v-model="NAMA"
              :rules="[
                (val) => (val !== null && val !== '') || 'Isi Nama Lengkap',
              ]"
            >
              <template v-slot:append>
                <q-icon name="title" />
              </template>
            </q-input>

            <q-input
              label="Email"
              lazy-rules
              color="primary"
              v-model="EMAIL"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Isi Email dengan Benar',
              ]"
            >
              <template v-slot:append>
                <q-icon name="alternate_email" />
              </template>
            </q-input>

            <q-input
              label="Alamat"
              lazy-rules
              color="primary"
              v-model="ALAMAT"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Isi Alamat dengan Benar',
              ]"
            >
              <template v-slot:append>
                <q-icon name="home" />
              </template>
            </q-input>

            <q-input
              label="No Telpon"
              lazy-rules
              color="primary"
              v-model="NO_TELP"
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'No Telpon Harus Diisi',
              ]"
            >
              <template v-slot:append>
                <q-icon name="contact_phone" />
              </template>
            </q-input>

            <q-input
              label="Role"
              lazy-rules
              color="primary"
              v-model="ROLE"
              hint="0 = Admin | 1 = User"
              :rules="[
                (val) => (val !== null && val !== '') || 'Role Harus Diisi',
              ]"
            >
              <template v-slot:append>
                <q-icon name="perm_identity" />
              </template>
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
      NAMA: null,
      EMAIL: null,
      ALAMAT: null,
      NO_TELP: null,
      ROLE: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .put(`user/edit/${this.$route.params.id}`, {
          NAMA: this.NAMA,
          EMAIL: this.EMAIL,
          ALAMAT: this.ALAMAT,
          NO_TELP: this.NO_TELP,
          ROLE: this.ROLE,
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
            this.$router.push("/admin/datauser");
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
            this.$router.push("/admin/datauser");
          }
        });
    },
    getUserById() {
      api.get(`user/get/${this.$route.params.id}`).then((res) => {
        console.log(res.data);
        this.NAMA = res.data.data.NAMA;
        this.EMAIL = res.data.data.EMAIL;
        this.ALAMAT = res.data.data.ALAMAT;
        this.NO_TELP = res.data.data.NO_TELP;
        this.ROLE = res.data.data.ROLE;
      });
    },
  },
  mounted() {
    this.getUserById();
  },
};
</script>

<style scoped></style>
