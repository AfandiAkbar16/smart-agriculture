<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card class="bg-white q-pa-md q-ma-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Alat</span>
      </span>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-badge color="primary"> Data Alat</q-badge>
          <q-input
            label="MAC Address "
            lazy-rules
            color="primary"
            v-model="MAC_ADDRESS"
            :rules="[
              (val) => (val !== null && val !== '') || 'MAC Address Dibutuhkan',
            ]"
          >
          </q-input>

          <q-input
            label="Nama Alat "
            lazy-rules
            color="primary"
            v-model="NAMA_ALAT"
            :rules="[
              (val) => (val !== null && val !== '') || 'Nama Alat Dibutuhkan',
            ]"
          >
          </q-input>

          <q-select
            v-model="TYPE"
            :options="typeOptions"
            emit-value
            map-options
            color="primary"
            label="Type"
          >
            <template v-slot:no-option> Tidak ada opsi tersedia </template>
            <template v-slot:append>
              <q-icon name="tag" />
            </template>
          </q-select>

          <!-- <div class="col">
              <q-btn
                outline
                class="q-mr-sm"
                icon="delete"
                color="red"
                @click="removeForm(i)"
                v-show="i || (!i && form.length > 1)"
              />
              <q-btn
                outline
                icon="add"
                color="primary"
                @click="addForm(i)"
                v-show="i == form.length - 1"
              />
            </div> -->

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
// import { defineComponent } from "vue";
import { api } from "src/boot/axios";
// import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      MAC_ADDRESS: null,
      NAMA_ALAT: null,
      DATA_SENSOR: null,

      TYPE: null,
      typeOptions: [
        { label: "Aktuator", value: "1" },
        { label: "Sensor", value: "2" },
      ],
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        MAC_ADDRESS: this.MAC_ADDRESS,
        NAMA_ALAT: this.NAMA_ALAT,
        DATA_SENSOR: this.DATA_SENSOR,
        TYPE: this.TYPE,
      };
      console.log(formData);

      api.post(`alat/input`, formData).then((res) => {
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
          this.$router.push("/admin/alat");
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
