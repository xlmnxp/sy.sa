<template>
  <Suspense>
    <template #default>
      <main class="container mx-auto mt-8 px-4">
        <section class="mb-12 animate-fadeIn">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">{{ $t("home.about") }}</h2>
          <p class="text-gray-700 dark:text-gray-300 text-lg">
            {{ personalInfo.summary }}
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">{{ $t("home.experience") }}</h2>
          <div class="space-y-6">
            <div v-for="(job, index) in personalInfo.experiences" :key="index"
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-s-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">
                {{ job.position }} at {{ job.company }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ job.startDate }} - {{ job.endDate }}
              </p>
              <ul class="space-y-3">
                <li v-for="(resp, respIndex) in job.responsibilities" :key="respIndex" class="ms-4">
                  <template v-if="typeof resp === 'string'">
                    <span
                      class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 me-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300">{{ resp }}</span>
                  </template>
                  <template v-else>
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {{ resp.period }}
                    </h4>
                    <ul class="space-y-2">
                      <li v-for="(task, taskIndex) in resp.tasks" :key="taskIndex" class="flex items-start">
                        <span
                          class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 me-2 flex-shrink-0"></span>
                        <span class="text-gray-700 dark:text-gray-300">{{ task }}</span>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">{{ $t("home.skills") }}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(skillSet, category) in personalInfo.skills" :key="category"
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
              <h3 class="text-xl font-semibold mb-3 capitalize text-primary dark:text-primary-dark">
                {{ category }}
              </h3>
              <ul class="space-y-2">
                <li v-for="(skill, skillIndex) in skillSet" :key="skillIndex" class="flex items-center">
                  <span
                    class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark me-2 flex-shrink-0"></span>
                  <span class="text-gray-700 dark:text-gray-300">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">{{ $t("home.education") }}</h2>
          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-s-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
            <template v-for="education of personalInfo.educations">
              <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">
                {{ education.degree }} in {{ education.field }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ education.institution }}, {{ education.startYear }} -
                {{ education.endYear }}
              </p>
            </template>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">{{ $t("home.contact") }}</h2>
          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-s-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
            <p class="mb-2">
              <strong class="text-primary dark:text-primary-dark">{{ $t("home.email") }}: </strong>
              <span class="text-gray-700 dark:text-gray-300">{{ personalInfo.email }}</span>
            </p>
            <p class="mb-2">
              <strong class="text-primary dark:text-primary-dark">{{ $t("home.location") }}: </strong>
            <div v-for="(address, index) in personalInfo.addresses" :key="index"
              class="text-gray-700 dark:text-gray-300">
              <span
                class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 me-2 flex-shrink-0"></span>
              {{ address.city }}, {{ address.region }}, {{ address.country }}
              <span v-if="address.street"> ({{ address.street }}) </span>
            </div>
            </p>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">{{ $t("home.connect") }}</h2>
          <div class="flex flex-wrap gap-4">
            <a v-for="(link, platform) in personalInfo.accounts" :key="platform" :href="link" target="_blank"
              rel="noopener noreferrer"
              class="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded-full hover:bg-primary-dark dark:hover:bg-primary transition-colors animate-fadeIn">
              {{ platform }}
            </a>
          </div>
        </section>
      </main>
    </template>
    <template #fallback>
      <div class="min-h-screen flex items-center justify-center">
        <LoadingIndicator />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import personalInfo from 'assets/json/personal-info.json';

useHead({
  title: `${personalInfo.name} - ${personalInfo.title}`,
});
</script>
