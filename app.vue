<template>
  <div>
    <UNotifications />
    <NuxtPage class="min-w-screen min-h-screen" />
    <!-- Booker App made by mateja.dev -->
  </div>
</template>

<style>
* {
  font-family: "Nunito Sans";
  margin: 0;
  padding: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>