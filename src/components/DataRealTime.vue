<template>
  <div>
    <h1>Data Real-time dari Socket.IO</h1>
    <pre>
      <code>{{ realTimeDataFormatted }}</code>
    </pre>
    <Dashboard :tool="realTimeData.ALAT_DATA" />
  </div>
</template>

<script>
import io from "socket.io-client";
import Dashboard from "src/pages/user/Dashboard.vue";
import { worker } from "src/boot/axios";

export default {
  components: {
    Dashboard,
  },
  data() {
    return {
      realTimeData: {},
    };
  },
  computed: {
    realTimeDataFormatted() {
      return JSON.stringify(this.realTimeData, null, 2);
    },
  },
  created() {
    this.initializeSocketIO();
  },
  methods: {
    initializeSocketIO() {
      const socket = io(worker);

      const sendMessage = () => {
        socket.emit("send_message", { IDUSER: "IDuser1" });
      };

      socket.on("dataUpdate", (data) => {
        this.realTimeData = data;
        // console.log(data)
      });

      this.interval = setInterval(() => {
        sendMessage();
      }, 1000);
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
