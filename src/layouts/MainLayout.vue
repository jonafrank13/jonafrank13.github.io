<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      :width="280"
      :breakpoint="500"
      content-class="bg-primary flex justify-between"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <div class="menu-img"></div>
          <div class="text-center text-bold text-secondary q-mt-md full-width text-h5">Jona Frank S</div>
          <div class="text-center text-white full-width" style="font-size: 12px">Perpetual Philomath <br> Perennially Sanguine</div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <footer-link class="full-width" />
    </q-drawer>

    <q-page-container class="relative-position">
      <q-btn
        flat
        dense
        round
        icon="menu"
        color="secondary"
        aria-label="Menu"
        class="fixed-top-left"
        size="lg"
        style="z-index: 10;padding-left: inherit;"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import FooterLink from 'components/FooterLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    FooterLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Home Page',
          icon: 'home',
          link: '/'
        },
        {
          title: 'About',
          caption: 'A small summary of me',
          icon: 'face',
          link: '/about'
        },
        {
          title: 'Skills',
          caption: 'My skillset',
          icon: 'build',
          link: '/skills'
        },
        {
          title: 'Experience',
          caption: 'Summary of my work experience',
          icon: 'work',
          link: '/experience'
        },
        {
          title: 'Projects',
          caption: 'Some cool projects I have worked on',
          icon: 'assignment',
          link: '/projects'
        },
        {
          title: 'Education',
          caption: 'My education & Certification details',
          icon: 'school',
          link: '/education'
        },
        {
          title: 'Contact Details',
          caption: 'My contact details',
          icon: 'contact_phone',
          link: '/contact'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.menu-img
  height 100px
  width 100px
  margin auto
  background url('../statics/jona.png') no-repeat
  background-size cover
  margin-top 20px
  border-radius 50%
  border 2px solid white
</style>
