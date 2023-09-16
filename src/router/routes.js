const routes = [
  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Guest/GuestPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/ProductLayout.vue"),
    children: [
      {
        path: "product",
        component: () => import("pages/Guest/ProdukPage.vue"),
      },
      {
        path: "produkkategori/:id",
        component: () => import("pages/Guest/ProdukbyKategori.vue"),
      },
      {
        path: "tes",
        component: () => import("pages/Guest/TestAsu.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LoginRegisterLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/Access/LoginPage.vue"),
      },
      {
        path: "register",
        component: () => import("pages/Access/RegisterPage.vue"),
      },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "dashboard",
        component: () => import("pages/Admin/DashboardPage.vue"),
      },
      {
        path: "kategori",
        component: () => import("pages/Admin/KategoriPage.vue"),
      },
      {
        path: "produk",
        component: () => import("pages/Admin/DataProduk.vue"),
      },
      {
        path: "alat",
        component: () => import("pages/Admin/DataAlat.vue"),
      },
      {
        path: "datauser",
        component: () => import("pages/Admin/DataUser.vue"),
      },
      {
        path: "inputuser",
        component: () => import("pages/Admin/InputUser.vue"),
      },
      {
        path: "inputalat",
        component: () => import("pages/Admin/InputAlat.vue"),
      },
      {
        path: "inputproduk",
        component: () => import("pages/Admin/InputProduk.vue"),
      },
      {
        path: "inputkategori",
        component: () => import("pages/Admin/InputKategori.vue"),
      },
      {
        path: "editalat/:id",
        component: () => import("pages/Admin/EditAlat.vue"),
      },
      {
        path: "editkategori/:id",
        component: () => import("pages/Admin/EditKategori.vue"),
      },
      {
        path: "editproduk/:id",
        component: () => import("pages/Admin/EditProduk.vue"),
      },
      {
        path: "edituser/:id",
        component: () => import("pages/Admin/EditUser.vue"),
      },
      {
        path: "profile",
        component: () => import("pages/Admin/UserProfile.vue"),
      },
    ],
  },

  {
    path: "/user",
    component: () => import("layouts/UserLayout.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "dashboard",
        component: () => import("pages/User/DashboardPage.vue"),
      },
      {
        path: "setalat/:id",
        component: () => import("pages/User/SetDataAlat.vue"),
      },
      {
        path: "inputsetalat/:id",
        component: () => import("pages/User/InputSetDataAlat.vue"),
      },
      {
        path: "alat",
        component: () => import("pages/User/DataAlat.vue"),
      },
      {
        path: "inputalat",
        component: () => import("pages/User/InputAlat.vue"),
      },
      {
        path: "produk",
        component: () => import("pages/User/DataProduk.vue"),
      },
      {
        path: "inputproduk",
        component: () => import("pages/User/InputProduk.vue"),
      },
      {
        path: "editproduk/:id",
        component: () => import("pages/User/EditProduk.vue"),
      },
      {
        path: "settanaman",
        component: () => import("pages/User/SetTanaman.vue"),
      },
      {
        path: "inputsettanaman",
        component: () => import("pages/User/InputSetTanaman.vue"),
      },
      {
        path: "editsettanam/:id",
        component: () => import("pages/User/EditSetTanam.vue"),
      },
      {
        path: "tanaman",
        component: () => import("pages/User/DataTanaman.vue"),
      },
      {
        path: "inputtanaman",
        component: () => import("pages/User/InputTanaman.vue"),
      },
      {
        path: "edittanaman/:id",
        component: () => import("pages/User/EditTanaman.vue"),
      },
      {
        path: "profile",
        component: () => import("pages/User/UserProfile.vue"),
      },
      {
        path: "log/:id",
        component: () => import("pages/User/LogData.vue"),
      },
      {
        path: "chart/:id",
        component: () => import("pages/User/ChartData.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
