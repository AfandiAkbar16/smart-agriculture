"use strict";(globalThis["webpackChunktugas_akhir_smart_greenhouse"]=globalThis["webpackChunktugas_akhir_smart_greenhouse"]||[]).push([[890],{7890:(a,e,t)=>{t.r(e),t.d(e,{default:()=>y});var l=t(9835),n=t(1957);const o=(0,l._)("span",{class:"text-h5 text-weight-light q-pa-md"},[(0,l._)("span",{class:"text-blue-grey-14"},"Tambah Data Set Tanam")],-1),s={class:"q-pa-md"},i={class:"q-gutter-xs"},m=(0,l._)("div",{class:"q-mt-md"},null,-1),r=(0,l._)("div",{class:"q-mt-md"},null,-1),d={class:"col"},u=(0,l._)("div",{class:"q-mt-md"},null,-1);function p(a,e,t,p,A,c){const g=(0,l.up)("q-badge"),h=(0,l.up)("q-icon"),_=(0,l.up)("q-input"),D=(0,l.up)("q-select"),T=(0,l.up)("q-btn"),S=(0,l.up)("q-form"),M=(0,l.up)("q-card"),b=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(b,{padding:"",class:"items-center-justify-center bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{flat:"",class:"bg-white q-pa-md q-ma-md"},{default:(0,l.w5)((()=>[o,(0,l._)("div",s,[(0,l.Wm)(S,{onSubmit:c.onSubmit,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(g,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Data Set Tanam")])),_:1}),(0,l.Wm)(_,{label:"Media Tanam","lazy-rules":"",color:"primary",modelValue:A.MEDIA_TANAM,"onUpdate:modelValue":e[0]||(e[0]=a=>A.MEDIA_TANAM=a),rules:[a=>null!==a&&""!==a||"Media Tanam isi dengan benar"]},{append:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"title"})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(D,{filled:"",modelValue:A.IDTANAMAN,"onUpdate:modelValue":e[1]||(e[1]=a=>A.IDTANAMAN=a),options:A.tanamanOptions,"emit-value":"","map-options":"",color:"primary",label:"Tanaman"},{"no-option":(0,l.w5)((()=>[(0,l.Uk)(" Tidak ada opsi tersedia ")])),append:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"grass"})])),_:1},8,["modelValue","options"]),m,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(A.ALAT,((a,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l.Wm)(D,{filled:"",modelValue:a.MAC_ADDRESS,"onUpdate:modelValue":e=>a.MAC_ADDRESS=e,options:A.alatOptions,"emit-value":"","map-options":"",color:"primary",label:"Sensor"},{"no-option":(0,l.w5)((()=>[(0,l.Uk)(" Tidak ada opsi tersedia ")])),append:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"sensors"})])),_:2},1032,["modelValue","onUpdate:modelValue","options"]),r,(0,l._)("div",d,[(0,l.wy)((0,l.Wm)(T,{outline:"",class:"q-mr-sm",icon:"delete",color:"red",onClick:a=>c.removeForm(e)},null,8,["onClick"]),[[n.F8,e||!e&&A.ALAT.length>1]]),(0,l.wy)((0,l.Wm)(T,{outline:"",icon:"add",color:"primary",onClick:a=>c.addForm(e)},null,8,["onClick"]),[[n.F8,e==A.ALAT.length-1]]),u])])))),128))]),(0,l._)("div",null,[(0,l.Wm)(T,{unelevated:"",icon:"add",type:"submit",label:"Simpan Data",style:{height:"50px"},color:"primary"})])])),_:1},8,["onSubmit"])])])),_:1})])),_:1})}t(9665);var A=t(1569);const c={data(){return{MEDIA_TANAM:null,IDTANAMAN:null,ALAT:[{MAC_ADDRESS:null}],IDUSER:null,alatOptions:[],tanamanOptions:[]}},methods:{onSubmit(){const a={MEDIA_TANAM:this.MEDIA_TANAM,IDTANAMAN:this.IDTANAMAN,ALAT:this.ALAT.map((a=>({MAC_ADDRESS:a.MAC_ADDRESS}))),IDUSER:this.$q.localStorage.getItem("user").IDUSER};A.api.post("settanam/input",a).then((a=>{a.data.status?(this.$q.notify({color:"positive",message:a.data.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]}),this.$router.push("/user/settanaman")):this.$q.notify({color:"negative",message:a.data.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})}))},addForm(a){this.ALAT.push({IDALAT:null})},removeForm(a){this.ALAT.splice(a,1)},getAlatOption(){A.api.get("alat/getbyuser/"+this.$q.localStorage.getItem("user").IDUSER).then((a=>{this.alatOptions=a.data.data.map((a=>({label:a.NAMA_ALAT,value:a.MAC_ADDRESS}))),console.log(this.alatOptions)}))},getTanamanOption(){A.api.get("tanaman/getbyuser/"+this.$q.localStorage.getItem("user").IDUSER).then((a=>{console.log(a),this.tanamanOptions=a.data.data.map((a=>({label:a.NAMA_TANAMAN,value:a.GUID})))}))}},created(){this.getAlatOption(),this.getTanamanOption()}};var g=t(1639),h=t(9885),_=t(4458),D=t(8326),T=t(990),S=t(3119),M=t(2857),b=t(757),q=t(8879),I=t(9984),v=t.n(I);const w=(0,g.Z)(c,[["render",p]]),y=w;v()(c,"components",{QPage:h.Z,QCard:_.Z,QForm:D.Z,QBadge:T.Z,QInput:S.Z,QIcon:M.Z,QSelect:b.Z,QBtn:q.Z})}}]);