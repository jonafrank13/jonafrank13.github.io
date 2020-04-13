<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    exact
    active-class="highlight"
    class="q-py-md"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" color="warning" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-accent text-bold">{{ title }}</q-item-label>
      <q-item-label class="text-white" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
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
}
</script>
<style lang="stylus" scoped>
.highlight
  background rgba($primary, 0.2)
  pointer-events none
</style>
