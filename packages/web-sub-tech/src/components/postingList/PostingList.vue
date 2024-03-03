<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-29 16:50:32
 * @LastEditTime: 2024-03-03 18:05:23
 * @LastEditors: lingshi
-->
<template>
  <div class="posting-list-wrap">
    <div 
      class="posting-list-item" 
      v-for="post in postList.posts"
      :key="post.key"
      @click="() => jumpPage(post)"
    >
      <div class="post-title">{{ post.postTitle }}</div>
      <div class="post-des">
        {{ post.description }}
      </div>
    </div>
    <Divider :style="{color: 'var(--primary-color)'}" plain>共{{ (postList.posts || []).length }}条博文</Divider>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useGetPosts } from '@/hooks/useGetPosts';
import { useGetBusInstance } from '@/hooks/useGetBusInstance';
import { Divider } from 'ant-design-vue'
import type { postItemType } from '@/types';
import { useRouter } from 'vue-router';

const route = useRouter();
const postList: any = reactive({
  posts: []
});
const currentLabel = ref<string>('*');
const Bus = useGetBusInstance();

onMounted(() => {
  refreshPosts();
  Bus.subscribe('sidebar-change', (post: postItemType) => {
    currentLabel.value = post.label;
  })
});

const refreshPosts = () => {
  useGetPosts().then((res) => {
    postList.posts = (res?.posts || []).filter(
      (post: postItemType) => 
        post.label === (currentLabel.value as any) 
          || 
          (currentLabel.value === ('*' as any)) 
    );
  });
}

watch(currentLabel, refreshPosts);

const jumpPage = (post: postItemType = ({} as any)) => {
  route.push({
    path: '/detail',
    query: { ...post },
  });
}

</script>
<style lang="scss" scoped>
  .posting-list-wrap {
    flex: 1;
    width: 100%;
    height: calc(100vh - var(--workbench-tabs-height, 60px) - 80px);
    padding: 20px;
    overflow-y: auto;
    .posting-list-item {
      margin: 12px auto;
      width: 80%;
      height: 150px;
      padding: 8px 20px;
      background: var(--primary-color-2, white);
      border: 1px solid var(--primary-color, black);
      border-radius: var(--section-border-radius);
      box-shadow: var(--section-shadow);
      cursor: pointer;
      .post-title {
        margin: 0 auto;
        width: 80%;
        height: 50px;
        border-bottom: 1px solid var(--primary-color);
        font-size: 20px;
        line-height: 50px;
        text-align: center;
      }
      .post-des {
        margin: 0 auto;
        display: -webkit-box;
        width: 80%;
        height: 100px;
        font-size: 14px;
        color: #666;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
