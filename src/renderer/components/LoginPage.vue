<template>
  <div id="wrapper">
    <div class="window">
      <header class="toolbar toolbar-header">
        <h1 class="title">Bowork - Enjoy you wrok!</h1>
        <div class="toolbar-actions">
          <div class="btn-group">
            <button class="btn btn-default" @click="linkto('/')">
              <span class="icon icon-home"></span>
            </button>
            <button class="btn btn-default">
              <span class="icon icon-folder"></span>
            </button>
            <button class="btn btn-default active">
              <span class="icon icon-cloud"></span>
            </button>
            <button class="btn btn-default">
              <span class="icon icon-popup"></span>
            </button>
            <button class="btn btn-default">
              <span class="icon icon-shuffle"></span>
            </button>
          </div>
          <div class="btn-group">
            <button class="btn btn-default" title="向前" @click="historyRoute(-1)">
              <span class="icon icon-left" ></span>
            </button>
            <button class="btn btn-default" tiltle="向后"  @click="historyRoute(1)">
              <span class="icon icon-right"></span>
            </button>
          </div>
          <button class="btn btn-default">
            <span class="icon icon-home icon-text"></span>
            Filters
          </button>
  
          <button class="btn btn-default btn-dropdown pull-right">
            <span class="icon icon-megaphone"></span>
          </button>
        </div>
      </header>
      <div class="window-content">
        <div class="pane-group">
          <div class="pane-sm sidebar">
            <nav class="nav-group">
              <h5 class="nav-group-title">工具</h5>
              <a class="nav-group-item active" @click="routeTo('')">
                <span class="icon icon-home"></span>
                主页
              </a>
              <span class="nav-group-item" @click="routeTo('fastlinks')">
                <span class="icon icon-download"></span>
                常用链接
              </span>
              <span class="nav-group-item" @click="routeTo('cryptos')">
                <span class="icon icon-folder"></span>
                编码工具、加密工具
              </span>
              <span class="nav-group-item" @click="routeTo('dragarea')">
                <span class="icon icon-signal"></span>
                拖拽
              </span>
              <span class="nav-group-item" @click="routeTo('electron_note')">
                <span class="icon icon-print"></span>
                笔记
              </span>
              <span class="nav-group-item" @click="routeTo('json_editor')">
                <span class="icon icon-cloud"></span>
                json工具
              </span>
            </nav>
            
          </div>
          <div class="pane">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <footer class="toolbar toolbar-footer">
        <div class="toolbar-actions">
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import FastLinks from './FastLinks'
  import Cryptos from './Cryptos'

  export default {
    name: 'landing-page',
    components: { SystemInformation, FastLinks, Cryptos },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      routeTo (link) {
        this.$router.push('/login/' + link)
      },
      linkto (link) {
        this.$router.push(link)
      },
      historyRoute (num) {
        this.$router.go(num)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    font-family: 'Source Sans Pro', sans-serif;  
    background-image: url('~@/assets/going-green-slogan.gif');
    background-repeat: no-repeat;
    background-position: center;}

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 0 0;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding-left: 6px;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .bottom {
    display: flex;
    flex-wrap: nowrap;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
