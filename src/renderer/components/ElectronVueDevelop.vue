<template>
  <div id="electronDevelopNote">
    <div>
       <h2>样式引入</h2>
       <ul>
         <li>1. 在vue组件中引入样式
           <ul>
             <li>a. 在&lt;style&gt;标签中引入@import '~@/assets/css/photon.css'; 作为全局样式使用, 样式在src/renderer/assets目录下</li>
             <li>b. 在.vue文件中引入模块node_modules中的css,scss,less,sass可以使用~，例如：&lt;script lang="sass"&gt; @import '~bluma';&lt;/script&gt;</li>
           </ul>
         </li>
         <li>
           2. 添加redis访问展示
         </li>
       </ul>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
  
</style>
