<template>
  <div id="fastlinks">
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <div class="pane">
            
              <ol>
                <li>1. 从本地获取地址信息</li>
                <li>2. 从具体的地址url中获取</li>
                <li>3. 输入地址展示url中所有的快捷链接</li>
                <li>4. 名称和链接添加、编辑</li>
                <li>5. 布局： 常用链接，链接分类，链接拖动</li>
              </ol>
          </div>
          <div class="pane">

          </div>
        </div>
      </div>
    </div>
    
  </div>  
</template>

<script>

export default {
  name: 'fast-links',
  data: {
    links: {
      front: [
        {name: 'Photon', link: 'https://photoncss.org'},
        {name: 'BootStrap', link: 'https://getbootstrap.com'}
      ]
    }
  }
}
</script>

<style>
  
</style>
