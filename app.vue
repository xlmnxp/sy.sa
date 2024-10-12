<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-primary text-white p-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center filter blur-sm" style="background-image: url('/profile-photo.jpg');"></div>
      <div class="container mx-auto relative z-10 flex items-center">
        <img src="/profile-photo.jpg" alt="Salem Yaslem Al-saiari" class="w-32 h-32 rounded-full mr-8 border-4 border-white shadow-lg animate-fadeIn">
        <div>
          <h1 class="text-4xl font-bold animate-slideInFromRight">{{ personalInfo.name }}</h1>
          <p class="text-2xl mt-2 animate-slideInFromRight">{{ personalInfo.title }}</p>
        </div>
      </div>
    </header>

    <main class="container mx-auto mt-8 px-4">
      <section class="mb-12 animate-fadeIn">
        <h2 class="text-3xl font-semibold mb-4 text-primary">About Me</h2>
        <p class="text-gray-700 text-lg">
          {{ summary }}
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4 text-primary animate-fadeIn">Experience</h2>
        <div class="space-y-6">
          <div
            v-for="(job, index) in experience"
            :key="index"
            class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary transition-all duration-300 hover:shadow-xl animate-fadeIn"
          >
            <h3 class="text-xl font-semibold text-primary">
              {{ job.position }} at {{ job.company }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ job.startDate }} - {{ job.endDate }}
            </p>
            <ul class="space-y-3">
              <li
                v-for="(resp, respIndex) in job.responsibilities"
                :key="respIndex"
                class="ml-4"
              >
                <template v-if="typeof resp === 'string'">
                  <span
                    class="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"
                  ></span>
                  <span class="text-gray-700">{{ resp }}</span>
                </template>
                <template v-else>
                  <h4 class="font-semibold text-gray-800 mb-2">
                    {{ resp.period }}
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(task, taskIndex) in resp.tasks"
                      :key="taskIndex"
                      class="flex items-start"
                    >
                      <span
                        class="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"
                      ></span>
                      <span class="text-gray-700">{{ task }}</span>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4 text-primary animate-fadeIn">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(skillSet, category) in skills"
            :key="category"
            class="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary transition-all duration-300 hover:shadow-xl animate-fadeIn"
          >
            <h3 class="text-xl font-semibold mb-3 capitalize text-primary">
              {{ category }}
            </h3>
            <ul class="space-y-2">
              <li
                v-for="(skill, skillIndex) in skillSet"
                :key="skillIndex"
                class="flex items-center"
              >
                <span
                  class="inline-block w-2 h-2 rounded-full bg-primary mr-2 flex-shrink-0"
                ></span>
                <span class="text-gray-700">{{ skill }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4 text-primary animate-fadeIn">Education</h2>
        <div
          class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary transition-all duration-300 hover:shadow-xl animate-fadeIn"
        >
          <h3 class="text-xl font-semibold text-primary">
            {{ education[0].degree }} in {{ education[0].field }}
          </h3>
          <p class="text-gray-600">
            {{ education[0].institution }}, {{ education[0].startYear }} -
            {{ education[0].endYear }}
          </p>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4 text-primary animate-fadeIn">Contact</h2>
        <div
          class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary transition-all duration-300 hover:shadow-xl animate-fadeIn"
        >
          <p class="mb-2">
            <strong class="text-primary">Email:</strong>
            {{ personalInfo.email }}
          </p>
          <p class="mb-2">
            <strong class="text-primary">Phone:</strong>
            {{ personalInfo.phones.join(', ') }}
          </p>
          <p class="mb-2">
            <strong class="text-primary">Location:</strong>
            {{ personalInfo.addresses[0].city }},
            {{ personalInfo.addresses[0].country }}
          </p>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4 text-primary animate-fadeIn">Connect</h2>
        <div class="flex flex-wrap gap-4">
          <a
            v-for="(link, platform) in accounts"
            :key="platform"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors animate-fadeIn"
          >
            {{ platform }}
          </a>
        </div>
      </section>
    </main>

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
  name: 'Salem Yaslem Al-saiari',
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
  phones: ['+96650000000', '+96650000000'],
  email: 's@sy.sa',
};

const summary =
  'Experienced professional with a strong background in utilizing various tools and technologies related to cloud computing, web development, DevOps, system administration, version control, containerization, and continuous integration/continuous deployment (CI/CD).';

const experience = [
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
    endDate: 'Present',
    responsibilities: [
      {
        period: 'Year 3 (2023 - Present)',
        tasks: [
          'Migrated infrastructure to Google Cloud Platform using Terraform for Infrastructure as Code (IaC)',
          'Set up and managed databases, storage buckets, and various GCP services including Cloud Run, Load Balancers, Cloud DNS, Redis, and Cloud Build',
          'Implemented and managed Elasticsearch using Kubernetes',
          'Continued development and maintenance of back-end applications using NestJS and ExpressJS',
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

const education = [
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

const languages = [
  {
    language: 'Arabic',
    level: 'Native Language',
  },
  {
    language: 'English',
    level: 'Good',
  },
];

const accounts = {
  x: 'https://x.com/xlmnxp',
  github: 'https://github.com/xlmnxp/',
  bahr: 'https://bahr.910ths.sa/freelancers/xlmnxp',
  linkedin: 'https://sa.linkedin.com/in/salem-yaslem-98b494193',
  website: 'https://sy.sa/',
};
</script>