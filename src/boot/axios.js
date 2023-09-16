import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

// const api = axios.create({ baseURL: "http://localhost:5000/" });
// const worker = axios.create({ baseURL: "http://localhost:3001/" });
//Posko
// const api = axios.create({ baseURL: "http://192.168.18.118:5000/" });

//Aldi
// const api = axios.create({ baseURL: "http://192.168.1.2:5000/" });

//GUA
// const api = axios.create({ baseURL: "http://192.168.123.143:3000/" });
// const worker = axios.create({ baseURL: "http://192.168.123.143:3001/" });

//Kampus
// const api = axios.create({ baseURL: "http://192.168.7.17:3000/" });
// const worker = axios.create({ baseURL: "http://192.168.7.17:3001/" });

// Zerotier;
const api = axios.create({ baseURL: "https://backend-tes.up.railway.app/" });
const worker = axios.create({ baseURL: "http://192.168.191.130:3001/" });

// const api2 = axios.create({ baseURL: "http://192.168.191.130:6060/" });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = worker;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, worker };
