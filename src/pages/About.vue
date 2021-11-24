<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About Jona</h4>
      Jona Frank is a <i>fun loving, jovial, techinically sound, highly ambitious, overtly organized and very friendly</i> person.
      He is fond of working with cutting-edge technologies and loves to learn new things (ergo a perpetual philomath as he describes himself).
      <span v-if="is_personal">He loves <i>food (cooking included), travel, adventure, painting, sketching, poetry, reading and serving people.</i></span>
      He is usually attributed the <i>textbook definition of a geek/techie</i>. He is a <i>voracious reader</i> and reads everything that comes across his desk.
      He has a <i>penchant for delving deep into understanding how anything and everything works.</i> In his free time, you would find him either learning something
      avant-garde or tinkering with his raspberry pi/arduino, coming up with new pet projects, painting, <span v-if="is_personal">sketching, writing poetry, driving around town or cooking some delicious food/baking cakes/desserts etc</span><span v-else>or sketching</span>;
      apart from his full-time job of being a geek and an <i>ordained sys-admin for his family and friends</i> that is.
      <span v-if="is_personal">He is also a <i>trained jazz dancer and loves playing badminton.</i> He loves to <i>make people happy and being the reason for their smile (as described by his friends).</i></span>
      <div v-if="is_personal" class="q-mt-sm">
      <br>
      His favorite quotes are :
      <br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">Talent without tenacity is like a seed without water.</i><br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">You are always one decision away from a completely different life.</i><br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">You must learn from the mistakes of others. You will never live long enough to make them all yourself.</i><br>
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">Jack of all trades, master of none, though oftentimes better than master of one.</i>
      <marquee class="q-my-lg text-bold"><h5>Travel 🛫 Eat 🍜 Serve 🙏🏻 Learn 📚 Laugh 😆 Love 🥰 Lose Control 🤪 Have Fun 🥳 Smartly 🤓 & Wisely 😎</h5></marquee>
      </div>
      <span v-else>
        <br>
        <br>
        <div class="text-left text-accent">Summary of his technical acumen & experience (in his own words)</div>
        <br>
        <ul class="text-left tech-list" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">
          <li>Highly trained with expertise and deep knowledge in all things javascript , node , frontend , middleware, frontend Architecture and web development &lt;foraying into micro frontend architectures, IOTs and chatbots (Dialogflow)&gt;</li>
          <li>Well versed in application architecture, design and full stack development with primary focus and expertise in JavaScript (node) based stack and secondary focus in Java and Python based stack</li>
          <li>Architected and Solutioned multiple highly available, resilient, fault tolerant products and applications with architectural components such as load balancers, caches (Redis), CDNs (Cloudflare), Queues (SQS, Kafka, Rabbit MQ), Databases (Postgres, Firebase, MongoDB) and micro services</li>
          <li>Developed, Architected and shipped couple of apps with service orchestration / service choreography based microservice backends / middleware that scales elastically</li>
          <li>Worked with both micro services and monolithic (Enterprise) architectures with basic knowledge in scaling systems vertically and horizontally, developed products in Cloud Native architectures, n-tire web applications, batch systems, message / event driven systems, IAM, OAuth 2.0 solutions etc</li>
          <li>Experience in setting up high velocity runway for applications with continuous delivery model & SOPs using project management models such as Agile, Scrum, XP and Waterfall</li>
          <li>Worked with AWS products such as EC2, VPC, SQS, Load Balancer etc for deploying solutions on the Cloud</li>
          <li>Working with startups gave me the opportunity to wear multiple hats and take up/gain experience in Product Management and Software Architect roles as well, personally I prefer the frontend architecture and development work as I can visibly see my work on screen and I have polished my skills to get pixel perfect UI and UX for users</li>
          <li>Expert problem solving, workaround development, communication & presentation skills</li>
          <li>Fully self sufficient and capable of shipping an application from scratch as an Individual Contributor (IC) as well as leading a team to achieve the same end goals, my career path has helped me achieve this dual proficiency</li>
          <li>Proven legacy in people management skills, with excellent feedback from the people I have worked with and lead, A strong proponent of the servant leadership & tribe leadership philosophies</li>
          <li>Currently exploring and working with web-3.0 tech, DApps, De-Fi, Solidity, DDbs, IPFS, IPNS, Smart Contracts etc</li>
          <li>My Career trajectory is focused on becoming a technical product manager/engineering manager &lt;basically looking for the ability to own product / features&gt; in the short term and eventually a CTO in the long term</li>
        </ul>
      </span>
    </div>
    <div class="q-my-md full-width flex justify-center">
      <div class="text-warning" style="padding-top:14.5px">Professional</div>
      <q-toggle class="text-warning" :dark="$q.dark.isActive" color="secondary" size="lg" label="Personal" @input="vibrate" v-model="is_personal" />
    </div>
  </q-page>
</template>

<script>
import { utils } from 'src/mixins/utils'

export default {
  name: 'About',
  data () {
    return {
      is_personal: false
    }
  },
  mixins: [utils]
}
</script>
<style lang="scss" scoped>
.content {
  border: 1px solid;
  border-radius: 10px;
  padding: 25px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  i {
    color: $secondary;
    font-size: 15px;
  }
  .tech-list {
    margin-top: 0;
    padding-left: 15px;
  }
}
</style>
