<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl">
    <div class="bg-primary content text-center">
      <h4 class="full-width text-secondary text-bold q-mt-none">About Me</h4>
      Jona Frank is a <i>fun loving, jovial, techinically sound and a very friendly</i> person.<br>
      He is fond of working with the cutting edge technologies and loves to learn new things (ergo a perpetual philomath as he describes himself).
      He is a <i>pure bred chennaiite</i> by heart, mind and soul reflecting everything it offers...
      right from it's <i>uber exuberant class</i> to it's <i>modest marana mass!</i>
      He loves <i>food (cooking included), travel, adventure, reading and serving people.</i>
      He is usually attributed the <i>textbook definition of a geek/techie</i>. He is a <i>voratious reader</i> and reads everything that comes across his table.
      He has a <i>penchant for delving deep into understanding how anything and everything works.</i> In his free time, you would find him either learning something
      avant-garde or tinkering with his rasberry pi/arduino, coming up with new pet projects, driving around town or cooking some delecious food/baking cakes/dessets etc,
      Apart from his full time job of being a geek and an <i>ordained sys-admin for his family and friends</i> that is.
      He is also a <i>trained jazz dancer and loves playing badminton as well.</i> He loves to <i>make people happy and being the reason for their smile (as described by his friends).</i>
      <br>
      His Favorite quotes are :
      <br>
      <i class="text-white text-left">&#9673; Talent without tenacity is like a seed without water.</i><br>
      <i class="text-white text-left">&#9673; You are always one decision away from a completely different life.</i><br>
      <i class="text-white text-left">&#9673; You Must Learn from the Mistakes of Others. You Will Never Live Long Enough to Make Them All Yourself</i>
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
