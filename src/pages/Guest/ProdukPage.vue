<template>
  <q-page v-if="$q.platform.is.desktop">
    <q-card class="q-pa-md q-ma-md q-gutter-sm row items-center">
      <div class="sort">
        <span class="filter text-subtitle2 text-dark">FILTER</span>
        <div class="justify-start q-gutter-md">
          <q-btn
            color="white"
            text-color="black"
            label="Semua"
            style="width: 100px"
          />
          <q-btn
            color="white"
            text-color="black"
            label="Terbaru"
            style="width: 100px"
            @click="showLatestData"
          />
          <q-btn
            color="white"
            text-color="black"
            label="Terlama"
            style="width: 100px"
            @click="showOldestData"
          />
          <q-btn-dropdown
            color="white"
            text-color="black"
            style="width: 150px"
            align="right"
            label="Harga"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Rendah ke Tinggi</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Tinggi ke Rendah</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </q-card>

    <q-card class="q-pa-md q-ma-md">
      <div class="text-subtitle2 text-dark">PRODUK</div>
      <div class="q-mt-md q-col-gutter-md row items-start">
        <div class="col-2" v-for="(produk, i) in data" :key="i">
          <q-card class="my-card">
            <q-img :src="baseUrl + produk.GAMBAR" />

            <q-card-section>
              <q-btn
                unelevated
                rounded
                disable
                color="orange"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
                >NEW</q-btn
              >

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">{{ produk.NAMA_PRODUK }}</div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                Rp.<strong>{{ produk.HARGA }}</strong
                >・<small>Sample</small>
              </div>
              <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn
                outlined
                color="primary"
                class="pesan-button"
                v-bind:href="'https://wa.me/' + produk.USER_DATA.NO_TELP"
              >
                <q-icon name="mdi-whatsapp" class="q-mr-xs" />
                Pesan
              </q-btn>
              <q-space />
              <div class="text-caption text-grey-6">
                {{ produk.CREATED_AT }}
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      baseUrl: "http://192.168.191.130:5000/images/",
      data: [],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },

  methods: {
    getDataProduk() {
      api.get("produk/get").then((res) => {
        this.data = res.data.data.slice(0, 6);
      });
    },

    sortByCreatedAt() {
      this.data.sort((a, b) => {
        const dateA = new Date(a.CREATED_AT);
        const dateB = new Date(b.CREATED_AT);

        // Sort in descending order (newest first)
        return dateB - dateA;
      });
    },

    showAllData() {
      this.getDataProduk();
    },

    showLatestData() {
      this.sortByCreatedAt(); // Sort the data by CREATED_AT date (newest first)
    },

    showOldestData() {
      this.sortByCreatedAt(); // Sort the data by CREATED_AT date (newest first)
      this.data.reverse(); // Reverse the order to display the oldest first
    },
  },
  mounted() {
    this.getDataProduk();
  },
};
</script>
<style scoped>
.sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter {
  margin-right: 30px;
}
.nunito-font {
  font-family: "nunito";
}
.my-card {
  width: 100%;
  max-width: 350px;
}
.example-item {
  height: 290px;
  width: 290px;
}
.left {
  animation: bounceInLeft;
  animation-duration: 2s;
}
.right {
  animation: bounceInRight;
  animation-duration: 2s;
}
.down {
  animation: bounceInDown;
  animation-duration: 2s;
}
.up {
  animation: bounceInUp;
  animation-duration: 2s;
}
</style>
