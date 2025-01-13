<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
    <header class="bg-primary/10 dark:bg-primary/5 text-primary dark:text-primary-dark py-4 px-4 sm:px-6 relative overflow-hidden">
      <div class="container mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div class="flex flex-col sm:flex-row items-center text-center sm:text-left">
          <img src="/profile-photo.jpg" alt="Salem Yaslem Al-saiari"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full sm:mr-6 border-2 border-primary dark:border-primary-dark shadow-lg animate-fadeIn mb-2 sm:mb-0">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold animate-slideInFromRight">{{ personalInfo.name }}</h1>
            <p class="text-lg sm:text-xl mt-1 animate-slideInFromRight text-primary-dark dark:text-primary">{{ personalInfo.title }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <nav class="flex items-center space-x-6">
            <NuxtLink to="/" class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors">Home</NuxtLink>
            <NuxtLink to="/repos" class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors">Repositories</NuxtLink>
            <NuxtLink to="/services" class="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors">Services</NuxtLink>
          </nav>
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
const personalInfo = {
  name: 'Salem Yaslem Al-Saiari',
  title: 'Software Engineer | DevOps Engineer',
  dateOfBirth: '9th September 1998',
  nationality: 'Saudi',
  addresses: [
    {
      street: '8176, Al-Fahd District',
      city: 'Sharurah',
      region: 'Najran',
      country: 'Saudi Arabia',
    },
    {
      city: 'Riyadh',
      region: 'Riyadh',
      country: 'Saudi Arabia',
    },
  ],
  email: 's@sy.sa',
};
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