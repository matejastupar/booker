<template>
  <div class="flex flex-col items-center justify-center">

    <UContainer class="bg-zinc-200 dark:bg-zinc-800 shadow-lg h-[32rem] w-[24rem] rounded-md py-8 flex flex-col items-center justify-between">

      <div>
        <div>
          <h4 class="text-3xl font-bold text-center">Welcome to the <br><span class="font-[900]">{{ useRuntimeConfig().public.brandName }}</span> booking app.</h4>
          <p class="text-md font-light text-center mt-2">Please log in or create an account.</p>
        </div>

        <UTabs class="w-full mt-6" :items="authTabs" :ui="{
            list: {
              background: 'bg-white dark:bg-zinc-900',
              rounded: 'rounded-md',
              tab: {
                active: 'bg-zinc-200 dark:bg-zinc-800',
                size: 'text-md',
                font: 'font-normal',
              }
            }
        }">
          <template #item="{ item }">
            <div class="flex justify-center">

              <div v-if="item.key === 'login'" class="flex flex-col w-full space-y-4 mt-6">
                <div>
                  <label class="text-xs ml-2 text-zinc-500">User e-mail:</label>
                  <UInput color="white" variant="outline" size="lg" placeholder="E-mail" />
                </div>
                <div>
                  <label class="text-xs ml-2 text-zinc-500">User password:</label>
                  <UInput color="white" variant="outline" size="lg" placeholder="Password" />
                </div>
              </div>

              <div v-else-if="item.key === 'signup'" class="flex flex-col w-full space-y-1 mt-1">
                <div>
                  <label class="text-xs ml-2 text-zinc-500">Your name:</label>
                  <UInput color="white" variant="outline" size="lg" placeholder="Name" />
                </div>
                <div>
                  <label class="text-xs ml-2 text-zinc-500">Your e-mail:</label>
                  <UInput color="white" variant="outline" size="lg" placeholder="E-mail" />
                </div>
                <div>
                  <label class="text-xs ml-2 text-zinc-500">Create password:</label>
                  <UInput color="white" variant="outline" size="lg" placeholder="Password" />
                </div>
              </div>

            </div>
          </template>
        </UTabs>
      </div>

      <NuxtLink to="/dash">
        <UButton label="Confirm" size="sm" icon="i-line-md-check-all" trailing :ui="{ rounded: 'rounded-full', base: 'transition-color duration-300 mt-8' }" color="primary" variant="solid" />
      </NuxtLink>
    </UContainer>
    
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
    
      <p class="text-md text-gray-500 select-none">ver. α</p>
    </div>

  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Booker | Log in'
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
const authTabs = [{
  label: 'Log In',
  key: 'login',
  icon: 'i-line-md-login',
}, {
  label: 'Sign Up',
  key: 'signup',
  icon: 'i-line-md-person-add',
}];
</script>