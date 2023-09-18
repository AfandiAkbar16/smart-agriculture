<template>
  <q-layout class="bg-primary" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <div class="row q-pt-md q-pb-md bg-white">
                    <div class="col-md-10 offset-2 col-xs-8">
                      <q-img
                        spinner-color="white"
                        placeholder-src="/logo/leaf.png"
                        src="/logo/leaf.png"
                      ></q-img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12 1-pt-md">
                  <div class="q-pa-md">
                    <q-card-section class="text-blue-grey-14">
                      <div class="text-h4">Login Account</div>
                    </q-card-section>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                      <q-input
                        filled
                        v-model="EMAIL"
                        type="email"
                        label="Email"
                        hint="Masukkan Email Anda"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Email tidak boleh kosong',
                        ]"
                      />

                      <q-input
                        v-model="PASSWORD"
                        filled
                        :type="isPwd ? 'password' : 'text'"
                        label="Password"
                        hint="Masukkan Password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Password tidak boleh kosong',
                        ]"
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
                        <q-btn label="Login" type="submit" color="primary" />
                        <q-btn
                          label="Registrasi"
                          to="register"
                          class="q-ml-sm text-primary"
                        />
                      </div>
                    </q-form>
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
  name: "LoginPage",
  data() {
    return {
      isPwd: true,
      EMAIL: null,
      PASSWORD: null,
    };
  },
  methods: {
    onSubmit() {
      api
        .post("user/login", {
          EMAIL: this.EMAIL,
          PASSWORD: this.PASSWORD,
        })
        .then((res) => {
          if (res.data.loginResponse.status) {
            this.$q.notify({
              color: "positive",
              message: res.data.loginResponse.message,
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
            if (res.data.loginResponse.data.user.ROLE == 0) {
              this.$q.localStorage.set(
                "user",
                res.data.loginResponse.data.user
              );
              this.$router.push("/admin/dashboard");
            } else {
              this.$q.localStorage.set(
                "user",
                res.data.loginResponse.data.user
              );
              this.$router.push("/user/dashboard");
            }
          } else {
            this.$q.notify({
              color: "negative",
              message: res.data.loginResponse.message,
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

<style scoped></style>
