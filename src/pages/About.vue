<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl">
    <div class="bg-primary content text-center">
      <h4 class="full-width text-secondary text-bold q-mt-none">About Jona</h4>
      Jona Frank is a <i>fun loving, jovial, techinically sound and very friendly</i> person.<br>
      He is fond of working with cutting-edge technologies and loves to learn new things (ergo a perpetual philomath as he describes himself).
      He is a <i>pure-bred Chennaiite</i> by heart, mind and soul reflecting everything it offers...
      right from its <i>uber exuberant class</i> to its <i>modest marana mass!</i>
      He loves <i>food (cooking included), travel, adventure, painting, sketching, poetry, reading and serving people.</i>
      He is usually attributed the <i>textbook definition of a geek/techie</i>. He is a <i>voracious reader</i> and reads everything that comes across his desk.
      He has a <i>penchant for delving deep into understanding how anything and everything works.</i> In his free time, you would find him either learning something
      avant-garde or tinkering with his raspberry pi/arduino, coming up with new pet projects, painting, sketching, writing poetry, driving around town or cooking some delecious food/baking cakes/desserts etc,
      apart from his full-time job of being a geek and an <i>ordained sys-admin for his family and friends</i> that is.
      He is also a <i>trained jazz dancer and loves playing badminton.</i> He loves to <i>make people happy and being the reason for their smile (as described by his friends).</i>
      <br>
      His favorite quotes are :
      <br>
      &#9673; <i class="text-white text-left">Talent without tenacity is like a seed without water.</i><br>
      &#9673; <i class="text-white text-left">You are always one decision away from a completely different life.</i><br>
      &#9673; <i class="text-white text-left">You must learn from the mistakes of others. You will never live long enough to make them all yourself.</i>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Education'
}
</script>
<style lang="scss" scoped>
.abt-page {
  background: $background;
}
.content {
  border-radius: 10px;
  padding: 10px;
  color: $warning;
  font-weight: bold;
  font-size: 24px;
  i {
    color: $accent;
    font-size: 25px;
  }
}
</style>
