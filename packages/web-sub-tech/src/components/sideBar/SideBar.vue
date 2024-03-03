<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-29 16:12:24
 * @LastEditTime: 2024-03-03 18:05:17
 * @LastEditors: lingshi
-->
<template>
  <div class="side-bar-wrap">
    <div class="sider-bar-title">类目</div>
    <div 
      :class="{
        'post-item': true,
        'active': activeKey === 'whole'
      }"
      @click="() => changePosts({ key: 'whole', label: '全部'})"
    >全部({{ wholeCount }})</div>
    <div 
      v-for="post in postList.posts" 
      :key="post.key"
      :class="{
        'post-item': true,
        'active': activeKey === post.key
      }"
      @click="() => changePosts(post)"
    >
      <span>{{ post.label }}</span>
      (<span>{{ post.count }}</span>)
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useGetPosts } from '@/hooks/useGetPosts';
import { useGetBusInstance } from '@/hooks/useGetBusInstance';
import type { postItemType } from '@/types';

let postList: any = reactive({
  posts: []
});

let wholeCount = ref(0);
let activeKey = ref('whole')
const Bus = useGetBusInstance();


onMounted(() => {
  useGetPosts().then((res) => {
    postList.posts = splitLabels(res?.posts || []);
    wholeCount = res?.posts?.length || 0;
  })
});

// 把查询结果划分不同的类
const splitLabels = (newPosts: postItemType[] = []) => {
  const res: any = [];
  newPosts.forEach((post: postItemType) => {
    let flag = false;
    for (let label of res) {
      if(label.label === post.label) {
        label.count++;
        flag = true;
      }
    }
    if (!flag) {
      res.push({
        label: post.label,
        count: 1,
        key: post.key
      })
    }
  })
  return res;
}

// 切换类目
const changePosts = (post: any) => {
  activeKey.value = post.key;
  Bus.emit('sidebar-change', post);
}

</script>
<style lang="scss" scoped>
.side-bar-wrap {
  margin-top: 20px;
  width: 200px;
  height: 400px;
  padding: 12px;
  border-left: 2px var(--primary-color, white) solid;
  .sider-bar-title {
    margin: 8px auto;
    color: var(--primary-color, black);
    font-size: 20px;
    text-align: center;
  }
  .post-item {
    margin: 8px auto;
    color: black;
    cursor: pointer;
    &:hover {
      color: var(--primary-color, white);
    }
    &.active {
      color: var(--primary-color, white);
    }
  }
}
</style>