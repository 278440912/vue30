import{B as a,r as e,o as l,c as t,l as d,h as s,d as o,p as n,a as i,f as r,w as u}from"./vendor.e4999bcf.js";const p={name:"edit",setup(){const e=a(!1);return{dialogVisible:e,show:()=>{e.value=!0}}}},c=s(" 你好ya ");p.render=function(a,s,o,n,i,r){const u=e("el-dialog");return l(),t(u,{title:"提示",modelValue:n.dialogVisible,"onUpdate:modelValue":s[1]||(s[1]=a=>n.dialogVisible=a),width:"30%"},{default:d((()=>[c])),_:1},8,["modelValue"])};const b={name:"vue3",components:{edit:p},setup(){const e=a([]);let l=a(!1),t=a();o((()=>{}));return{tableData:e,dialogVisible:l,mapday:t,adds:()=>{t.value.show()}}}},m=u();n("data-v-05ef1942");const f=s("新增奥利给");i();const h=m(((a,d,s,o,n,i)=>{const u=e("el-button"),p=e("el-table-column"),c=e("el-table"),b=e("edit"),h=e("el-card");return l(),t(h,null,{default:m((()=>[r("div",null,[r(u,{style:{margin:"20px 0"},type:"primary",onClick:o.adds},{default:m((()=>[f])),_:1},8,["onClick"])]),r(c,{data:o.tableData,style:{width:"100%"}},{default:m((()=>[r(p,{prop:"date",label:"日期",width:"180"}),r(p,{prop:"name",label:"姓名",width:"180"}),r(p,{prop:"address",label:"地址"}),r(p,{label:"操作"})])),_:1},8,["data"]),r(b,{ref:"mapday"},null,512)])),_:1})}));b.render=h,b.__scopeId="data-v-05ef1942";export default b;
