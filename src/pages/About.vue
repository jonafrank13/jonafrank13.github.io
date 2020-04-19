<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About Jona</h4>
      Jona Frank is a <i>fun loving, jovial, techinically sound and very friendly</i> person.
      He is fond of working with cutting-edge technologies and loves to learn new things (ergo a perpetual philomath as he describes himself).
      <span v-if="is_personal">He loves <i>food (cooking included), travel, adventure, painting, sketching, poetry, reading and serving people.</i></span>
      He is usually attributed the <i>textbook definition of a geek/techie</i>. He is a <i>voracious reader</i> and reads everything that comes across his desk.
      He has a <i>penchant for delving deep into understanding how anything and everything works.</i> In his free time, you would find him either learning something
      avant-garde or tinkering with his raspberry pi/arduino, coming up with new pet projects, painting, <span v-if="is_personal">sketching, writing poetry, driving around town or cooking some delicious food/baking cakes/desserts etc</span><span v-else>or sketching</span>;
      apart from his full-time job of being a geek and an <i>ordained sys-admin for his family and friends</i> that is.
      <span v-if="is_personal">He is also a <i>trained jazz dancer and loves playing badminton.</i> He loves to <i>make people happy and being the reason for their smile (as described by his friends).</i></span>
      <span v-if="is_personal">
      <br>
      His favorite quotes are :
      <br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">Talent without tenacity is like a seed without water.</i><br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">You are always one decision away from a completely different life.</i><br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">You must learn from the mistakes of others. You will never live long enough to make them all yourself.</i>
      </span>
    </div>
    <!-- <div class="q-my-md full-width flex justify-center">
      <div class="text-warning" style="padding-top:14.5px">Professional</div>
      <q-toggle class="text-warning" :dark="$q.dark.isActive" color="secondary" size="lg" label="Personal" v-model="is_personal" />
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      is_personal: false
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 15px;
  i {
    color: $secondary;
    font-size: 16px;
  }
}
</style>
