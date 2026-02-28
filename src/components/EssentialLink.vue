<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    exact
    active-class="highlight"
    class="q-py-md"
    @click="vibrate"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="warning" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-accent text-bold">{{ title }}</q-item-label>
      <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { utils } from 'src/mixins/utils'

export default defineComponent({
  name: 'EssentialLink',

  mixins: [utils],

  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.highlight {
  background: rgba($secondary, 0.4);
  pointer-events: none;
}
</style>
