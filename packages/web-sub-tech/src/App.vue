<!--
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-22 15:43:06
 * @LastEditTime: 2024-02-29 16:48:43
 * @LastEditors: lingshi
-->
<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, RouterView } from 'vue-router';

const route = useRouter();

onMounted(() => {
  route.push('/');
  (window as any).$wujie?.bus.$on("sub-tech-router", (path: string) => route.push(path));
});

</script>
