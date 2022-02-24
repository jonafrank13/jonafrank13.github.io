<template>
  <q-page class="flex edu-page q-py-md q-px-xl">
    <q-list class="full-width">
      <q-item-label header class="text-h3 text-warning text-center q-my-lg sticky-title edu-title" :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
        >Education</q-item-label
      >
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/anna.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Anna University</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >Bachelor of Engineering in Electrical and Electronics Engineering
            (B.E EEE)</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >St. Joseph's college of engineering</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >Head of Robotics, Mathematics, English and Quiz Club. Merit
            scholarship winner</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >Class Topper ( Rank 1 ) and Department Topper ( Rank 4
            )</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-accent" caption>2009 - 2013</q-item-label>
          <q-item-label class="text-warning" caption>8.49/10 GPA</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >Chennai</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/stjohns.jpg"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >St.John's English School and Junior College</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >Junior College &amp; High School (Science Stream)</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >Science Club Secretary, Class Pupil Leader, Best Quizzer, Computer
            Science Topper</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >[96% Computer Science, 96% Math, 96% Physics]</q-item-label
          >
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >School Topper ( Rank 3 ), Full Attendance Award , Best Quizzer
            Award , Computer Science Topper Award</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-accent" caption>1995 - 2009</q-item-label>
          <q-item-label class="text-warning" caption>93.4%</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >Chennai</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item-label header class="text-h3 text-warning text-center q-my-lg sticky-title edu-title" :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
        >Certifications</q-item-label
      >
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/udemy.jpeg"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Complete Product Management Course</q-item-label
          >
          <q-item-label class="text-secondary text-h6">Udemy</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >UC-3f5b9cfc-c888-4013-b1a0-d4067e1de014</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Apr 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/ant.jpeg"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Cognitive Machine Reading (CMR Fearless)</q-item-label
          >
          <q-item-label class="text-secondary text-h6">AntWorks</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >CMR-FEARLESS-15717695</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Mar 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cutshort.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Certified HTML/CSS</q-item-label
          >
          <q-item-label class="text-secondary text-h6">CutShort</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >4234</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Feb 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cutshort.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Certified Vue.js - Advanced</q-item-label
          >
          <q-item-label class="text-secondary text-h6">CutShort</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >4171</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Feb 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cutshort.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Certified Javascript - Advanced</q-item-label
          >
          <q-item-label class="text-secondary text-h6">CutShort</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >4173</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Feb 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cutshort.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Certified NodeJS (Node.js)</q-item-label
          >
          <q-item-label class="text-secondary text-h6">CutShort</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >4177</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Feb 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cutshort.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >CutShort Certified Angular (2+)</q-item-label
          >
          <q-item-label class="text-secondary text-h6">CutShort</q-item-label>
          <q-item-label
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
            caption
            >4559</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Feb 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            color="primary"
            size="100px"
            name="img:statics/icons/cambridge.png"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Business English from Cambridge</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >Cambridge English Language Assessment</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Dec 2012</q-item-label>
        </q-item-section>
      </q-item>
      <template v-for="item in linkedInCerts">
        <q-separator :key="item.name + '_sep'" dark spaced inset />
        <q-item
          :key="item.name"
          class="list-item"
          :class="$q.dark.isActive ? 'bg-primary' : ''"
        >
          <q-item-section avatar>
            <q-icon color="primary" size="100px" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-accent text-h4">{{
              item.name
            }}</q-item-label>
            <q-item-label class="text-secondary text-h6">{{
              item.authority
            }}</q-item-label>
            <q-item-label
              v-if="item.desc"
              :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
              caption
              >{{ item.desc }}</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label class="text-warning" caption>{{
              item.issued
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <q-item-label header class="text-h3 text-warning text-center q-my-lg sticky-title edu-title" :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
        >Honors &amp; Awards</q-item-label
      >
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Star award 2022</q-item-label
          >
          <q-item-label class="text-secondary text-h6">Coinbase</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2022</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >APAC People's Choice Award - Smart Contract Hackathon - 2022</q-item-label
          >
          <q-item-label class="text-secondary text-h6">Coinbase</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2022</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
       <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Spot Award 2021</q-item-label
          >
          <q-item-label class="text-secondary text-h6">PayPal</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2021</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Heros of 2020</q-item-label
          >
          <q-item-label class="text-secondary text-h6">PayPal</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Capture the Flag (Security &amp; Hacking Competition)</q-item-label
          >
          <q-item-label class="text-secondary text-h6">PayPal</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Merit Scholarship</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >St.Joseph's College of Engineering</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2010</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Best Quizzer Award</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >St.John's English School and Junior College</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2009</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon
            :color="$q.dark.isActive ? 'white' : 'primary'"
            size="100px"
            name="stars"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4"
            >Computer Science Topper Award</q-item-label
          >
          <q-item-label class="text-secondary text-h6"
            >St.John's English School and Junior College</q-item-label
          >
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2009</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Education',
  data () {
    return {
      linkedInCerts: [
        {
          name: 'Blockchain Basics',
          issued: 'Sep 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Beyond the Basics',
          issued: 'Sep 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Ethereum: Building Blockchain Decentralized Apps (DApps)',
          issued: 'Sep 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Components, Context, and Accessibility',
          issued: 'Sep 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Software Architecture',
          issued: 'Aug 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: State Management',
          issued: 'Aug 2021',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'GraphQL with React: The Complete Developers Guide',
          issued: 'Oct 2020',
          icon: 'img:statics/icons/udemy.jpeg',
          authority: 'Udemy',
          desc: 'UC-f2657c8b-0071-4169-85dc-08abea04c7fd'
        },
        {
          name: 'Software Architecture Case Studies',
          issued: 'Oct 2020',
          icon: 'img:statics/icons/udemy.jpeg',
          authority: 'Udemy',
          desc: 'UC-5baafe16-dfea-4938-8829-cd0d20cb0eef'
        },
        {
          name: 'The Complete React Developer Course with Hooks and Redux',
          issued: 'Oct 2020',
          icon: 'img:statics/icons/udemy.jpeg',
          authority: 'Udemy',
          desc: 'UC-ccf711aa-4fb1-4689-82e7-ecb4bf8cbe3b'
        },
        {
          name: 'Communicating with Confidence',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Enterprise Architecture Foundations',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Fundamentals of Dynamic Programming',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Influencing Others',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning GraphQL',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning RxJS',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning webpack 4',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Microservices: Design Patterns',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Node.js: Securing RESTful APIs',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Product Management: Building a Product Roadmap',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React Hooks',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React Native: Building Mobile Apps',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Strategic Thinking',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Ecosystems',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Rules for Rising Leaders',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'SSL Certificates for Web Developers',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Software Architecture: Patterns for Developers',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Web Security: OAuth and OpenID Connect',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Professional Networking',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Software Design: Code and Design Smells',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Collaboration Principles and Process',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Advanced npm',
          issued: 'Nov 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'JavaScript: Best Practices for Data',
          issued: 'Nov 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Advanced Node.js',
          issued: 'Jun 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Advanced Node.js: Scaling Applications',
          issued: 'Jun 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Microservices Foundations',
          issued: 'Jun 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Cloud Architecture: Advanced Concepts',
          issued: 'May 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Migrating from REST to GraphQL',
          issued: 'May 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Performing Complex State Management with Redux',
          issued: 'May 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Creating and Hosting a Full-Stack Site',
          issued: 'May 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'AWS Certified Solutions Architect - Associate',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Kafka Essential Training',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning MongoDB',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning React.js',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Learning Redis',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Node.js: Design Patterns',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Building Large Apps',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'React: Managing Complex Interactions',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Software Architecture Foundations',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Software Architecture: Domain-Driven Design',
          issued: 'Apr 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.list-item, .edu-title {
  border: 1px solid;
  border-radius: 6px;
}
@media only screen and (max-width: 768px) {
  .list-item {
    flex-direction: column;
    padding: 10px;
    .q-item__section--side {
      padding: 0;
      margin-top: 10px;
      align-items: flex-start;
    }
    .q-item__section--avatar {
      margin-bottom: 10px;
    }
  }
  .q-item__label--header {
    padding: 0;
  }
}
</style>
