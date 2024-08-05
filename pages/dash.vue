<template>
  <div class="flex flex-col items-center">

    <div class="flex w-full h-20 justify-between items-center px-6">
      <h1 class="text-5xl font-brand font-[600]">Booker</h1>
      <NuxtLink to="/">
        <UButton label="Sign Out" size="sm" icon="i-line-md-logout" trailing :ui="{ rounded: 'rounded-full', base: 'transition-color duration-300' }" color="red" variant="soft" />
      </NuxtLink>
    </div>

    <div class="flex w-full justify-between pl-3 pr-6">
      <div class="w-[80%] h-full">
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
      <div class="flex flex-col h-full w-[15%] items-end space-y-3">
        <UButton label="New Booking" @click="isOpen = true" size="lg" icon="i-line-md-plus-circle" trailing :ui="{ base: 'transition-color duration-300', font: 'font-bold' }" color="primary" variant="solid" />
      
        <UModal v-model="isOpen">
          <div class="flex flex-col items-center px-4 py-6">
            <h3 class="text-2xl font-bold mb-2 select-none">New Booking Request</h3>
            <UDivider size="xs" />

            <UTextarea color="white" variant="outline" placeholder="Your note for this booking" size="md" :rows="2" class="w-full mt-2" />
            <span class="flex self-start mt-2">
              <UToggle color="red" v-model="isUrgent" size="md" on-icon="i-line-md-alert-circle-loop" />
              <p class="text-sm ml-2 text-gray-600 dark:text-gray-400">Is this booking urgent?</p>
            </span>
            
            <UButton label="Confirm" @click="isOpen = false; toast.add({ title: 'New booking made', timeout: 2500, icon: 'i-line-md-clipboard-check'});" size="sm" icon="i-line-md-check-all" trailing :ui="{ rounded: 'rounded-full', base: 'transition-color duration-300 mt-8' }" color="primary" variant="solid" />
          </div>
        </UModal>
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
  title: 'Booker | Dashboard'
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
  label: 'Bookings',
  content: 'Users Previous and Future Bookings.',
  icon: 'i-line-md-bell-loop',
}, {
  label: 'Profile',
  content: 'Users data and edit feature.',
  icon: 'i-line-md-account',
}];

/* NEW BOOKING LOGIC */
const isOpen = ref(false);
const isUrgent = ref(false);

</script>