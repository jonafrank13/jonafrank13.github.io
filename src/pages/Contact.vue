<template>
  <q-page class="flex content-center flex-center contact-page q-py-md q-px-xl">
    <!-- <h4 class="full-width text-secondary text-center text-bold q-mb-sm">Contact</h4> -->
    <div class="full-width flex justify-center items-end">
      <q-btn round class="transparent q-mx-md" type="a" href="tel:+91-9445544689" target="_blank" flat icon="img:statics/icons/call.png">
        <q-tooltip anchor="top middle" self="bottom middle">
          Mobile
        </q-tooltip>
      </q-btn>
      <q-btn round class="transparent q-mx-xs q-mb-xl items-end" type="a" href="mailto:jona.mailbox@gmail.com?subject=Hello Jona&body=Your website took me here!%0D%0DI would like to..." target="_blank" flat icon="img:statics/icons/mail.png">
        <q-tooltip anchor="top middle" self="bottom middle">
          E-Mail
        </q-tooltip>
      </q-btn>
      <q-btn round class="transparent q-mx-md" type="a" href="https://api.whatsapp.com/send?phone=919445544689&text=Hello%20Jona" target="_blank" flat icon="img:statics/icons/whatsapp.png">
        <q-tooltip anchor="top middle" self="bottom middle">
          Whatsapp
        </q-tooltip>
      </q-btn>
    </div>
    <footer-link />
    <h4 class="full-width text-warning text-center text-bold q-ma-lg">Location</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675362405!2d80.06892549968006!3d13.047487786186098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1586931981610!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </q-page>
</template>

<script>
import FooterLink from '../components/FooterLink'
export default {
  name: 'Contact',
  components: {
    FooterLink
  }
}
</script>
