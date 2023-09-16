<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <div class="profile-picture-container">
        <q-img
          src="/logo/profile.png"
          alt="Profile Image"
          class="profile-picture"
        />
      </div>
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Profile</span>
      </span>
      <div class="q-pa-md">
        <q-form class="q-gutter-md">
          <q-input
            label="Nama"
            color="primary"
            v-model="NAMA"
            :readonly="!isEditMode"
          >
            <template v-slot:append>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            label="E-Mail"
            color="primary"
            v-model="EMAIL"
            :readonly="!isEditMode"
          >
            <template v-slot:append>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            label="No Handphone"
            color="primary"
            v-model="NO_TELP"
            :readonly="!isEditMode"
          >
            <template v-slot:append>
              <q-icon name="phone" />
            </template>
          </q-input>

          <q-input
            label="Alamat"
            color="primary"
            v-model="ALAMAT"
            :readonly="!isEditMode"
          >
            <template v-slot:append>
              <q-icon name="location_on" />
            </template>
          </q-input>
        </q-form>
      </div>
      <div class="q-mt-md">
        <q-btn
          label="Edit"
          color="primary"
          @click="enableEditMode"
          v-if="!isEditMode"
        />
        <q-btn
          label="Save"
          color="primary"
          @click="saveProfile"
          v-else
          class="q-mr-sm"
        />
        <q-btn
          label="Cancel"
          color="primary"
          @click="cancelEdit"
          v-if="isEditMode"
          class="q-ml-sm"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  data() {
    return {
      NAMA: null,
      EMAIL: null,
      NO_TELP: null,
      ALAMAT: null,
      isEditMode: false,
      originalData: {},
    };
  },
  mounted() {
    // Call the API to fetch user profile data
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      // Make an API request to fetch the user profile data
      api
        .get("user/get/" + this.$q.localStorage.getItem("user").IDUSER)
        .then((res) => {
          console.log(res.data);
          // Update the data properties with the fetched profile information
          const { NAMA, EMAIL, NO_TELP, ALAMAT } = res.data.data;
          this.NAMA = NAMA;
          this.EMAIL = EMAIL;
          this.NO_TELP = NO_TELP;
          this.ALAMAT = ALAMAT;
          this.originalData = { NAMA, EMAIL, NO_TELP, ALAMAT };
        })
        .catch((error) => {
          console.error(error);
          this.$q.notify({
            color: "negative",
            message: "Failed to fetch profile information.",
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
        });
    },
    enableEditMode() {
      this.isEditMode = true;
    },
    saveProfile() {
      // Make an API request to update the user profile data
      api
        .put("user/update/" + this.$q.localStorage.getItem("user").IDUSER, {
          NAMA: this.NAMA,
          EMAIL: this.EMAIL,
          NO_TELP: this.NO_TELP,
          ALAMAT: this.ALAMAT,
        })
        .then((res) => {
          // Update the data properties and exit edit mode
          const { NAMA, EMAIL, NO_TELP, ALAMAT } = res.data.data;
          this.NAMA = NAMA;
          this.EMAIL = EMAIL;
          this.NO_TELP = NO_TELP;
          this.ALAMAT = ALAMAT;
          this.isEditMode = false;

          this.$q.notify({
            color: "positive",
            message: "Profile updated successfully.",
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
        })
        .catch((error) => {
          console.error(error);
          this.$q.notify({
            color: "negative",
            message: "Failed to update profile.",
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
        });
    },
    cancelEdit() {
      // Restore the original data and exit edit mode
      this.NAMA = this.originalData.NAMA;
      this.EMAIL = this.originalData.EMAIL;
      this.NO_TELP = this.originalData.NO_TELP;
      this.ALAMAT = this.originalData.ALAMAT;
      this.isEditMode = false;
    },
  },
});
</script>

<style scoped>
.profile-picture-container {
  display: flex;
  justify-content: center;
}

.profile-picture {
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
}
</style>
