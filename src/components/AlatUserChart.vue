<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col">
        <q-card class="q-mx-md q-py-sm" style="width: 190px" bordered>
          <div class="flex flex-center column">
            <div class="q-py-sm"><strong>ALAT</strong></div>
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
            <div class="q-mt-md">
              <q-badge color="green-7" rounded class="q-mr-sm" />Digunakan
              {{ alatCounts[2] || 0 }}
            </div>
            <div class="q-mb-sm">
              <q-badge color="green-2" rounded class="q-mr-sm" />Tidak
              Digunakan:
              {{ alatCounts[1] || 0 }}
            </div>
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card class="q-mx-md q-py-sm" style="width: 190px" bordered>
          <div class="flex flex-center column">
            <div class="q-py-sm"><strong>USER</strong></div>
            <q-circular-progress
              show-value
              font-size="14px"
              :value="userPercentage"
              size="100px"
              :thickness="0.4"
              color="purple-7"
              track-color="purple-2"
              class="q-ma-md"
            >
              {{ totalUsers || 0 }} Users
            </q-circular-progress>
            <div class="q-mt-md">
              <q-badge color="purple-7" rounded class="q-mr-sm" />Admin:
              {{ userCounts[0] || 0 }}
            </div>
            <div class="q-mb-sm">
              <q-badge color="purple-2" rounded class="q-mr-sm" />Regular Users:
              {{ userCounts[1] || 0 }}
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  name: "AlatUserChart",
  data() {
    return {
      data: [],
      alatCounts: {},
      totalAlat: 0,
      usedPercentage: 0,
      userData: [],
      userCounts: {},
      totalUsers: 0,
      userPercentage: 0,
    };
  },
  mounted() {
    this.getDataAlat();
    this.getUserData();
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
    getUserData() {
      api.get("user/get").then((res) => {
        console.log(res.data.data);
        this.userData = res.data.data;
        this.countUserRoles();
        this.calculateUserPercentage(); // Calculate user percentage
      });
    },
    countUserRoles() {
      this.userCounts = this.userData.reduce((counts, user) => {
        if (user.ROLE in counts) {
          counts[user.ROLE]++;
        } else {
          counts[user.ROLE] = 1;
        }
        return counts;
      }, {});

      // Calculate total users
      this.totalUsers = Object.values(this.userCounts).reduce(
        (total, count) => total + count,
        0
      );
    },
    calculateUserPercentage() {
      // Calculate percentage of users based on their roles
      const adminCount = this.userCounts[0] || 0;
      this.userPercentage = (adminCount / this.totalUsers) * 100;
    },
  },
};
</script>

<style></style>
