<template>
  <q-page class="flex justify-around content-start skills-pg q-pa-sm">
    <q-input dark outlined clearable v-model="search" debounce="500" placeholder="Search Skill" class="full-width q-mt-xl q-px-xl">
      <template v-slot:append>
        <q-avatar>
          <q-icon name="search" />
        </q-avatar>
      </template>
    </q-input>
    <div v-for="segment in filtered_skills"  :key="segment.name">
      <h5 v-if="segment.skills.length > 0" class="full-width q-my-lg q-mt-xl text-center text-white text-bold">{{segment.name}}</h5>
      <div v-if="segment.skills.length > 0" class="flex flex-wrap justify-center">
        <div v-for="skill in segment.skills" class="column flex-wrap justify-start items-center" :key="skill.name">
          <q-circular-progress
            show-value
            font-size="10px"
            class="q-ma-md text-accent row"
            :value="skill.value"
            size="80px"
            :thickness="0.25"
            color="secondary"
            track-color="primary"
          >
          </q-circular-progress>
          <div class="text-bold text-warning text-center" style="max-width: 110px; text-wrap: wrap;">{{skill.name}}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
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
              value: 100
            },
            {
              name: 'Hiring Process Management',
              value: 100
            },
            {
              name: 'Client Interaction / Requirement Gathering',
              value: 100
            },
            {
              name: 'Solution Architecture',
              value: 90
            },
            {
              name: 'Product Management',
              value: 90
            },
            {
              name: 'Code Reviews',
              value: 100
            },
            {
              name: 'Continuous Feedback / Team Motivation',
              value: 100
            },
            {
              name: 'Budget Management',
              value: 80
            },
            {
              name: 'Project Proposals',
              value: 80
            },
            {
              name: 'Documentation / Content Writing',
              value: 100
            },
            {
              name: 'Process Improvement',
              value: 100
            },
            {
              name: 'SCRUM Process Management',
              value: 90
            },
            {
              name: 'Problem Solving / Debugging',
              value: 100
            },
            {
              name: 'Interpersonal Skills',
              value: 100
            }
          ]
        },
        {
          name: 'Programming Languages',
          skills: [
            {
              name: 'Javascript',
              value: 100
            },
            {
              name: 'Node.js',
              value: 100
            },
            {
              name: 'HTML',
              value: 100
            },
            {
              name: 'CSS',
              value: 100
            },
            {
              name: 'Java',
              value: 80
            },
            {
              name: 'Python',
              value: 75
            },
            {
              name: 'Groovy',
              value: 20
            },
            {
              name: 'Ruby',
              value: 10
            },
            {
              name: 'Go',
              value: 10
            },
            {
              name: 'C#',
              value: 5
            }
          ]
        },
        {
          name: 'System Architectures',
          skills: [
            {
              name: 'Microservices',
              value: 100
            },
            {
              name: 'Service Oriented Architecture (SOA)',
              value: 100
            },
            {
              name: 'Monolitic Architecture',
              value: 100
            },
            {
              name: '3-Tier Architecture',
              value: 100
            },
            {
              name: 'N-Tier Architecture',
              value: 100
            },
            {
              name: 'Cloud Architectures',
              value: 95
            },
            {
              name: 'Amazon Web Services (AWS)',
              value: 90
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
              value: 100
            },
            {
              name: 'Angular 2+',
              value: 90
            },
            {
              name: 'React',
              value: 50
            },
            {
              name: 'Ember',
              value: 40
            },
            {
              name: 'jQuery',
              value: 100
            }
          ]
        },
        {
          name: 'Frontend UI/Component Frameworks',
          skills: [
            {
              name: 'Quasar',
              value: 100
            },
            {
              name: 'Ionic 2',
              value: 90
            },
            {
              name: 'Ionic 3',
              value: 80
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
              value: 100
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
              value: 100
            },
            {
              name: 'LESS',
              value: 90
            },
            {
              name: 'Stylus',
              value: 100
            }
          ]
        },
        {
          name: 'Frontend Testing Frameworks',
          skills: [
            {
              name: 'Mocha',
              value: 80
            },
            {
              name: 'Jasmine',
              value: 60
            },
            {
              name: 'Cypress',
              value: 95
            },
            {
              name: 'Puppeteer',
              value: 100
            }
          ]
        },
        {
          name: 'Other Frontend Technologies',
          skills: [
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
              value: 100
            },
            {
              name: 'npm',
              value: 100
            },
            {
              name: 'Yarn',
              value: 80
            },
            {
              name: 'Bootstrap',
              value: 100
            },
            {
              name: 'CORS',
              value: 100
            },
            {
              name: 'CSRF',
              value: 80
            },
            {
              name: 'Progressive Web Apps (PWA)',
              value: 100
            },
            {
              name: 'Single Page Apps (SPA)',
              value: 100
            },
            {
              name: 'Server Side Rendering (SSR)',
              value: 100
            },
            {
              name: 'Flux',
              value: 70
            },
            {
              name: 'Redux',
              value: 50
            },
            {
              name: 'Vuex',
              value: 80
            },
            {
              name: 'Search Engine Optimization (SEO)',
              value: 100
            },
            {
              name: 'Chrome Extensions',
              value: 80
            },
            {
              name: 'Content Delivery Networs (CDNs)',
              value: 80
            },
            {
              name: 'Babel',
              value: 100
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
              value: 100
            },
            {
              name: 'Fastify',
              value: 100
            },
            {
              name: 'Helmet',
              value: 70
            },
            {
              name: 'Sequelize',
              value: 80
            }
          ]
        },
        {
          name: 'Relational Databases',
          skills: [
            {
              name: 'Postgres (PgSQL)',
              value: 100
            },
            {
              name: 'MySQL',
              value: 80
            }
          ]
        },
        {
          name: 'Non-Relational Databases',
          skills: [
            {
              name: 'MongoDB',
              value: 90
            },
            {
              name: 'Firebase',
              value: 80
            },
            {
              name: 'Redis',
              value: 70
            },
            {
              name: 'Neo4j',
              value: 60
            }
          ]
        },
        {
          name: 'Development Tools / DevOps Tools / OS',
          skills: [
            {
              name: 'VS Code',
              value: 100
            },
            {
              name: 'Atom',
              value: 70
            },
            {
              name: 'Sublime',
              value: 80
            },
            {
              name: 'Github',
              value: 100
            },
            {
              name: 'SVN',
              value: 80
            },
            {
              name: 'Docker',
              value: 80
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
              value: 100
            },
            {
              name: 'Mac OS',
              value: 100
            },
            {
              name: 'Linux',
              value: 90
            }
          ]
        },
        {
          name: 'Other Technical Skills',
          skills: [
            {
              name: 'OAuth',
              value: 95
            },
            {
              name: 'Kafka',
              value: 75
            },
            {
              name: 'AWS SQS',
              value: 80
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
              value: 80
            },
            {
              name: 'Algorithms',
              value: 95
            },
            {
              name: 'Datastructures',
              value: 95
            },
            {
              name: 'Design Patterns',
              value: 90
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
              value: 80
            },
            {
              name: 'Arduino / Raspberry Pi',
              value: 80
            }
          ]
        },
        {
          name: 'Non Technical Skills',
          skills: [
            {
              name: 'Cooking / Baking',
              value: 100
            },
            {
              name: 'Painting / Sketching',
              value: 90
            },
            {
              name: 'Singing',
              value: 80
            },
            {
              name: 'Oratory',
              value: 90
            },
            {
              name: 'Quizzing',
              value: 75
            }
          ]
        }
      ],
      search: null
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
  }
}
</script>
<style lang="scss" scoped>
.skills-pg {
  background: $background;
}
h5 {
  color: $accent !important;
  text-decoration: underline;
}
</style>
