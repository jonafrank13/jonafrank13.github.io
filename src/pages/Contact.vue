<template>
  <q-page class="flex justify-center items-start contact-page q-py-md q-px-xl">
    <h4 class="full-width text-secondary text-center text-bold q-ma-none">Contact Options</h4>
    <div class="full-width flex flex-center">
      <q-btn round class="transparent q-mx-md" type="a" href="tel:+91-9445544689" target="_blank" flat icon="img:statics/icons/call.png" />
      <q-btn round class="transparent q-mx-md" type="a" href="https://api.whatsapp.com/send?phone=919445544689" target="_blank" flat icon="img:statics/icons/whatsapp.png" />
      <q-btn round class="transparent q-mx-md" type="a" href="mailto:jona.mailbox@gmail.com" target="_blank" flat icon="img:statics/icons/mail.png" />
    </div>
    <footer-link />
    <h4 class="full-width text-warning text-center text-bold q-ma-none">Current Location</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.071516783752!2d80.2283263!3d12.8386551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a5909fb963d%3A0x36af8ed34d22ba5b!2sEmami%20Tejomaya!5e0!3m2!1sen!2sin!4v1586762325838!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
<style lang="scss" scoped>
.contact-page {
  background: $background;
}
</style>
