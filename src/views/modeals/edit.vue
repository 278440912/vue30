
<template>
    <el-dialog
  title="提示"
  v-model="dialogVisible"
  width="30%">
  你好ya
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
</el-dialog>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'edit',
    
  setup(){
  
   const dialogVisible=ref(false)
//    dialogVisible.value = inject('emit')
    const show = ()=>{
         dialogVisible.value=true
        
    }
   return{ 
       dialogVisible,
       show
    }
  }
 

}
</script>

<style>

</style>