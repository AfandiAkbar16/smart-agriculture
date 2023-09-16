<template>
  <q-layout view="hHh Lpr lff">
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="drawer = !drawer"
          class="q-mr-sm"
        />
        <q-separator vertical inset></q-separator>
        <q-toolbar-title> SMART GREENHOUSE </q-toolbar-title>

        <div>Greenhouse v0.0.1</div>
        <q-separator vertical inset class="q-mx-md" />
        <q-btn flat round dense>
          {{ user.NAMA }}
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6 text-center">Profile</q-item-label>
                <q-linear-progress
                  class="q-mb-lg"
                  :value="100"
                  color="grey-4"
                  style="height: 2px"
                />
                <div class="items-center justify-center text-center">
                  <q-btn flat round dense>
                    <q-avatar size="72px">
                      <img src="https://placeimg.com/500/300/nature" />
                    </q-avatar>
                  </q-btn>
                  <q-space />
                  <div class="text-bold items-center text-center">
                    {{ user.IDUSER }}
                  </div>
                  <div class="text-center">{{ user.NAMA }}</div>
                  <q-space />
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="540"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area
        class="fit border"
        :horizontal-thumb-style="{ opacity: 0 }"
      >
        <q-list>
          <q-item v-if="$q.screen.lt.sm">
            <q-item-label class="text-grey-8"> Menu User</q-item-label>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/user/dashboard"
            @click="miniState = true"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/user/tanaman"
            @click="miniState = true"
          >
            <q-item-section avatar>
              <q-icon name="grass" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">Data Tanaman</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/user/alat" @click="miniState = true">
            <q-item-section avatar>
              <q-icon name="construction" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">Data Alat</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/user/settanaman"
            @click="miniState = true"
          >
            <q-item-section avatar>
              <q-icon name="compost" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">Set Tanam</q-item-label>
            </q-item-section>
          </q-item>

          <!-- <q-item
            clickable
            v-ripple
            to="/user/produk"
            @click="miniState = true"
          >
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-bold">Data Produk</q-item-label>
            </q-item-section>
          </q-item> -->
          <div
            style="
              position: absolute;
              bottom: 10px;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              align-items: center;
            "
          >
            <q-separator color="primary" />
            <q-item
              clickable
              v-ripple
              to="/user/profile"
              active-class="bg-primary text-white"
              @click="miniState = true"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section class="text-bold"> Profile </q-item-section>
            </q-item>

            <q-item clickable @click="keluar()">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-bold"> Keluar</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UserLayout",

  components: {},

  data() {
    return {
      drawer: ref(false),
      miniState: ref(true),

      user: this.$q.localStorage.getItem("user"),
    };
  },

  methods: {
    keluar() {
      this.$q.localStorage.clear();
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.border {
  border: 2px solid #21ba45;
  border-top: none;
}
</style>
