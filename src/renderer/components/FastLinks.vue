<template>
  <div id="fastlinks">
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <div class="pane">
              <input type="text" v-model="filterName" placeholder="查询1" >
              <ul class="fastlinks">
                <li  v-for="(categ,key) in links" :key="key" class="category">
                  <span>{{categ.name}}</span>
                  <ul class="linkItems">
                    <li v-for="(link,i) in categ.data" :key="i">
                      {{i+1}}. <a @click.prevent="open(link.link)" :title="link.link">{{link.name}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ol>
                <li>1. 从本地获取地址信息</li>
                <li>2. 从具体的地址url中获取</li>
                <li>3. 输入地址展示url中所有的快捷链接</li>
                <li>4. 名称和链接添加、编辑</li>
                <li>5. 布局： 常用链接，链接分类，链接拖动</li>
                <li>6. 搜索常用链接</li>
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
  data () {
    return {links: {
      front: {
        name: '前端',
        data: [
          {name: 'Photon', link: 'https://photoncss.org'},
          {name: 'BootStrap', link: 'https://getbootstrap.com'},
          {name: 'Flex', link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'},
          {name: 'Grid', link: 'https://css-tricks.com/snippets/css/complete-guide-grid/'},
          {name: 'Electron', link: 'https://electron.atom.io/docs/'},
          {name: 'Electron-vue', link: 'https://simulatedgreg.gitbooks.io/electron-vue/content/en/'},
          {name: 'Vuejs', link: 'https://vuejs.org/v2/guide/'},
          {name: 'Vuex', link: 'https://vuex.vuejs.org/en/'},
          {name: 'Vue-router', link: 'https://router.vuejs.org/en/'}
        ]},
      system: {
        name: '系统',
        data: [
          {name: 'D:', link: 'file:D:/'},
          {name: 'E:', link: 'file:E:/'},
          {name: 'F:', link: 'file:F:/'}
        ]}
    },
      filterName: ''}
  },
  computed: {
    filterByName (name) {
      return this.links.front.filter((link) => link.name.toLowerCase().indexOf(this.filterName) !== -1)
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
.fastlinks {
}

.fastlinks .category span{
  font-size: 2em;
}

.linkItems {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around ;
  list-style: none;
  font-size: 1.5em;
  
}

.linkItems li{
  border: 1px dotted green;  
  border-radius: 5px;
  margin-right: 0.5em;
  margin-top: 0.5em;
}
a {
  cursor: pointer;
}
</style>
