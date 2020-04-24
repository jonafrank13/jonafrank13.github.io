<template>
  <q-page class="flex exp-page q-py-md q-px-xl">
    <q-list :dark="$q.dark.isActive" class="full-width q-mt-xl">
      <q-expansion-item header-class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="img:statics/icons/brimma.png" size="100px" :color="$q.dark.isActive ? 'primary' : ''" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-warning text-bold text-h5">Brimma Tech Inc.</q-item-label>
            <q-item-label class="text-bold text-accent text-h6">Engineering Partner ( Technical Lead , Technical Solution Architect and Product Manager )</q-item-label>
            <q-item-label caption class="text-bold">January 2017 to April 2020 (3 years 4 months)</q-item-label>
          </q-item-section>
        </template>
        <q-separator :dark="$q.dark.isActive" />
        <q-card>
          <q-card-section :class="$q.dark.isActive ? 'bg-primary' : 'text-primary'">
            <ul>
              <li>Worked predominantly as a Technical lead in a US based fin-tech domain mortgage software products startup, wore multiple hats including Technical solution architect and Product Management</li>
              <li>Was the SME for frontend , web development, CSS, jank free 60fps content rendering and javascript coding.</li>
              <li>Architected and solutioned multiple end-end products that are highly resilient and fault tolerant</li>
              <li>Designed and Developed REST and SOAP API for product backends, developed and deployed multiple micro services using node (Fastify and Express frameworks) and java (spring boot), handled service communication and sync using messaging services such as SQS and Rabbit MQ.</li>
              <li>Developed and hands on coded applications solving complex problems such as Financial Services, CRM , Appointment Management Systems , Orchestrated task scheduling and execution etc.</li>
              <li>Handled clients directly for requirement gathering and sprint demos, <b>reported directly to the CEO</b> for most products</li>
              <li>Worked with multiple backend cloud and native technologies (AWS EC2, Lambda, SQS, Load balancers, VPC, Spring Boot, Spring Reactive, Jenkins, Docker) and languages (node, java and C#) for various products</li>
              <li>Designed the Database schemas for products in both non-relational (MongoDB, Firebase) and relational databases (postgres)</li>
              <li>Wrote code extensively in the frontend side, developing multiple fully responsive and adaptive Web applications, Progressive Web Apps (PWAs) & Single Page web Apps (SPAs) implemented concepts such as Server Side Rendering (SSRs), Search Engine Optimization (SEOs), treeshaking, gzip compression, Content Delivery Networks (CDNs), TDD etc, ES6 syntax, NPM, Webpack, CSS preprocessors ( SASS & LESS ), Angular (2, 4, 6) , Vue (3.0) , Ionic & Quasar frameworks.</li>
              <li>Released couple of hybrid apps using Apache Cordova in Android Play Store and Apple App stores.</li>
              <li>Created POCs in React for benchmarking and evaluation of frameworks.</li>
              <li>Developed the official website for the company.</li>
              <li>Participated and led efforts in all R&D work for evaluating the best and the most cutting-edge technologies available.</li>
              <li>Handled application security in both frontend (CORS, CSRF, OAuth 2.0, XSS prevention, eval code blocking, CSP, package  audits) and the backend (VPC, SQL Injection, Multi-factor Authentication, JWT, etc)</li>
              <li>Involved in product management activities as well since the company was a startup (Requirement Gathering, Architecting solution and flow, Creating the scaffolding, Project Structuring, Tool chain setup, GIT process setup, listed out the feature sets, KPIs, UX improvements and UI refinements)</li>
              <li>Incorporated agile and xp based software development process to increase team velocity and thoroughput.</li>
              <li>Formalized and implemented the CI, CD pipelines in the company</li>
              <li>Coached, Provided technical guidance and motivated juniors in my team with best code practices, implementing design patterns, frequent code reviews, performance feedback</li>
              <li>Streamlined the hiring process for the startup by creative candidate evaluation strategies and by conducting local hackathons</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator spaced :dark="$q.dark.isActive" />
      <q-expansion-item header-class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="img:statics/icons/zoho.png" size="100px" :color="$q.dark.isActive ? 'primary' : ''" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-warning text-bold text-h5">Zoho Corp</q-item-label>
            <q-item-label class="text-bold text-accent text-h6">Member Technical Staff (Senior Software Developer & Module Architect)</q-item-label>
            <q-item-label caption class="text-bold">June 2013 to December 2016 (3 years 7 months)</q-item-label>
          </q-item-section>
        </template>
        <q-separator dark />
        <q-card>
          <q-card-section :class="$q.dark.isActive ? 'bg-primary' : 'text-primary'">
            <ul>
              <li>Part of SERVICE DESK PLUS – MANAGE ENGINE, One of the widely used Helpdesk Enterprise Softwares in the world</li>
              <li>Involved in the complete SDLC (Full Stack) of specific modules in the product, from DB modeling to the UI & UX for the modules</li>
              <li>Was in charge of revamping existing code and developing new modules from scratch in the product</li>
              <li>Coordinated with the team for complete code revamp and development of specific modules</li>
              <li>Worked on supporting multiple DB back-ends like PGSQL, MSSQL & MySQL</li>
              <li>Involved in writing python scripts for customers who require customized integration with other products.</li>
              <li>Created REST APIs for specific modules</li>
              <li>Created the front-end for specific modules with Handlebars, Angular and Vue.js based on bench-marking tests</li>
              <li>Created benchmarking server setups using Node.js for performance monitoring</li>
              <li>Experience with SASS for CSS code maintenance</li>
              <li>Developed a complete automation testing and reporting framework for the product using Selenium Web driver</li>
              <li>Developed customized Chrome Add-ons with the REST APIs available in the product for suiting various needs of the clients</li>
              <li>Developed and designed a complete HOT STANDBY-FAILOVER model for the product to cut downtime and provide High Availability</li>
              <li>Aided in hiring the right candidates for the team by screening them</li>
              <li>Aided in talking to the clients directly for setting up and troubleshooting the application in complex environments</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Experience'
}
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding-left: 15px;
  li {
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #666666;
    list-style-type: circle;
  }
  li:last-of-type {
    border-bottom: none;
  }
}
@media only screen and (max-width: 768px) {
  /deep/ .list-item {
    flex-direction: column;
    padding: 10px;
    .q-item__section--side:not(.q-item__section--avatar) {
      padding: 0;
      margin-top: 10px;
      align-items: center;
    }
    .q-item__section--avatar {
      margin-bottom: 10px;
    }
  }
  /deep/ .q-item__label--header {
    padding: 0;
  }
}
</style>
