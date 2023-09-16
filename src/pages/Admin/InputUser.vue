<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-sm">
        <span class="text-blue-grey-14">Tambah Data User</span>
      </span>
      <div class="q-pa-sm">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data User</q-badge>
            <q-input
              label="Nama Lengkap"
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
              v-model="PASSWORD"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              hint="Masukkan Password"
              lazy-rules
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
              v-model="CONFPASSWORD"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Konfirmasi Password"
              hint="Masukkan Password"
              lazy-rules
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
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
      isPwd: true,
      IDUSER: null,
      NAMA: null,
      EMAIL: null,
      ALAMAT: null,
      NO_TELP: null,
      PASSWORD: null,
      CONFPASSWORD: null,
      ROLE: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .post(`user/input`, {
          IDUSER: this.IDUSER,
          NAMA: this.NAMA,
          EMAIL: this.EMAIL,
          ALAMAT: this.ALAMAT,
          NO_TELP: this.NO_TELP,
          PASSWORD: this.PASSWORD,
          CONFPASSWORD: this.CONFPASSWORD,
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
          }
        });
    },
    // getUserById() {
    //   api.get(`user/get/${this.$route.params.id}`).then((res) => {
    //     console.log(res.data);
    //     this.NAMA = res.data.data.NAMA;
    //     this.EMAIL = res.data.data.EMAIL;
    //     this.ALAMAT = res.data.data.ALAMAT;
    //     this.NO_TELP = res.data.data.NO_TELP;
    //     this.ROLE = res.data.data.ROLE;
    //   });
    // },
  },
  // mounted() {
  //   this.getUserById();
  // },
};
</script>

<style scoped></style>
