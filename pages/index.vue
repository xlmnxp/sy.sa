<template>
    <Suspense>
      <template #default>
        <main class="container mx-auto mt-8 px-4">
          <section class="mb-12 animate-fadeIn">
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">About Me</h2>
            <p class="text-gray-700 dark:text-gray-300 text-lg">
              {{ summary }}
            </p>
          </section>
  
          <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">Experience</h2>
            <div class="space-y-6">
              <div v-for="(job, index) in experiences" :key="index"
                class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
                <h3 class="text-xl font-semibold text-primary dark:text-primary-dark">
                  {{ job.position }} at {{ job.company }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  {{ job.startDate }} - {{ job.endDate }}
                </p>
                <ul class="space-y-3">
                  <li v-for="(resp, respIndex) in job.responsibilities" :key="respIndex" class="ml-4">
                    <template v-if="typeof resp === 'string'">
                      <span class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 mr-2 flex-shrink-0"></span>
                      <span class="text-gray-700 dark:text-gray-300">{{ resp }}</span>
                    </template>
                    <template v-else>
                      <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {{ resp.period }}
                      </h4>
                      <ul class="space-y-2">
                        <li v-for="(task, taskIndex) in resp.tasks" :key="taskIndex" class="flex items-start">
                          <span class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 mr-2 flex-shrink-0"></span>
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
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">Skills</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(skillSet, category) in skills" :key="category"
                class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
                <h3 class="text-xl font-semibold mb-3 capitalize text-primary dark:text-primary-dark">
                  {{ category }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="(skill, skillIndex) in skillSet" :key="skillIndex" class="flex items-center">
                    <span class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mr-2 flex-shrink-0"></span>
                    <span class="text-gray-700 dark:text-gray-300">{{ skill }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">Education</h2>
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
              <template v-for="education of educations">
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
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">Contact</h2>
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary dark:border-primary-dark transition-all duration-300 hover:shadow-xl animate-fadeIn">
              <p class="mb-2">
                <strong class="text-primary dark:text-primary-dark">Email:</strong>
                <span class="text-gray-700 dark:text-gray-300">{{ personalInfo.email }}</span>
              </p>
              <p class="mb-2">
                <strong class="text-primary dark:text-primary-dark">Location:</strong>
              <div v-for="(address, index) in personalInfo.addresses" :key="index" class="text-gray-700 dark:text-gray-300">
                <span class="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-dark mt-1.5 mr-2 flex-shrink-0"></span>
                {{ address.city }}, {{ address.region }}, {{ address.country }}
                <span v-if="address.street"> ({{ address.street }}) </span>
              </div>
              </p>
            </div>
          </section>
  
          <section class="mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark animate-fadeIn">Connect</h2>
            <div class="flex flex-wrap gap-4">
              <a v-for="(link, platform) in accounts" :key="platform" :href="link" target="_blank" rel="noopener noreferrer"
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
  const summary =
    'Experienced professional with a strong background in utilizing various tools and technologies related to cloud computing, web development, DevOps, system administration, version control, containerization, and continuous integration/continuous deployment (CI/CD).';
  
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
  
  const experiences = [
    {
      company: 'Jaras',
      position: 'DevOps Engineer',
      type: 'Part-time',
      startDate: 'August 2024',
      endDate: 'Present',
      responsibilities: [
        'Developed and implemented Zatca Phase 2 integration using Django',
        'Managed DevOps processes for Django-based applications',
      ],
    },
    {
      company: 'Alwasaet',
      position: 'Software Engineer / DevOps Engineer',
      type: 'Full-time',
      startDate: 'August 2021',
      endDate: 'November 2024',
      responsibilities: [
        {
          period: 'Year 3 (2023 - Present)',
          tasks: [
            'Migrated infrastructure to Google Cloud Platform using Terraform for Infrastructure as Code (IaC)',
            'Set up and managed databases, storage buckets, and various GCP services including Cloud Run, Load Balancers, Cloud DNS, Redis, and Cloud Build',
            'Implemented and managed Elasticsearch using Kubernetes',
            'Continued development and maintenance of back-end applications using NestJS, NuxtJS and ExpressJS',
          ],
        },
        {
          period: 'Aramco - MyLearning Project',
          tasks: [
            'Created and managed 4 environments: Development, Staging, UAT, and Production',
            'Utilized Jenkins for building and deploying changes across all environments',
            'Developed back-end features using NestJS, creating numerous API endpoints with NuxtJS',
            'Set up and configured Directus as a headless CMS',
            'Implemented integration between Camunda, Directus, and MyLearning platforms',
          ],
        },
        {
          period: 'Year 2 (2022 – 2023)',
          tasks: [
            'Created new separated infrastructure for Alwasaet LXP, DAM, and CMS SaaS in Oracle Cloud (Jeddah region)',
            'Set up Jenkins instances for CI/CD pipelines',
            'Configured and managed databases',
            'Automated the development process',
            'Initiated and developed the DAM project using NestJS as a back-end developer',
            'Maintained and enhanced the LXP application built with ExpressJS',
          ],
        },
        {
          period: 'Year 1 (2021 – 2022)',
          tasks: [
            'Managed on-premise infrastructure for Alwasaet LXP at MOMRA',
            'Configured and managed proxies and load balancers',
            'Handled image setup, upload, configuration, and new release deployments',
          ],
        },
      ],
    },
    {
      company: 'Bahr',
      position: 'Freelance',
      startDate: 'January 2016',
      endDate: 'October 2021',
      responsibilities: [
        'Successfully delivered two projects on the Bahr platform, each receiving a five-star rating for exceptional performance and client satisfaction.',
      ],
    },
  ];
  
  const educations = [
    {
      institution: 'Northern Border University',
      degree: "Bachelor's degree",
      field: 'Computer Science',
      startYear: 2017,
      endYear: 2022,
    },
  ];
  
  const skills = {
    software: ['Microsoft Office', 'LibreOffice', 'Git', 'Docker', 'Jenkins'],
    programming: ['C/C++', 'Rust', 'JavaScript/TypeScript'],
    operating: ['Linux System Administrator', 'PostgreSQL'],
    extra: ['HTML', 'CSS', 'HTML5', 'CSS3', 'Automation'],
    frameworks: ['NestJS', 'NextJS/ReactJS', 'NuxtJS/VueJS', 'NodeJS'],
    cloud: ['Oracle Cloud Infrastructure', 'Google Cloud Platform'],
    other: ['GTK', 'Ffmpeg', 'Camunda', 'Directus'],
  };
  
  const accounts = {
    x: 'https://x.com/xlmnxp',
    Github: 'https://github.com/xlmnxp/',
    Bahr: 'https://bahr.910ths.sa/freelancers/xlmnxp',
    LinkedIn: 'https://sa.linkedin.com/in/salem-yaslem-98b494193',
  };
  </script>
