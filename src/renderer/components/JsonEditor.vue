<template>
    <div id="json_editor">
        <div id="terminal"></div>
        <pre>
            功能描述：
                1. 接受json对象
                2. 接受json文件（）
                3. 接受url json
                4. 保存目标目录中
                5. 保存为json对象，在事件中响应
                6. 保存到指定URL中

        </pre>
        <div id="editor_holder"></div>
    </div>
</template>

<script>
    import Terminal from 'xterm'
    var term = new Terminal()
    term.open(document.getElementById('terminal'))
    term.write('Hello from \\033[1;3;31mxterm.js\\033[0m $ ')
</script>

<style>
  
</style>
