<template>
  <q-layout view="lHh Lpr lFf" :class="$q.dark.isActive ? 'bg-background' : ''">
    <q-drawer
      v-model="leftDrawerOpen"
      :width="280"
      :breakpoint="500"
      :content-class="$q.dark.isActive ? 'flex justify-between bg-primary' : 'flex justify-between'"
    >
      <q-list style="max-height: calc(100% - 68px);overflow-y: auto; -webkit-overflow-scrolling: touch;">
        <q-item-label
          header
          class="text-grey-8 q-pb-none"
          :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
          style="position: sticky; top: 0;z-index: 9;"
        >
          <div class="menu-img"></div>
          <div class="text-center text-bold text-secondary q-mt-md full-width text-h5">Jona Frank S</div>
          <div class="text-center full-width" :class="$q.dark.isActive ? 'text-white' : 'text-primary'" style="font-size: 12px">Perpetual Philomath <br> Perennially Sanguine</div>
          <div class="text-center full-width q-py-xs">
            <vue-typer
              :text='roles'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='30'
              erase-style='backspace'
              :erase-on-complete='false'
              caret-animation='smooth'
              class='text-center'
            ></vue-typer>
          </div>
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
            :label="$q.dark.isActive ? 'Dark Mode' : 'Light Mode'"
            @input="handlePallet()"
          />
        </q-item>
        <q-item>
          <q-btn
            outline
            class="full-width"
            color="warning"
            @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
          />
        </q-item>
      </q-list>
      <div class="full-width flex column justify-end">
        <footer-link />
        <!-- DO NOT REMOVE THIS LINE -->
        <div style="border-top: 0.5px solid white" class="text-center text-caption text-weight-thin">Made by - <a class="text-warning" href="https://jonafrank13.github.io/">Jona Frank</a> - 2021</div>
        <!-- DO NOT REMOVE THIS LINE -->
      </div>
    </q-drawer>

    <q-page-container v-scroll="handleScroll" class="relative-position">
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
        @click="handleMenuClick"
      />
      <transition
        name="transitions"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
      >
        <router-view />
      </transition>
      <transition
        name="transitions"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
        mode="out-in"
      >
        <q-page-sticky v-if="scrollPosition > 200" position="bottom-right" :offset="[15, 15]">
          <q-btn fab-mini icon="keyboard_arrow_up" @click="windowObj.scroll({ top: 0, behavior: 'smooth' });vibrate();" color="warning" />
        </q-page-sticky>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import FooterLink from 'components/FooterLink'
import { VueTyper } from 'vue-typer'
import { utils } from 'src/mixins/utils'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    FooterLink,
    VueTyper
  },

  data () {
    return {
      scrollPosition: 0,
      leftDrawerOpen: false,
      menuClicked: false,
      roles: ['Principal Software Engineer', 'Javascript Ninja', 'Technical Software Architect', 'Technical Product Manager'],
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Home Page',
          icon: 'home',
          link: '/'
        },
        {
          title: 'About',
          caption: 'Who is this guy?',
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
          title: 'About You',
          caption: 'See what i know 😉',
          icon: 'blur_on',
          link: '/you'
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
      this.vibrate()
      localStorage.setItem('dark', this.$q.dark.isActive)
    },
    handleScroll: function (pos) {
      this.scrollPosition = pos
    },
    handleMenuClick: function () {
      this.leftDrawerOpen = !this.leftDrawerOpen
      this.menuClicked = true
      this.vibrate()
    }
  },

  mounted: function () {
    if (localStorage.getItem('dark') === null) {
      localStorage.setItem('dark', true)
    }
    this.$q.dark.set(localStorage.getItem('dark') === 'true')
  },

  mixins: [utils]
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
