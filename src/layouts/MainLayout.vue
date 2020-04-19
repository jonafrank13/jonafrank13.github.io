<template>
  <q-layout view="lHh Lpr lFf" :class="$q.dark.isActive ? 'bg-background' : ''">
    <q-drawer
      v-model="leftDrawerOpen"
      :width="280"
      :breakpoint="500"
      :content-class="$q.dark.isActive ? 'flex justify-between bg-primary' : 'flex justify-between'"
    >
      <q-list style="max-height: calc(100% - 48px);overflow-y: auto; -webkit-overflow-scrolling: touch;">
        <q-item-label
          header
          class="text-grey-8"
          :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
          style="position: sticky; top: 0;z-index: 9"
        >
          <div class="menu-img"></div>
          <div class="text-center text-bold text-secondary q-mt-md full-width text-h5">Jona Frank S</div>
          <div class="text-center full-width" :class="$q.dark.isActive ? 'text-white' : 'text-primary'" style="font-size: 12px">Perpetual Philomath <br> Perennially Sanguine</div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item>
          <q-toggle
            :value="$q.dark.isActive"
            checked-icon="nights_stay"
            color="black"
            keep-color
            class="text-accent toggle-btn"
            unchecked-icon="wb_sunny"
            label="Dark Mode"
            @input="handlePallet()"
          />
        </q-item>
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
        class="fixed-top-left animated infinite slow"
        :class="menuClicked ? '' : 'heartBeat'"
        size="lg"
        style="z-index: 10;padding-left: inherit;"
        @click="leftDrawerOpen = !leftDrawerOpen;menuClicked = true;"
      />
      <transition
        name="transitions"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
      >
        <router-view />
      </transition>
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
      menuClicked: false,
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
  },

  methods: {
    handlePallet: function () {
      this.$q.dark.toggle()
      localStorage.setItem('dark', this.$q.dark.isActive)
    }
  },

  mounted: function () {
    if (localStorage.getItem('dark') === null) {
      localStorage.setItem('dark', true)
    }
    this.$q.dark.set(localStorage.getItem('dark') === 'true')
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
.toggle-btn
  >>> .q-toggle__inner
    position relative
    left -12px
  >>> .q-toggle__label
    font-weight bold
</style>
