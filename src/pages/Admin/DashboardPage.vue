<template>
  <q-page>
    <div v-if="$q.screen.xs || $q.screen.sm">
      <div class="q-pa-md">
        <q-card>
          <div class="q-pa-md">
            <div class="column">
              <div class="row">
                <div class="col-6 text-h6">Dashboard</div>
                <div class="col-6">
                  <p class="text-right text-h6" style="margin: 0">
                    <strong>
                      {{ currentedTime }}
                    </strong>
                  </p>

                  <p class="text-right text-caption" style="margin: 0">
                    <strong>
                      {{ dateFormated }}
                    </strong>
                  </p>
                </div>
              </div>
              <div class="col-12">
                <q-carousel
                  class="caro"
                  animated
                  v-model="slide"
                  navigation
                  infinite
                  :autoplay="autoplay"
                  arrows
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  @mouseenter="autoplay = false"
                  @mouseleave="autoplay = true"
                >
                  <q-carousel-slide
                    :name="1"
                    img-src="https://img.freepik.com/free-photo/seedlings-planting-tray_1150-23158.jpg?w=740&t=st=1660399575~exp=1660400175~hmac=4906859723bb91d81f4c"
                  />
                  <q-carousel-slide
                    :name="2"
                    img-src="https://img.freepik.com/premium-photo/boldo-leaf-garden-rio-de-janeiro-brazil_63139-2000.jpg?w=740"
                  />
                  <q-carousel-slide
                    :name="3"
                    img-src="https://img.freepik.com/premium-photo/beautiful-tropical-garden-long-shot_23-2148245256.jpg?w=740"
                  />
                  <q-carousel-slide
                    :name="4"
                    img-src="https://img.freepik.com/premium-photo/top-view-composition-plants-pots_23-2148509902.jpg?w=740"
                  />
                </q-carousel>
              </div>
              <div class="column">
                <div class="q-pt-lg col-12 flex flex center">
                  <div class="item-start">
                    <div class="row">
                      <q-card flat class="q-py-none q-pr-none q-pl-sm row">
                        <div class="q-pt-md">
                          <UserChart />
                        </div>
                        <div class="q-py-md">
                          <AlatChart />
                        </div>
                      </q-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="q-pa-lg text-grey-9 text-h5 text-center flex flex-center"
              style="padding-top: 60px"
            >
              WELCOME TO GREENHOUSE UBL
            </div>
            <div></div>
          </div>
        </q-card>
      </div>
    </div>

    <div v-if="$q.screen.md || $q.screen.lg || $q.screen.xl">
      <div class="q-pa-md">
        <q-card>
          <div class="q-pa-md">
            <div class="row">
              <div class="col-8">
                <q-carousel
                  animated
                  v-model="slide"
                  navigation
                  infinite
                  :autoplay="autoplay"
                  arrows
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  @mouseenter="autoplay = false"
                  @mouseleave="autoplay = true"
                >
                  <q-carousel-slide
                    :name="1"
                    img-src="https://img.freepik.com/free-photo/seedlings-planting-tray_1150-23158.jpg?w=740&t=st=1660399575~exp=1660400175~hmac=4906859723bb91d81f4c"
                  />
                  <q-carousel-slide
                    :name="2"
                    img-src="https://img.freepik.com/premium-photo/boldo-leaf-garden-rio-de-janeiro-brazil_63139-2000.jpg?w=740"
                  />
                  <q-carousel-slide
                    :name="3"
                    img-src="https://img.freepik.com/premium-photo/beautiful-tropical-garden-long-shot_23-2148245256.jpg?w=740"
                  />
                  <q-carousel-slide
                    :name="4"
                    img-src="https://img.freepik.com/premium-photo/top-view-composition-plants-pots_23-2148509902.jpg?w=740"
                  />
                </q-carousel>
              </div>
              <div class="q-pl-lg col-4">
                <div class="item-start">
                  <div class="row">
                    <q-card flat class="q-py-none q-pr-none q-pl-sm">
                      <div class="row">
                        <p class="col-4 text-start">
                          <strong class="flex flex-center">
                            <q-icon class="q-pr-xs" name="schedule" />
                            {{ currentTime }}
                          </strong>
                        </p>

                        <p class="col-8 text-center">
                          <strong class="flex flex-center">
                            <q-icon class="q-pr-xs" name="today" />
                            {{ formattedDate }}
                          </strong>
                        </p>
                      </div>
                      <div class="q-pt-none">
                        <UserChart />
                      </div>
                      <div class="q-py-md">
                        <AlatChart />
                      </div>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="q-pa-lg text-grey-9 text-h4 flex flex-center"
              style="padding-top: 60px"
            >
              WELCOME TO GREENHOUSE UBL
            </div>
            <div></div>
          </div>
        </q-card>
      </div>
    </div>

    <!-- <q-card class="q-pa-md q-ma-md">
      <div class="text-subtitle2 text-dark">PRODUK</div>
      <div class="row q-mt-md q-col-gutter-md item-start">
        <div class="col-2" v-for="(produk, i) in data" :key="i">
          <q-card class="my-card" flat>
            <q-img :src="baseUrl + produk.GAMBAR" :ratio="1" />

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
    </q-card> -->
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
// import AlatUserChart from "src/components/AlatUserChart.vue";
import AlatChart from "src/components/AlatChart.vue";
import UserChart from "src/components/UserChart.vue";

export default {
  name: "DashboardPage",
  components: {
    AlatChart,
    UserChart,
  },
  data() {
    return {
      selectedDate: new Date(),
      currentTime: this.formatTime(new Date()),
      currentedTime: this.timeFormat(new Date()),
      slide: 1,
      autoplay: true,
    };
  },
  mounted() {
    // Set interval to update time every second
    this.updateTime();
    this.interval = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    // Clear interval when component is destroyed
    clearInterval(this.interval);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = this.formatTime(now);
      this.currentedTime = this.timeFormat(now);
    },
    formatTime(dateTime) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",

        second: "2-digit",
        hour12: false, // Menggunakan format 24 jam
      };
      const formattedTime = new Date(dateTime).toLocaleTimeString(
        undefined,
        options
      );

      // Ubah 24 menjadi 00
      if (formattedTime.startsWith("24:")) {
        return formattedTime.replace("24:", "00:");
      }

      return formattedTime;
    },
    timeFormat(dateTime) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Menggunakan format 24 jam
      };
      const formattedTime = new Date(dateTime).toLocaleTimeString(
        undefined,
        options
      );

      // Ubah 24 menjadi 00
      if (formattedTime.startsWith("24:")) {
        return formattedTime.replace("24:", "00:");
      }

      return formattedTime;
    },
  },
  computed: {
    formattedDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(this.selectedDate).toLocaleDateString("id-ID", options);
    },
    dateFormated() {
      const options = {
        weekday: "short",
        month: "numeric",
        day: "numeric",
      };
      return new Date(this.selectedDate).toLocaleDateString("id-ID", options);
    },
  },
};
</script>

<style>
.border {
  border: 2px solid #21ba45;
}
/* .my-card {
  width: 160px;
  padding: 10px;
} */
.my-card {
  width: 100%;
  max-width: 350px;
}
.kartuku {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.caro {
  max-width: 100%;
  height: 200px;
}
</style>
