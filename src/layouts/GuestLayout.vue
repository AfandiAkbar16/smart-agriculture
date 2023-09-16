<template>
  <q-layout view="lHh Lpr lFf" v-if="$q.platform.is.desktop">
    <q-header
      reveal
      class="text-positive q-pl-lg q-pr-lg q-pt-md q-pb-md"
      style="background: rgba(255, 255, 255)"
    >
      <q-toolbar>
        <div class="text-h4 text-weight-bolder text-primary">
          Greenhouse UBL
        </div>
        <q-space />
        <div class="q-pl-md q-pr-md">
          <q-btn flat class="text-green" no-caps label="Dashboard" to="/" />
          <!-- <q-btn flat class="text-green" no-caps label="Produk" to="/product" /> -->
          <q-btn flat class="text-green" no-caps label="Tentang Kami" />
        </div>
        <q-card class="q-pl-md q-pr-md q-ml-md">
          <q-btn flat class="text-green" no-caps label="Masuk" to="/login" />
        </q-card>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-green-1">
      <router-view />
    </q-page-container>

    <q-card class="my-card text-dark q-px-xl q-pt-md q-pb-sm bg-grey-3">
      <div class="text-primary q-mt-md q-col-gutter-md row items-start">
        <div class="col-3">
          <div class="text-h5 text-weight-bold">Smart Greenhouse</div>
          <div class="text-caption q-mt-sm">
            Smart Greenhouse merupakan sebuah layanan yang bergerak untuk
            membantu permasalahan pertanian, menyedia teknologi dukungan untuk
            dunia pertanian serta menyediakan wadah transaksional produk
            pertanian.
          </div>
          <div class="q-pt-sm">
            <q-icon name="mdi-facebook" size="md" color="primary" />
            <q-icon name="mdi-instagram" size="md" color="primary" />
            <q-icon name="mdi-twitter" size="md" color="primary" />
          </div>
        </div>

        <div class="col-3 q-ml-xl">
          <div class="text-h6 text-weight-medium">KONTAK INFORMASI</div>
          <div class="text-caption row q-mt-sm flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="primary" icon="person_pin" />
            </div>
            <div class="col">
              Jl. ZA. Pagar Alam No.89, Gedong Meneng, Kec. Rajabasa, Kota
              Bandar Lampung, Lampung 35142
            </div>
          </div>
          <div class="text-caption row flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="primary" icon="call" />
            </div>
            <div class="col">0821-8560-7040</div>
          </div>
          <div class="text-caption row flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="primary" icon="email" />
            </div>
            <div class="col">Gemeter@mail.com</div>
          </div>
        </div>
      </div>
      <div class="text-primary q-mt-lg">
        <q-separator color="primary" />
        <div class="q-mt-lg q-mb-md flex flex-center">
          © Copyright 2023, GEMETER.
        </div>
      </div>
    </q-card>
  </q-layout>
</template>

<script>
// import Lottie from "./../components/lottie.vue";
// import * as animationDataAs from "./../../public/lottie/header.json";
export default {
  name: "MainLayout",
  data() {
    return {
      drawerRight: false,
      // defaultOptionsHeader: { animationData: animationDataAs.default },
      // animationSpeed: 2,
    };
  },
};
</script>
