(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{3097:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex content-center flex-center contact-page q-py-md q-px-xl"},[a("div",{staticClass:"content text-center",class:e.$q.dark.isActive?"bg-primary":""},[a("h4",{staticClass:"full-width text-accent text-bold q-mt-sm q-mb-lg"},[e._v("About You")]),e.userData.region?[a("p",[e._v("Hi visitor, You seem to be accessing the my website from the ip address 📡 "),a("i",[e._v(e._s(e.userData.ip))]),e._v(", your internet service provider is "),a("i",[e._v(e._s(e.userData.org))])]),a("p",[e._v("I see that you are using a "),a("i",[e._v(e._s(e.userData.device.brand)+" "+e._s(e.userData.device.type))]),e._v(" 💻 specifically a "),a("i",[e._v(e._s(e.userData.client.name))]),e._v(" browser 🌐 , which is on version 🚥"),a("i",[e._v(e._s(e.userData.client.version))])]),a("p",[e._v("Your OS 💿 seems to be "),a("i",[e._v(e._s(e.userData.os.name))]),e._v(", which is on version 🚥"),a("i",[e._v(e._s(e.userData.os.version))]),e._v(" "),e.userData.memory?a("span",[e._v("having at least "+e._s(e.userData.memory)+" GB of RAM.")]):e._e()]),a("p",[e._v("I sense that you are currently at  🌎"),a("i",[e._v(e._s(e.userData.latitude)+"°")]),e._v(" latitude and 🌎"),a("i",[e._v(e._s(e.userData.longitude)+"°")]),e._v(" longitude, which is around 🗺️"),a("i",[e._v(e._s(e.userData.city)+",")]),e._v(" "),a("i",[e._v(e._s(e.userData.region)+",")]),e._v(" "),a("i",[e._v(e._s(e.userData.country_name))]),e.userData.postal?a("span",[e._v(" with the 🏙 zipcode "),a("i",[e._v(e._s(e.userData.postal))])]):e._e()]),a("p",[e._v("Your device's screen ↕️ height is "),a("i",[e._v(e._s(e.userData.height))]),e._v(" pixels and screen ↔️ width is "),a("i",[e._v(e._s(e.userData.width))]),e._v(" pixels, "),e.userData.mode?a("span",[e._v(" Your device is currently in the "),a("i",[e._v(e._s(e.userData.mode))]),e._v(" "+e._s("landscape"===e.userData.mode?"🖥":"📱")+" mode")]):e._e(),e.userData.angle?a("span",[e._v(" and seems to be tilted at a "),a("i",[e._v(e._s(e.userData.angle)+"°")]),e._v("angle")]):e._e()]),e.userData.orientation?a("p",[e._v("\n        Your device's current orientation is x: "),a("i",[e._v(e._s(e.userData.orientation.alpha))]),e._v(" y: "),a("i",[e._v(e._s(e.userData.orientation.beta))]),e._v(" z: "),a("i",[e._v(e._s(e.userData.orientation.gamma))])]):e._e(),e.userData.battery?a("p",[a("span",[e._v("Your battery 🔋 seems to be having "),a("i",[e._v(e._s(Math.round(100*e.userData.battery.level))+"%")]),e._v(" charge and is currently 🔌 "),a("i",[e.userData.battery.charging?e._e():a("span",[e._v("not ")]),e._v("charging")])])]):e._e(),e.userData.connection?a("p",[a("span",[e._v("Your network speed 🏃🏾‍♂️ seems to be around "),a("i",[e._v(e._s(e.userData.connection.downlink)+" mbps ⚡️")]),e._v(" which is effectively a "),a("i",[e._v(e._s(e.userData.connection.effectiveType))]),e._v(" connection 🔗")])]):e._e(),a("p",[e._v("Your browser / device is set to "),a("i",[e._v(e._s(e.userData.darkMode?"dark":"light"))]),e._v(" "+e._s(e.userData.darkMode?"🌚":"🌞")+" mode")])]:a("q-spinner-ball",{attrs:{color:"secondary",size:"10em"}})],2)])},i=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c5f6"),a("c47a")),s=a.n(r),o=a("096e"),c=a.n(o);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"You",data:function(){return{userData:{}}},mounted:function(){var e,t,a,n,i,r=this,s=(new c.a).parse(window.navigator.userAgent),o=window.matchMedia("(prefers-color-scheme: dark)").matches,u=window.navigator.connection,d=window.navigator.deviceMemory,_=window.innerHeight,l=window.innerWidth,p=null===(e=window.screen)||void 0===e||null===(t=e.orientation)||void 0===t?void 0:t.angle,h=(null===(a=window.screen)||void 0===a||null===(n=a.orientation)||void 0===n||null===(i=n.type)||void 0===i?void 0:i.indexOf("landscape"))>-1?"landscape":"portrait";fetch("https://ipapi.co/json/").then((function(e){return e.json()})).then((function(e){r.userData=v({},e,{},s,{connection:u,memory:d,height:_,width:l,angle:p,mode:h,darkMode:o}),window.addEventListener("deviceorientation",r.handleOrientation,!0),window.addEventListener("orientationchange",r.handleScreenOrientation,!1),window.navigator.getBattery().then((function(e){r.$set(r.userData,"battery",e)}))}))},methods:{handleOrientation:function(e){var t=Number(e.alpha).toFixed(2),a=Number(e.beta).toFixed(2),n=Number(e.gamma).toFixed(2);this.$set(this.userData,"orientation",{alpha:t,beta:a,gamma:n})},handleScreenOrientation:function(){var e,t,a,n,i,r=null===(e=window.screen)||void 0===e||null===(t=e.orientation)||void 0===t?void 0:t.angle,s=(null===(a=window.screen)||void 0===a||null===(n=a.orientation)||void 0===n||null===(i=n.type)||void 0===i?void 0:i.indexOf("landscape"))>-1?"landscape":"portrait";this.$set(this.userData,"angle",r),this.$set(this.userData,"mode",s)}},beforeDestroy:function(){window.removeEventListener("resize",this.handleOrientation)}},_=d,l=(a("3263"),a("2877")),p=a("eebe"),h=a.n(p),w=a("9989"),m=a("a403"),g=Object(l["a"])(_,n,i,!1,null,"6e072c09",null);t["default"]=g.exports;h()(g,"components",{QPage:w["a"],QSpinnerBall:m["a"]})},3263:function(e,t,a){"use strict";var n=a("6ca5"),i=a.n(n);i.a},"6ca5":function(e,t,a){}}]);