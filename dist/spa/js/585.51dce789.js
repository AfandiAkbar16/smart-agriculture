"use strict";(globalThis["webpackChunktugas_akhir_smart_greenhouse"]=globalThis["webpackChunktugas_akhir_smart_greenhouse"]||[]).push([[585],{1585:(a,t,e)=>{e.r(t),e.d(t,{default:()=>M});var l=e(9835);const s=(0,l._)("span",{class:"text-h5 text-weight-light q-pa-md"},[(0,l._)("span",{class:"text-blue-grey-14"},"Ubah Data Alat")],-1),u={class:"q-pa-md"},n={class:"q-gutter-xs"};function o(a,t,e,o,r,d){const i=(0,l.up)("q-badge"),A=(0,l.up)("q-icon"),m=(0,l.up)("q-input"),p=(0,l.up)("q-btn"),c=(0,l.up)("q-form"),h=(0,l.up)("q-card"),_=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(_,{padding:"",class:"items-center-justify-center bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{flat:"",class:"bg-white q-pa-md q-ma-md"},{default:(0,l.w5)((()=>[s,(0,l._)("div",u,[(0,l.Wm)(c,{onSubmit:d.onSubmit,class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(i,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Data Alat")])),_:1}),(0,l.Wm)(m,{label:"MAC Address ","lazy-rules":"",color:"primary",modelValue:r.MAC_ADDRESS,"onUpdate:modelValue":t[0]||(t[0]=a=>r.MAC_ADDRESS=a),rules:[a=>null!==a&&""!==a||"MAC Address Dibutuhkan"]},{append:(0,l.w5)((()=>[(0,l.Wm)(A,{name:"title"})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(m,{label:"Nama Alat ","lazy-rules":"",color:"primary",modelValue:r.NAMA_ALAT,"onUpdate:modelValue":t[1]||(t[1]=a=>r.NAMA_ALAT=a),rules:[a=>null!==a&&""!==a||"Nama Alat Dibutuhkan"]},null,8,["modelValue","rules"])]),(0,l._)("div",null,[(0,l.Wm)(p,{unelevated:"",icon:"add",type:"submit",label:"Simpan Data",style:{height:"50px"},color:"primary"})])])),_:1},8,["onSubmit"])])])),_:1})])),_:1})}e(9665);var r=e(1569);const d={data(){return{MAC_ADDRESS:null,NAMA_ALAT:null,DATA_SENSOR:null}},methods:{onSubmit(){r.api.put(`alat/edit/${this.$route.params.id}`,{MAC_ADDRESS:this.MAC_ADDRESS,NAMA_ALAT:this.NAMA_ALAT}).then((a=>{a.data.status?(this.$q.notify({color:"positive",message:a.data.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]}),this.$router.push("/admin/alat")):this.$q.notify({color:"negative",message:a.data.message,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})}))},getAlatById(){r.api.get(`alat/get/${this.$route.params.id}`).then((a=>{console.log(a.data),this.MAC_ADDRESS=a.data.data.MAC_ADDRESS,this.NAMA_ALAT=a.data.data.NAMA_ALAT,this.DATA_SENSOR=a.data.data.DATA_SENSOR}))}},mounted(){this.getAlatById()}};var i=e(1639),A=e(9885),m=e(4458),p=e(8326),c=e(990),h=e(3119),_=e(2857),g=e(8879),S=e(9984),D=e.n(S);const b=(0,i.Z)(d,[["render",o]]),M=b;D()(d,"components",{QPage:A.Z,QCard:m.Z,QForm:p.Z,QBadge:c.Z,QInput:h.Z,QIcon:_.Z,QBtn:g.Z})}}]);