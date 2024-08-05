<template>
  <div class="flex flex-col items-center">

    <div class="flex w-full h-20 justify-between items-center px-6">
      <img :src="useRuntimeConfig().public.brandLogo" class="h-14" alt="logo.png">
      <h3 class="font-primary font-[900] text-3xl text-zinc-500">ADMIN DASHBOARD</h3>
      <NuxtLink to="/">
        <UButton label="Sign Out" size="sm" icon="i-line-md-logout" trailing :ui="{ rounded: 'rounded-full', base: 'transition-color duration-300' }" color="red" variant="soft" />
      </NuxtLink>
    </div>

    <div class="flex w-full justify-between pl-3 pr-6">
      <div class="w-full h-full">
        <UTabs class="w-full" :items="dashTabs" :ui="{
          list: {
            background: 'bg-zinc-200 dark:bg-zinc-800',
            rounded: 'rounded-md',
            tab: {
              active: 'bg-white dark:bg-zinc-900',
              size: 'text-md',
              font: 'font-bold',
            }
          }
        }" />
      </div>
    </div>

    
    <div class="w-full flex flex-row justify-between items-end absolute bottom-0 px-6 py-6">
      <ClientOnly>
        <UButton
          :icon="isDark ? 'i-line-md-sunny-outline-to-moon-alt-loop-transition' : 'i-line-md-moon-alt-to-sunny-outline-loop-transition'"
          color="gray"
          variant="solid"
          aria-label="Theme"
          @click="isDark = !isDark; toast.add({ title: 'Changed theme', timeout: 2500, icon: 'i-line-md-cog-filled-loop'});"
        />
      </ClientOnly>

      <span class="font-primary-italic select-none">powered by <a class="font-brand font-[900] text-3xl transition-all duration-500 hover:text-indigo-400" href="https://github.com/matejastupar" target="_blank">Booker</a></span>
    </div>

  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Booker | Admin Dashboard'
});

const toast = useToast();

/* THEME LOGIC */
const colorMode = useColorMode();

const isDark = computed({
  get () {
    return colorMode.value === 'light'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});

/* TABS LOGIC */
const dashTabs = [{
  label: 'Overview',
  content: 'Overview of most important information.',
  icon: 'i-line-md-list-3',
}, {
  label: 'All Bookings',
  content: 'Confirm or deny users booking requests.',
  icon: 'i-line-md-star-pulsating-loop',
}, {
  label: 'Booking Period',
  content: 'Set available times for bookings.',
  icon: 'i-line-md-arrows-horizontal',
},{
  label: 'Configure Booker',
  content: 'Configuration for the app.',
  icon: 'i-line-md-cog-loop',
}];
</script>