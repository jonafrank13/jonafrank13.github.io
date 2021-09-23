<template>
  <q-page class="flex justify-around content-start skills-pg q-pa-sm">
    <q-input :dark="$q.dark.isActive" outlined clearable v-model="search" debounce="500" placeholder="Search Skill" class="full-width q-mt-xl q-px-xl">
      <template v-slot:append>
        <q-avatar>
          <q-icon name="search" />
        </q-avatar>
      </template>
    </q-input>
    <div class="q-mt-md full-width flex justify-center">
      <div class="text-warning" style="padding-top:14.5px">Graph</div>
      <q-toggle class="text-warning" :dark="$q.dark.isActive" color="accent" size="lg" label="List" @input="vibrate" v-model="is_list" />
    </div>
    <div v-if="!is_list" class="q-mt-md full-width flex justify-center text-caption text-negative"><strong>Note:</strong>&nbsp;Rated out of 100%, based on my own self evaluation. Even if i know some topic very well, I believe there is always some scope to learn further, hence my max is at 99</div>
    <div v-for="segment in filtered_skills"  :key="segment.name">
      <h5 v-if="segment.skills.length > 0" class="full-width q-my-lg q-mt-xl text-center text-bold">{{segment.name}}</h5>
      <div v-if="segment.skills.length > 0" class="flex flex-wrap justify-center" :class="is_list ? 'column items-center' : ''">
        <div v-for="skill in segment.skills" class="flex-wrap justify-start items-center" :class="is_list ? 'justify-center q-my-sm' : 'column'" :key="skill.name">
          <q-circular-progress
            v-if="!is_list"
            show-value
            font-size="10px"
            class="q-ma-md text-accent row"
            :value="skill.value"
            size="80px"
            :thickness="0.25"
            color="secondary"
            :track-color="$q.dark.isActive ? 'primary' : 'white'"
          >
          </q-circular-progress>
          <div class="text-bold text-warning text-center" style="max-width: 110px; text-wrap: wrap;">{{skill.name}}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { utils } from 'src/mixins/utils'

