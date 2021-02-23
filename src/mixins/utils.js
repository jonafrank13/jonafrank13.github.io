export const utils = {
  methods: {
    vibrate: function () {
      if (window?.navigator?.vibrate) {
        navigator.vibrate(75)
      }
    }
  }
}
