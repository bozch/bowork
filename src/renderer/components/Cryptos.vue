<template>
    <div id="cryptos">
        <div>
            <span>MD5</span>
            <input type="text" class="form-control" v-model="md5input"> {{md5output}}
            
            <button class="btn btn-mini btn-default" @click="copyMd5Output">
                <span class="icon icon-home"></span>
            </button>
        </div>
    </div>
</template>

<script>
import crypto from 'crypto'
import { clipboard } from 'electron'

export default {
  name: 'cryptos',
  data () {
    return {
      md5input: ''
    }
  },
  computed: {
    md5output () {
      const hash = crypto.createHash('md5')
      hash.update(this.md5input)
      return hash.digest('hex')
    }
  },
  methods: {
    copyMd5Output () {
      clipboard.writeText(this.md5output, 'selection')
      // console.log(clipboard.readText('selection'))
    }
  }
}
</script>

<style>

</style>