export default {
  name: 'Skills',
  data () {
    return {
      all_skills: [
        {
          name: 'Leadership and Management Skills',
          skills: [
            {
              name: 'Team Management',
              value: 99
            },
            {
              name: 'Hiring Process Management',
              value: 99
            },
            {
              name: 'Client Interaction / Requirement Gathering',
              value: 99
            },
            {
              name: 'Software Architecture',
              value: 99
            },
            {
              name: 'Product Management',
              value: 85
            },
            {
              name: 'Code Reviews',
              value: 99
            },
            {
              name: 'Continuous Feedback / Team Motivation',
              value: 99
            },
            {
              name: 'Budget Management',
              value: 70
            },
            {
              name: 'Project Proposals',
              value: 99
            },
            {
              name: 'Documentation / Content Writing',
              value: 85
            },
            {
              name: 'Process Improvement',
              value: 99
            },
            {
              name: 'SCRUM Process Management',
              value: 70
            },
            {
              name: 'Problem Solving / Debugging',
              value: 99
            },
            {
              name: 'Interpersonal Skills',
              value: 99
            }
          ]
        },
        {
          name: 'Programming Languages',
          skills: [
            {
              name: 'Javascript',
              value: 99
            },
            {
              name: 'Node.js',
              value: 99
            },
            {
              name: 'HTML',
              value: 99
            },
            {
              name: 'CSS',
              value: 99
            },
            {
              name: 'Java',
              value: 85
            },
            {
              name: 'Python',
              value: 75
            },
            {
              name: 'Go',
              value: 20
            },
            {
              name: 'C#',
              value: 20
            }
          ]
        },
        {
          name: 'System Architectures',
          skills: [
            {
              name: 'Microservices',
              value: 99
            },
            {
              name: 'Service Oriented Architecture (SOA)',
              value: 99
            },
            {
              name: 'Monolitic Architecture',
              value: 99
            },
            {
              name: '3-Tier Architecture',
              value: 99
            },
            {
              name: 'N-Tier Architecture',
              value: 99
            },
            {
              name: 'Service Orchestration / Choreography',
              value: 85
            },
            {
              name: 'Cloud Architectures',
              value: 70
            },
            {
              name: 'Amazon Web Services (AWS)',
              value: 85
            },
            {
              name: 'Google Cloud Services (GCP)',
              value: 50
            }
          ]
        },
        {
          name: 'Frontend Frameworks',
          skills: [
            {
              name: 'Vue',
              value: 99
            },
            {
              name: 'Angular 2+',
              value: 99
            },
            {
              name: 'React',
              value: 99
            },
            {
              name: 'Ember',
              value: 40
            },
            {
              name: 'jQuery',
              value: 99
            }
          ]
        },
        {
          name: 'Frontend UI/Component Frameworks',
          skills: [
            {
              name: 'Quasar',
              value: 99
            },
            {
              name: 'Ionic 2',
              value: 99
            },
            {
              name: 'Ionic 3',
              value: 99
            }
          ]
        },
        {
          name: 'Frontend Bundlers',
          skills: [
            {
              name: 'Gulp',
              value: 60
            },
            {
              name: 'Webpack',
              value: 99
            },
            {
              name: 'Grunt',
              value: 40
            }
          ]
        },
        {
          name: 'Frontend CSS Preprocessors',
          skills: [
            {
              name: 'SCSS',
              value: 99
            },
            {
              name: 'LESS',
              value: 99
            },
            {
              name: 'Stylus',
              value: 99
            }
          ]
        },
        {
          name: 'Frontend Testing Frameworks',
          skills: [
            {
              name: 'Mocha',
              value: 85
            },
            {
              name: 'Jasmine',
              value: 60
            },
            {
              name: 'Cypress',
              value: 99
            },
            {
              name: 'Jest',
              value: 99
            },
            {
              name: 'React Testing Framework',
              value: 99
            },
            {
              name: 'Puppeteer',
              value: 99
            }
          ]
        },
        {
          name: 'Other Frontend Technologies',
          skills: [
            {
              name: 'Typescript',
              value: 99
            },
            {
              name: 'D3',
              value: 50
            },
            {
              name: 'Cordova',
              value: 60
            },
            {
              name: 'ES Lint',
              value: 75
            },
            {
              name: 'ES6',
              value: 99
            },
            {
              name: 'npm',
              value: 99
            },
            {
              name: 'Yarn',
              value: 99
            },
            {
              name: 'Bootstrap',
              value: 99
            },
            {
              name: 'CORS',
              value: 99
            },
            {
              name: 'CSRF',
              value: 99
            },
            {
              name: 'CSP',
              value: 99
            },
            {
              name: 'Progressive Web Apps (PWA)',
              value: 99
            },
            {
              name: 'Single Page Apps (SPA)',
              value: 99
            },
            {
              name: 'Server Side Rendering (SSR)',
              value: 99
            },
            {
              name: 'Flux',
              value: 85
            },
            {
              name: 'Redux',
              value: 85
            },
            {
              name: 'Vuex',
              value: 85
            },
            {
              name: 'Search Engine Optimization (SEO)',
              value: 99
            },
            {
              name: 'Chrome Extensions',
              value: 99
            },
            {
              name: 'Content Delivery Networks (CDNs)',
              value: 99
            },
            {
              name: 'Babel',
              value: 99
            },
            {
              name: 'GraphQL',
              value: 60
            }
          ]
        },
        {
          name: 'Node Frameworks',
          skills: [
            {
              name: 'Express',
              value: 85
            },
            {
              name: 'Fastify',
              value: 99
            },
            {
              name: 'Helmet',
              value: 70
            },
            {
              name: 'Sequelize',
              value: 85
            }
          ]
        },
        {
          name: 'Relational Databases',
          skills: [
            {
              name: 'Postgres (PgSQL)',
              value: 99
            },
            {
              name: 'MySQL',
              value: 85
            }
          ]
        },
        {
          name: 'Non-Relational Databases',
          skills: [
            {
              name: 'MongoDB',
              value: 99
            },
            {
              name: 'Firebase',
              value: 85
            },
            {
              name: 'DynamoDB',
              value: 85
            },
            {
              name: 'Neo4j',
              value: 60
            },
            {
              name: 'Dgraph',
              value: 99
            }
          ]
        },
        {
          name: 'Development Tools / DevOps Tools / OS',
          skills: [
            {
              name: 'VS Code',
              value: 99
            },
            {
              name: 'Atom',
              value: 70
            },
            {
              name: 'Sublime',
              value: 99
            },
            {
              name: 'Git',
              value: 99
            },
            {
              name: 'SVN',
              value: 99
            },
            {
              name: 'Docker',
              value: 99
            },
            {
              name: 'Kubernetes',
              value: 60
            },
            {
              name: 'Open Shift',
              value: 40
            },
            {
              name: 'Windows OS',
              value: 99
            },
            {
              name: 'Mac OS',
              value: 99
            },
            {
              name: 'Linux',
              value: 99
            }
          ]
        },
        {
          name: 'Other Technical Skills',
          skills: [
            {
              name: 'Chatbots ( Dialogflow / Twilio )',
              value: 70
            },
            {
              name: 'VertX',
              value: 60
            },
            {
              name: 'OAuth',
              value: 99
            },
            {
              name: 'Redis',
              value: 99
            },
            {
              name: 'Kafka',
              value: 75
            },
            {
              name: 'AWS SQS',
              value: 85
            },
            {
              name: 'AWS Lambda',
              value: 85
            },
            {
              name: 'J2EE',
              value: 75
            },
            {
              name: 'Spring boot',
              value: 75
            },
            {
              name: 'Spring Reactive',
              value: 75
            },
            {
              name: 'Django',
              value: 50
            },
            {
              name: 'UX / UI',
              value: 99
            },
            {
              name: 'Algorithms',
              value: 99
            },
            {
              name: 'Datastructures',
              value: 99
            },
            {
              name: 'Design Patterns',
              value: 99
            },
            {
              name: 'Data Science / Data Analytics',
              value: 40
            },
            {
              name: 'Machine Learning / AI',
              value: 30
            },
            {
              name: 'Microsoft Office (Excel, PPT, Word)',
              value: 99
            },
            {
              name: 'Arduino / Raspberry Pi',
              value: 99
            }
          ]
        },
        {
          name: 'Non Technical Skills',
          skills: [
            {
              name: 'Cooking / Baking',
              value: 99
            },
            {
              name: 'Painting / Sketching',
              value: 99
            },
            {
              name: 'Singing',
              value: 70
            },
            {
              name: 'Oratory',
              value: 99
            },
            {
              name: 'Quizzing',
              value: 85
            }
          ]
        }
      ],
      search: null,
      is_list: false
    }
  },
  computed: {
    filtered_skills: function () {
      if (!this.search) {
        return this.all_skills
      } else {
        const filteredArray = this.all_skills.map((segment) => {
          const newSegment = {}
          newSegment.name = segment.name
          newSegment.skills = segment.skills.filter(skill => (skill.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1))
          console.log(newSegment)
          return newSegment
        })

        return filteredArray
      }
    }
  },
  mixins: [utils]
}
</script>
<style lang="scss" scoped>
h5 {
  color: $accent !important;
  text-decoration: underline;
}
</style>
