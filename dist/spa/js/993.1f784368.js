"use strict";(globalThis["webpackChunktugas_akhir_smart_greenhouse"]=globalThis["webpackChunktugas_akhir_smart_greenhouse"]||[]).push([[993],{2993:(s,e,a)=>{a.r(e),a.d(e,{default:()=>L});var l=a(9835);const o={class:"row full-width"},t={class:"col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm"},i={class:"row"},n={class:"col-md-6 col-xs-12"},r={class:"row q-pt-md q-pb-md bg-white"},d={class:"col-md-10 offset-2 col-xs-8"},u={class:"col-md-6 col-xs-12 1-pt-md"},c={class:"q-pa-md"},m=(0,l._)("div",{class:"text-h4"},"Login Account",-1);function p(s,e,a,p,g,h){const w=(0,l.up)("q-img"),b=(0,l.up)("q-card-section"),f=(0,l.up)("q-input"),_=(0,l.up)("q-icon"),q=(0,l.up)("q-btn"),v=(0,l.up)("q-form"),S=(0,l.up)("q-card"),k=(0,l.up)("q-page"),y=(0,l.up)("q-page-container"),P=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(P,{class:"bg-primary",view:"hHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,{padding:"",class:"row items-center justify-center"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("div",t,[(0,l.Wm)(S,{flat:"",class:"bg-white text-black"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",n,[(0,l._)("div",r,[(0,l._)("div",d,[(0,l.Wm)(w,{"spinner-color":"white","placeholder-src":"/logo/leaf.png",src:"/logo/leaf.png"})])])]),(0,l._)("div",u,[(0,l._)("div",c,[(0,l.Wm)(b,{class:"text-blue-grey-14"},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(v,{onSubmit:s.onSubmit,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{filled:"",modelValue:s.EMAIL,"onUpdate:modelValue":e[0]||(e[0]=e=>s.EMAIL=e),label:"Email",hint:"Masukkan Email Anda","lazy-rules":"",rules:[s=>s&&s.length>0||"Email tidak boleh kosong"]},null,8,["modelValue","rules"]),(0,l.Wm)(f,{modelValue:s.PASSWORD,"onUpdate:modelValue":e[2]||(e[2]=e=>s.PASSWORD=e),filled:"",type:s.isPwd?"password":"text",label:"Password",hint:"Masukkan Password","lazy-rules":"",rules:[s=>s&&s.length>0||"Password tidak boleh kosong"]},{append:(0,l.w5)((()=>[(0,l.Wm)(_,{name:s.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=e=>s.isPwd=!s.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,l._)("div",null,[(0,l.Wm)(q,{label:"Login",type:"submit",color:"primary"}),(0,l.Wm)(q,{label:"Registrasi",to:"register",class:"q-ml-sm text-primary"})])])),_:1},8,["onSubmit"])])])])])),_:1})])])])),_:1})])),_:1})])),_:1})}a(9665);var g=a(1569);const h=(0,l.aZ)({name:"LoginPage",data(){return{isPwd:!0,EMAIL:null,PASSWORD:null}},methods:{onSubmit(){g.api.post("user/login",{EMAIL:this.EMAIL,PASSWORD:this.PASSWORD}).then((s=>{s.data.loginResponse.status?(this.$q.notify({color:"positive",message:s.data.loginResponse.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]}),0==s.data.loginResponse.data.user.ROLE?(this.$q.localStorage.set("user",s.data.loginResponse.data.user),this.$router.push("/admin/dashboard")):(this.$q.localStorage.set("user",s.data.loginResponse.data.user),this.$router.push("/user/dashboard"))):this.$q.notify({color:"negative",message:s.data.loginResponse.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})}))}}});var w=a(1639),b=a(249),f=a(2133),_=a(9885),q=a(4458),v=a(335),S=a(3190),k=a(8326),y=a(3119),P=a(2857),W=a(8879),R=a(9984),A=a.n(R);const Z=(0,w.Z)(h,[["render",p]]),L=Z;A()(h,"components",{QLayout:b.Z,QPageContainer:f.Z,QPage:_.Z,QCard:q.Z,QImg:v.Z,QCardSection:S.Z,QForm:k.Z,QInput:y.Z,QIcon:P.Z,QBtn:W.Z})}}]);