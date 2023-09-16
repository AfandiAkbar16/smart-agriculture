<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Set Data alat</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Set Alat</q-badge>
            <q-select
              v-model="MAC_ADDRESS"
              :options="alatOptions"
              emit-value
              map-options
              color="primary"
              label="Sensor"
            >
              <template v-slot:no-option> Tidak ada opsi tersedia </template>
              <template v-slot:append>
                <q-icon name="sensors" />
              </template>
            </q-select>

            <!-- <div class="q-mt-md waktu-jangkawaktu" v-if="NAMA_ALAT === 'Time'">
              <div v-for="(setalat, i) in DATA_SENSOR" :key="i">
                <div class="row items-center">
                  <q-input
                    label="Time"
                    lazy-rules
                    color="primary"
                    v-model="setalat.DATA"
                    type="time"
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Waktu Set Harus Di isi',
                    ]"
                    class="time-input"
                  >
                  </q-input>

                  <q-input
                    filled
                    label="Jangka Waktu"
                    lazy-rules
                    color="primary"
                    v-model="INTERVAL"
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Waktu interval harus di isi',
                    ]"
                    class="time-input q-ml-md"
                  ></q-input>
                  <div class="col">
                    <q-btn
                      outline
                      class="q-mr-sm"
                      icon="delete"
                      color="red"
                      @click="removeForm(i)"
                      v-show="i || (!i && DATA_SENSOR.length > 1)"
                    />
                    <q-btn
                      outline
                      icon="add"
                      color="primary"
                      @click="addForm(i)"
                      v-show="i == DATA_SENSOR.length - 1"
                    />
                  </div>
                </div>
              </div>
            </div> -->

            <div class="q-mt-md row items-center">
              <q-input
                filled
                label="Minimal"
                lazy-rules
                color="primary"
                v-model="DATA_SENSOR.MIN"
                type="number"
                step="any"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Nilai Minimal harus di isi',
                ]"
                class="time-input"
              >
              </q-input>

              <q-input
                filled
                label="Maksimal"
                lazy-rules
                color="primary"
                v-model="DATA_SENSOR.MAX"
                type="number"
                step="any"
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Nilai Maksimal harus di isi',
                ]"
                class="time-input q-ml-md"
              ></q-input>
            </div>
            <div class="q-pt-md">
              <q-btn label="Submit" color="primary" type="submit" />
            </div>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      MAC_ADDRESS: null,
      DATA_SENSOR: {
        MIN: 0,
        MAX: 0,
      },
      IDUSER: null,
      alatOptions: [],
    };
  },

  methods: {
    onSubmit() {
      const formData = {
        MAC_ADDRESS: this.MAC_ADDRESS,
        DATA_SENSOR: (this.DATA_SENSOR = {
          MIN: parseFloat(this.DATA_SENSOR.MIN),
          MAX: parseFloat(this.DATA_SENSOR.MAX),
        }),

        IDUSER: this.$q.localStorage.getItem("user").IDUSER,
      };

      api.post(`setalat/input`, formData).then((res) => {
        // console.log(res);
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
          this.$router.push("/user/dashboard");
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
    getSetAlatByUser() {
      api.get(`/alat/get/${this.$route.params.id}`).then((res) => {
        console.log(res);
        this.alatOptions = [
          {
            label: res.data.data.NAMA_ALAT,
            value: res.data.data.MAC_ADDRESS,
          },
        ];
        console.log(this.alatOptions);
      });
    },
    getSetDataAlatId() {
      api.get(`/alat/get/${this.$route.params.id}`).then((res) => {
        this.MAC_ADDRESS = res.data.data.MAC_ADDRESS;
      });
    },

    // getAlatOption() {
    //   api.get(`alat/getbyuser/${this.$route.params.id}`).then((res) => {
    //     // console.log(res);
    //     this.alatOptions = res.data.data.map((alat) => ({
    //       label: alat.NAMA_ALAT,
    //       value: alat.MAC_ADDRESS,
    //     }));
    //     console.log(this.alatOptions);
    //   });
    // },
  },

  created() {
    // this.getAlatOption();
    this.getSetAlatByUser();
    this.getSetDataAlatId();
  },
};
</script>

<style scoped>
.time-input {
  width: 200px;
}
</style>
