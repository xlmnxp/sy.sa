<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <header
      class="bg-primary/10 dark:bg-primary/5 text-primary dark:text-primary-dark py-4 px-4 sm:px-6 relative overflow-hidden">
      <div
        class="container mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div class="flex flex-col sm:flex-row items-center text-center sm:text-start">
          <img src="/profile-photo.jpg" alt="Salem Yaslem Al-saiari"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full sm:me-6 border-2 border-primary dark:border-primary-dark shadow-lg animate-fadeIn mb-2 sm:mb-0">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold animate-slideInFromRight">{{ personalInfo.name }}</h1>
            <p class="text-lg sm:text-xl mt-1 animate-slideInFromRight text-primary-dark dark:text-primary">{{
              personalInfo.title }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <nav class="flex items-center mx-2">
            <NuxtLink :to="localePath('/')"
              class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors mx-2">
              {{ $t('navigation.home') }}</NuxtLink>
            <NuxtLink :to="localePath('/repos')"
              class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors mx-2">
              {{ $t('navigation.repositories') }}</NuxtLink>
            <NuxtLink :to="localePath('/services')"
              class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors mx-2">
              {{ $t('navigation.services') }}</NuxtLink>
          </nav>
          <button @click="router.push(switchLocalePath($i18n.locale === 'en' ? 'ar' : 'en'))"
            class="mx-1 px-3 py-1 rounded-md text-sm font-medium text-primary dark:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary/5 transition-colors flex items-center">
            <svg class="w-5 h-5 me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>

    <NuxtPage />

    <footer class="bg-primary text-white text-center p-4 mt-8">
      <p>
        &copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. All
        rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import personalInfo from 'assets/json/personal-info.json';

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

function switchLanguage(event) {
  router.push(switchLocalePath(event.target.value))
}

</script>

<style>
.router-link-active {
  font-weight: 600;
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
}
</style>