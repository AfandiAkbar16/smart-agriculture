"use strict";(globalThis["webpackChunktugas_akhir_smart_greenhouse"]=globalThis["webpackChunktugas_akhir_smart_greenhouse"]||[]).push([[867],{6867:(e,a,l)=>{l.r(a),l.d(a,{default:()=>T});var o=l(9835);const t=e=>((0,o.dD)("data-v-84586532"),e=e(),(0,o.Cn)(),e),i={class:"profile-picture-container"},s=t((()=>(0,o._)("span",{class:"text-h5 text-weight-light q-pa-md"},[(0,o._)("span",{class:"text-blue-grey-14"},"Profile")],-1))),n={class:"q-pa-md"},r={class:"q-mt-md"};function d(e,a,l,t,d,c){const A=(0,o.up)("q-img"),m=(0,o.up)("q-icon"),u=(0,o.up)("q-input"),h=(0,o.up)("q-form"),p=(0,o.up)("q-btn"),M=(0,o.up)("q-card"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{padding:"",class:"items-center-justify-center bg-grey-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{flat:"",class:"bg-white q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(A,{src:"/logo/profile.png",alt:"Profile Image",class:"profile-picture"})]),s,(0,o._)("div",n,[(0,o.Wm)(h,{class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{label:"Nama",color:"primary",modelValue:e.NAMA,"onUpdate:modelValue":a[0]||(a[0]=a=>e.NAMA=a),readonly:!e.isEditMode},{append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"person"})])),_:1},8,["modelValue","readonly"]),(0,o.Wm)(u,{label:"E-Mail",color:"primary",modelValue:e.EMAIL,"onUpdate:modelValue":a[1]||(a[1]=a=>e.EMAIL=a),readonly:!e.isEditMode},{append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"email"})])),_:1},8,["modelValue","readonly"]),(0,o.Wm)(u,{label:"No Handphone",color:"primary",modelValue:e.NO_TELP,"onUpdate:modelValue":a[2]||(a[2]=a=>e.NO_TELP=a),readonly:!e.isEditMode},{append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"phone"})])),_:1},8,["modelValue","readonly"]),(0,o.Wm)(u,{label:"Alamat",color:"primary",modelValue:e.ALAMAT,"onUpdate:modelValue":a[3]||(a[3]=a=>e.ALAMAT=a),readonly:!e.isEditMode},{append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"location_on"})])),_:1},8,["modelValue","readonly"])])),_:1})]),(0,o._)("div",r,[e.isEditMode?((0,o.wg)(),(0,o.j4)(p,{key:1,label:"Save",color:"primary",onClick:e.saveProfile,class:"q-mr-sm"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(p,{key:0,label:"Edit",color:"primary",onClick:e.enableEditMode},null,8,["onClick"])),e.isEditMode?((0,o.wg)(),(0,o.j4)(p,{key:2,label:"Cancel",color:"primary",onClick:e.cancelEdit,class:"q-ml-sm"},null,8,["onClick"])):(0,o.kq)("",!0)])])),_:1})])),_:1})}var c=l(1569);const A=(0,o.aZ)({data(){return{NAMA:null,EMAIL:null,NO_TELP:null,ALAMAT:null,isEditMode:!1,originalData:{}}},mounted(){this.fetchProfile()},methods:{fetchProfile(){c.api.get("user/get/"+this.$q.localStorage.getItem("user").IDUSER).then((e=>{console.log(e.data);const{NAMA:a,EMAIL:l,NO_TELP:o,ALAMAT:t}=e.data.data;this.NAMA=a,this.EMAIL=l,this.NO_TELP=o,this.ALAMAT=t,this.originalData={NAMA:a,EMAIL:l,NO_TELP:o,ALAMAT:t}})).catch((e=>{console.error(e),this.$q.notify({color:"negative",message:"Failed to fetch profile information.",actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})}))},enableEditMode(){this.isEditMode=!0},saveProfile(){c.api.put("user/update/"+this.$q.localStorage.getItem("user").IDUSER,{NAMA:this.NAMA,EMAIL:this.EMAIL,NO_TELP:this.NO_TELP,ALAMAT:this.ALAMAT}).then((e=>{const{NAMA:a,EMAIL:l,NO_TELP:o,ALAMAT:t}=e.data.data;this.NAMA=a,this.EMAIL=l,this.NO_TELP=o,this.ALAMAT=t,this.isEditMode=!1,this.$q.notify({color:"positive",message:"Profile updated successfully.",actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})})).catch((e=>{console.error(e),this.$q.notify({color:"negative",message:"Failed to update profile.",actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]})}))},cancelEdit(){this.NAMA=this.originalData.NAMA,this.EMAIL=this.originalData.EMAIL,this.NO_TELP=this.originalData.NO_TELP,this.ALAMAT=this.originalData.ALAMAT,this.isEditMode=!1}}});var m=l(1639),u=l(9885),h=l(4458),p=l(335),M=l(8326),g=l(3119),E=l(2857),L=l(8879),_=l(9984),f=l.n(_);const N=(0,m.Z)(A,[["render",d],["__scopeId","data-v-84586532"]]),T=N;f()(A,"components",{QPage:u.Z,QCard:h.Z,QImg:p.Z,QForm:M.Z,QInput:g.Z,QIcon:E.Z,QBtn:L.Z})}}]);