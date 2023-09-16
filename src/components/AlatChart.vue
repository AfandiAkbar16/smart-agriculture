<template>
  <div class="q-px-md">
    <q-card class="q-py-sm" bordered>
      <div class="q-py-none flex flex-center"><strong>ALAT</strong></div>
      <div class="flex flex-center row">
        <q-circular-progress
          show-value
          font-size="14px"
          :value="usedPercentage"
          size="100px"
          :thickness="0.4"
          color="green-7"
          track-color="green-2"
          class="q-ma-md"
        >
          {{ totalAlat || 0 }} Alat
        </q-circular-progress>
        <div class="column q-pa-md">
          <div class="q-mt-md">
            <q-badge color="green-7" rounded class="q-mr-sm" />Digunakan:
            {{ alatCounts[2] || 0 }}
          </div>
          <div class="q-mb-sm">
            <q-badge color="green-2" rounded class="q-mr-sm" />Tidak Digunakan:
            {{ alatCounts[1] || 0 }}
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  name: "AlatChart",
  data() {
    return {
      data: [],
      alatCounts: {},
      totalAlat: 0,
      usedPercentage: 0,
    };
  },
  mounted() {
    this.getDataAlat();
  },
  methods: {
    getDataAlat() {
      api.get("alat/get").then((res) => {
        console.log(res.data.data);
        this.data = res.data.data;
        this.countAlatStatus();
        this.calculateUsedPercentage(); // Calculate used percentage
      });
    },
    countAlatStatus() {
      this.alatCounts = this.data.reduce((counts, alat) => {
        if (alat.STATUS in counts) {
          counts[alat.STATUS]++;
        } else {
          counts[alat.STATUS] = 1;
        }
        return counts;
      }, {});

      // Calculate total alat
      this.totalAlat = Object.values(this.alatCounts).reduce(
        (total, count) => total + count,
        0
      );
    },
    calculateUsedPercentage() {
      // Calculate percentage of used alat
      const usedCount = this.alatCounts[2] || 0;
      this.usedPercentage = (usedCount / this.totalAlat) * 100;
    },
  },
};
</script>

<style></style>
