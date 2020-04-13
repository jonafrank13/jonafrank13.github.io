<template>
  <q-page class="flex exp-page q-py-md q-px-xl">
    <q-list dark class="full-width q-mt-xl">
      <q-expansion-item header-class="bg-primary list-item">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="img:statics/icons/brimma.png" size="100px" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-warning text-bold text-h5">Brimma Tech Inc.</q-item-label>
            <q-item-label class="text-bold text-accent text-h6">Engineering Partner</q-item-label>
            <q-item-label caption class="text-bold">January 2017 to Present (3+ years)</q-item-label>
          </q-item-section>
        </template>
        <q-separator dark />
        <q-card>
          <q-card-section class="bg-primary">
            <ul>
              <li>Engineering and Development Partner in a fast paced fully AGILE STARTUP team following the SCRUM guidelines</li>
              <li>Developed and implemented the official website for the company</li>
              <li>Architected, Developed and released a mini CRM app in record 20 days with our team for a client</li>
              <li>Worked on multiple backends such as java, node & C# for various products</li>
              <li>Architected and Solutioned highly available, resilient, fault tolerant applications with architectural components such as load balancers, caches (Redis), CDNs (Cloudflare), Queues (SQS, Kafka, Rabbit MQ), Databases and Services</li>
              <li>Developed web, hybrid and mobile applications for multiple clients</li>
              <li>Helped in Architecting, Developing and Maintaining the applications developed</li>
              <li>Created fully responsive and adaptive mobile hybrid, Progressive Web Applications (PWAs) and web based applications</li>
              <li>Deployed and hosted fully compliant servers for various microservices with node.js, express, fastify frameworks</li>
              <li>Worked on creating applications and poc(s) using Vue, Angular, React, Ionic & Quasar frameworks in the front end and node, express/fastify servers for the microservices</li>
              <li>Worked on frontend performance improvement using webpack</li>
              <li>Worked to improve Search Engine Optimization (SEO)</li>
              <li>Involved in product management (Requirement Gathering, Architecting solution and flow, Creating the scaffolding, Project Structuring, Tool chain setup, GIT process setup, listed out the feature sets, KPIs, UX improvements and UI refinements)</li>
              <li>Deployed applications to the Amazon Web Services Server Instances (AWS – Elastic Cloud Compute - EC2)</li>
              <li>Worked with AWS VPC, Lambda, Route 53, SQS</li>
              <li>Followed and implemented TDD and BDD principles</li>
              <li>Exposure to various project management & development models – Waterfall, Feature Driven Development, Agile, XP</li>
              <li>Experience in setting up high velocity runway for applications with continuous delivery model & SOPs</li>
              <li>Hands on experience in developing Cloud Native Architectures, n-tier web applications, batch systems, Micro Services, Message/ Event driven systems, IAM, OAUTH 2.0 solutions etc</li>
              <li>Helped in hiring & interview process, team co-ordination, managment etc</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator spaced dark />
      <q-expansion-item header-class="bg-primary list-item">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="img:statics/icons/zoho.png" size="100px" color="primary" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-warning text-bold text-h5">Zoho Corp</q-item-label>
            <q-item-label class="text-bold text-accent text-h6">Member Technical Staff</q-item-label>
            <q-item-label caption class="text-bold">June 2013 to December 2016 (3 years 7 months)</q-item-label>
          </q-item-section>
        </template>
        <q-separator dark />
        <q-card>
          <q-card-section class="bg-primary">
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
.exp-page {
  background: $background;
}
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
