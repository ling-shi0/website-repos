<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-22 16:23:39
 * @LastEditTime: 2024-02-29 18:35:43
 * @LastEditors: lingshi
-->
<template>
  <div class="web-sub-tech-wrap">
    <PostingList></PostingList>
    <SideBar></SideBar>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/sideBar/SideBar.vue';
import PostingList from '@/components/postingList/PostingList.vue';
</script>

<style lang="scss" scoped>
  .web-sub-tech-wrap {
    display: flex;
    padding: 12px;
  }
</style>