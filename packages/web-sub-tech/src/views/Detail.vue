<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-03-03 15:49:50
 * @LastEditTime: 2024-03-03 18:11:00
 * @LastEditors: lingshi
-->
<template>
  <div class="post-detail-wrap">
    <LeftCircleOutlined 
      class="return-btn" 
      @click="return2List"
    >
    </LeftCircleOutlined>
    <div class="post-title">
      {{ postDetail.postTitle || '---' }}
    </div>
    <div class="post-content">
      <MarkdownContainer
        :url="postDetail.fileUrl"
      ></MarkdownContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { LeftCircleOutlined } from '@ant-design/icons-vue';
import MarkdownContainer from '@/components/markdownContainer/MarkdownContainer.vue';
import type { postItemType } from '@/types';

const route = useRoute();
const router = useRouter();
const postDetail = ref<postItemType>(({} as any));

onMounted(() => {
  postDetail.value = ({
    ...(route.query || {})
  } as any)
});

const return2List = () => {
  router.push('/home');
}

</script>
<style lang="scss" scoped>
.post-detail-wrap {
  position: relative;
  padding: 20px 20px 0 20px;
  width: 100%;
  height: 100%;
  .return-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    color: var(--primary-color);
    font-size: 26px;
  }
  .post-title {
    margin: 20px auto;
    width: 80%;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid var(--primary-color);
  }
}
</style>