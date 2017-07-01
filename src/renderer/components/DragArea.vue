<template>
    <div id="dragArea">
        <h2>拖拽文件</h2>
        <span>把文件放到这，我帮你放到指定位置</span>
        <div :class="{fileInputPanel:true, dragging: dragging}"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dragging: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$el.addEventListener('drop', this.onDrop)
      this.$el.addEventListener('dragover', this.onDragover)
      this.$el.addEventListener('dragleave', this.onDragleave)
    })
  },
  beforeDestroy () {
    this.$el.removeEventListener('drop', this.onDrop)
    this.$el.removeEventListener('dragover', this.onDragover)
    this.$el.removeEventListener('dragleave', this.onDragleave)
  },
  methods: {
    onDrop (e) {
      this.dragging = false
      const files = e.dataTransfer.files
        // const videos = []
      for (const file in files) {
        if (files.hasOwnProperty(file)) {
          const filename = files[file].name
          const fileExt = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase()
          console.log(fileExt)
          /* if (Videos.allowedExtensions().indexOf(fileExt) !== -1) {
            const video = {
                id: videos.length + 1,
                status: 'loading',
                name: filename,
                path: files[file].path,
                size: files[file].size,
            }
            videos.push(video)
            } */
        }
      }
      /* if (!videos.length) {
          new Notification('Wrong format', {
            body: 'Please, drop a video',
            // TODO: fix icon path
            icon: path.join(__dirname, '/dist/icons/icon.png'),
        });
        return
        }
        Videos.set(videos)
        this.$router.push('videos') */
    },
    onDragover () {
      this.dragging = true
    },
    onDragleave () {
      this.dragging = false
    }
  }
}
</script>

<style>
.fileInputPanel {
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    background-color: #af9;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px #bdbdbd dashed;
    font-size: 1.5em;
    transition: border .4s;
}

.dragging {
    border-color: #6d6c6d !important;
}

</style>
