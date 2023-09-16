<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Set Tanam</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="q-gutter-xs">
            <q-badge color="primary"> Data Set Tanam</q-badge>
            <q-input
              label="Media Tanam"
              lazy-rules
              color="primary"
              v-model="MEDIA_TANAM"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Media Tanam isi dengan benar',
              ]"
            >
              <template v-slot:append>
                <q-icon name="title" />
              </template>
            </q-input>

            <q-select
              filled
              v-model="IDTANAMAN"
              :options="tanamanOptions"
              emit-value
              map-options
              color="primary"
              label="Tanaman"
            >
              <template v-slot:no-option> Tidak ada opsi tersedia </template>
              <template v-slot:append>
                <q-icon name="grass" />
              </template>
            </q-select>

            <div class="q-mt-md"></div>

            <div v-for="(setalat, i) in ALAT" :key="i">
              <q-select
                filled
                v-model="setalat.MAC_ADDRESS"
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
              <div class="q-mt-md"></div>
              <div class="col">
                <q-btn
                  outline
                  class="q-mr-sm"
                  icon="delete"
                  color="red"
                  @click="removeForm(i)"
                  v-show="i || (!i && ALAT.length > 1)"
                />
                <q-btn
                  outline
                  icon="add"
                  color="primary"
                  @click="addForm(i)"
                  v-show="i == ALAT.length - 1"
                />
                <div class="q-mt-md"></div>
              </div>
            </div>
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
      MEDIA_TANAM: null,
      IDTANAMAN: null,
      ALAT: [
        {
          MAC_ADDRESS: null,
        },
      ],

      IDUSER: null,
      alatOptions: [],
      tanamanOptions: [],
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        MEDIA_TANAM: this.MEDIA_TANAM,
        IDTANAMAN: this.IDTANAMAN,
        ALAT: this.ALAT.map((item) => ({ MAC_ADDRESS: item.MAC_ADDRESS })),
        IDUSER: this.$q.localStorage.getItem("user").IDUSER,
      };

      api.post(`settanam/input`, formData).then((res) => {
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
          this.$router.push("/user/settanaman");
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

    addForm(index) {
      this.ALAT.push({
        IDALAT: null,
      });
    },

    removeForm(index) {
      this.ALAT.splice(index, 1);
    },
    getAlatOption() {
      api
        .get("alat/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER)
        .then((res) => {
          this.alatOptions = res.data.data.map((alat) => ({
            label: alat.NAMA_ALAT,
            value: alat.MAC_ADDRESS,
          }));
          console.log(this.alatOptions);
        });
    },
    getTanamanOption() {
      api
        .get("tanaman/getbyuser/" + this.$q.localStorage.getItem("user").IDUSER)
        .then((res) => {
          console.log(res);
          this.tanamanOptions = res.data.data.map((tanaman) => ({
            label: tanaman.NAMA_TANAMAN,
            value: tanaman.GUID,
          }));
        });
    },
  },
  created() {
    this.getAlatOption();
    this.getTanamanOption();
  },
};
</script>

<style scoped></style>
