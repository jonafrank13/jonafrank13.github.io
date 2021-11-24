<template>
  <q-page class="flex projects-page">
    <div class="q-pa-xl row items-start justify-md-between justify-center q-gutter-md">
      <q-card class="project-card" :class="$q.dark.isActive ? 'bg-primary' : 'bd-light'" :dark="false" v-for="project in projects" :key="project.name" flat bordered>
        <q-img
          width="298px"
          height="160px"
          :src="project.img"
        />
        <q-card-section class="project-card-box">
          <div class="text-warning">{{project.date}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-accent">{{project.name}}</div>
          <div class="text-caption text-grey">{{project.desc}}</div>
        </q-card-section>
        <q-card-actions class="absolute-bottom project-card-bottom">
          <q-btn flat :color="$q.dark.isActive ? 'white' : 'black'" type="a" :href="project.link" target="_blank" icon="link" label="View Project" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'this.',
          date: 'April 2020',
          desc: 'Designed the UI/UX and developed my personal portfolio website',
          link: 'https://jonafrank13.github.io/',
          img: '/statics/website.png'
        },
        {
          name: 'Corona Virus Risk Calculator',
          date: 'March 2020',
          desc: 'Created a vue app to calculate the risk percentage for contracting the virus',
          link: 'https://jonafrank13.github.io/corona/#/',
          img: '/statics/corona.png'
        },
        {
          name: 'Wordpress Blog Viewer',
          date: 'March 2020',
          desc: 'Created a web app to view wordpress blogs using Wordpress APIs',
          link: 'https://jonafrank13.github.io/blog/#/',
          img: '/statics/blog.png'
        },
        {
          name: 'Simple Meeting Scheduler',
          date: 'Sep 2019',
          desc: 'Created a vue app to schedule meetings in the browser itself using localStorage, has some nifty features',
          link: 'https://jonafrank13.github.io/calendar/#/',
          img: '/statics/calendar.png'
        },
        {
          name: 'Brimma Tech Official Website',
          date: 'Jan 2018',
          desc: 'Created the official website for the company',
          link: 'https://brimmatech.com/',
          img: '/statics/brimma.png'
        },
        {
          name: 'GrabGrubScribe',
          date: 'Dec 2017',
          desc: 'Created a app similar to swiggy (POC)',
          link: 'https://jonafrank13.github.io/grabgrubscribe/',
          img: '/statics/ggs.png'
        },
        {
          name: 'Hackernews PWA',
          date: 'Sep 2017',
          desc: 'Created a PWA for hackernews using it\'s public APIs',
          link: 'https://jonafrank13.github.io/hnpwa-quasar/',
          img: '/statics/hnpwa.png'
        },
        {
          name: 'ElectroOculogram - Eye Gesture Recognition',
          date: 'Sep 2012',
          desc: 'Created a User - Computer/Platform Interface using electrooculogram based gesture recognition',
          link: 'http://onloop.net/hairyplotter/',
          img: '/statics/eog.png'
        },
        {
          name: 'Github Repository (Rest of my projects)',
          date: 'Jun 2013 - Present',
          desc: 'Collection of all the rest of my projects that live on github',
          link: 'https://github.com/jonafrank13',
          img: '/statics/git.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.project-card {
  min-height: 400px;
  max-width: 300px;
  position: relative;
  border: 1px solid white;
  overflow: hidden;
  border-radius: 8px;
}
.project-card-box, .project-card-bottom {
  border-top: 1px solid;
}
.bd-light {
  border-color: $border;
}
</style>
