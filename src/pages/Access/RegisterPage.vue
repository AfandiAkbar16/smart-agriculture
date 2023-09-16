<template>
  <q-layout class="bg-primary" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12 q-pt-xs">
                  <q-card-section class="text-primary">
                    <div class="text-h4">Registrasi</div>
                  </q-card-section>
                  <div class="q-pa-md">
                    <q-form @submit="onSubmit" class="q-gutter-md">
                      <!-- <q-input
                        filled
                        v-model="IDUSER"
                        label="IDUSER"
                        hint="Masukkan ID"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Username tidak boleh kosong',
                        ]"
                      /> -->

                      <q-input
                        class="q-mt-auto"
                        filled
                        v-model="NAMA"
                        label="Nama Lengkap"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Nama tidak boleh kosong',
                        ]"
                      />

                      <q-input
                        class="q-mt-auto"
                        filled
                        v-model="EMAIL"
                        label="Email"
                        type="email"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Email tidak boleh kosong',
                        ]"
                      />

                      <q-input
                        class="q-mt-auto"
                        filled
                        v-model="ALAMAT"
                        label="Alamat"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Alamat tidak boleh kosong',
                        ]"
                      />

                      <q-input
                        class="q-mt-auto"
                        filled
                        v-model="NO_TELP"
                        label="No Telpon"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'No Telepon tidak boleh kosong',
                        ]"
                      />

                      <q-input
                        class="q-mt-auto"
                        v-model="PASSWORD"
                        filled
                        :type="isPwd ? 'password' : 'text'"
                        label="Password"
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
                        class="q-mt-md"
                        v-model="CONFPASSWORD"
                        filled
                        :type="isPwd ? 'password' : 'text'"
                        label="Konfirmasi Password"
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

                      <div>
                        <q-btn
                          label="Registrasi"
                          type="submit"
                          color="primary"
                        />
                        <q-btn
                          label="Login"
                          to="login"
                          class="q-ml-sm text-primary"
                        />
                      </div>
                    </q-form>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="col-md-10 col-xs-6">
                    <div style="padding-top: 90px">
                      <q-img
                        spinner-color="white"
                        placeholder-src="/logo/leaf.png"
                        src="/logo/leaf.png"
                      ></q-img>
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";
// import { useQuasar } from "quasar";
// import { ref } from "vue";

export default defineComponent({
  name: "RegisterPage",
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
      ROLE: "2",
    };
  },
  methods: {
    onSubmit() {
      // if (this.PASSWORD !== this.CONFPASSWORD) {
      //   this.$q.notify({
      //     color: 'negative',
      //     message: "Konfirmasi Password Anda",
      //     icon: 'close',
      //   })
      // }
      api
        .post("user/input", {
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
          // console.log(res)
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
            this.$router.push("login");
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
});
</script>

<style scoped>
.kartuku {
  justify-content: center;
  align-items: center;
}
@media (max-width: 767px) {
  .col-xs-6 {
    display: none; /* Sembunyikan elemen gambar saat lebar layar kurang dari 768 piksel */
  }
}
</style>
