<template>
<el-card>
<div>
        <el-button style="margin:20px 0" type="primary" @click="adds">新增奥利给</el-button>
</div>
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <!-- 操作 -->
      <el-table-column
        label="操作">
      </el-table-column>
    </el-table>
    <!-- 新增 -->
    <edit ref="mapday"/>


</el-card>
</template>

<script>
import { onMounted, getCurrentInstance, ref, } from '@vue/runtime-core'
import edit from './modeals/edit.vue'
export default {
   name:'vue3',
   components:{
       edit
   },
   setup(){
        const tableData=ref([])
        let dialogVisible=ref(false)
        let mapday =ref()

    onMounted(()=>{

    })
     const adds= ()=>{
       mapday.value.show()

     }
   

          //  输出
       return {
         tableData,
         dialogVisible,
         mapday,
         adds
       }

   }
  


}
</script>

<style scoped > 
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>