<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <section class="container">
      <router-view />

      <button class="text-sm m-3 mt-8" @click="$router.back()">
        {{ t('button.back') }}
      </button>
    </section>
  </main>
</template>
