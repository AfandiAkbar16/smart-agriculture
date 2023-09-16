<template>
  <div class="q-px-md">
    <q-card class="q-py-sm" bordered>
      <div class="q-py-none flex flex-center"><strong>USER</strong></div>
      <div class="flex flex-center row">
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
        <div class="column q-pa-md">
          <div class="q-mt-md">
            <q-badge color="purple-7" rounded class="q-mr-sm" />Admin:
            {{ userCounts[0] || 0 }}
          </div>
          <div class="q-mb-sm">
            <q-badge color="purple-2" rounded class="q-mr-sm" />Regular Users:
            {{ userCounts[1] || 0 }}
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  name: "UserChart",
  data() {
    return {
      userData: [],
      userCounts: {},
      totalUsers: 0,
      userPercentage: 0,
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
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
