<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-03-03 17:18:20
 * @LastEditTime: 2024-03-03 18:07:39
 * @LastEditors: lingshi
-->
<template>
  <div 
    class="markdown-container" 
    v-html="markdownContent"
  >
  </div>
</template>
  
<script setup lang='ts'>
import { defineProps, ref, watchEffect, computed } from 'vue';
import { marked } from 'marked';
import 'github-markdown-css';

const contentText = ref<string>('');

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

const props = defineProps({
  url: String,
})

watchEffect(() => {
  if (props.url) {
    fetch(props.url)
      .then((res) => res.text())
      .then((res) => {
        contentText.value = res;
      })
  }
})
  
const markdownContent = computed(() => {
  return marked(contentText.value);
})

</script>
  
<style lang="scss" scoped>
.markdown-container {
  margin: 20px auto;
  width: 80%;
  height: calc(100vh - var(--workbench-tabs-height, 60px) - 160px);
  overflow-y: auto;
}
</style>