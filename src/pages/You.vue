<template>
  <q-page class="flex content-center flex-center contact-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About You</h4>
      <template v-if="loaded">
        <p v-if="userData.ip">
          Hi visitor, You seem to be accessing my website from the ip address 📡
          <i>{{ userData.ip }}</i
          ><span v-if="userData.org"
            >, your internet service provider is <i>{{ userData.org }}</i></span
          >
        </p>
        <p v-if="userData.device?.brand || userData.client?.name">
          I see that you are using a
          <i>{{ userData.device?.brand }}&nbsp;{{ userData.device?.type }}</i
          >&nbsp;💻&nbsp;specifically a <i>{{ userData.client?.name }}</i> browser 🌐 ,
          which is on version 🚥<i>{{ userData.client?.version }}</i>
        </p>
        <p v-if="userData.os?.name">
          Your OS 💿 seems to be <i>{{ userData.os?.name }}</i
          >, which is on version 🚥<i>{{ userData.os?.version }}</i
          >&nbsp;<span v-if="userData.memory"
            >having at least <i>{{ userData.memory }} GB</i> of RAM</span
          >
        </p>
        <p v-if="userData.region">
          I sense that you are currently at &nbsp;🌎<i>{{ userData.latitude }}&#176;</i>
          latitude and&nbsp;🌎<i>{{ userData.longitude }}&#176;</i> longitude, which is
          around 🗺️<i>{{ userData.city }},</i>&nbsp;<i>{{ userData.region }},</i>&nbsp;<i
            >{{ userData.country_name }}</i
          ><span v-if="userData.postal">
            with the 🏙 zipcode <i>{{ userData.postal }}</i></span
          >
        </p>
        <p>
          Your device's screen ↕️ height is <i>{{ userData.height }}</i
          >&nbsp;pixels and screen ↔️ width is <i>{{ userData.width }}</i
          >&nbsp;pixels,
          <span v-if="userData.mode">
            Your device is currently in the <i>{{ userData.mode }}</i
            >&nbsp;{{ userData.mode === "landscape" ? "🖥" : "📱" }}&nbsp;mode</span
          ><span v-if="userData.angle">
            and seems to be tilted at a <i>{{ userData.angle }}&#176;</i>angle</span
          >
        </p>
        <p v-if="userData.orientation">
          Your device's current orientation is x:&nbsp;<i>{{
            userData.orientation.alpha
          }}</i
          >&nbsp;y:&nbsp;<i>{{ userData.orientation.beta }}</i
          >&nbsp;z:&nbsp;<i>{{ userData.orientation.gamma }}</i>
        </p>
        <p v-if="userData.battery">
          <span
            >Your battery 🔋 seems to be having
            <i>{{ Math.round(userData.battery.level * 100) }}%</i>&nbsp;charge and is
            currently 🔌&nbsp;<i
              ><span v-if="!userData.battery.charging">not&nbsp;</span>charging</i
            ></span
          >
        </p>
        <p v-if="userData.connection">
          <span
            >Your network speed 🏃🏾‍♂️ seems to be around
            <i>{{ userData.connection.downlink }}&nbsp;mbps ⚡️</i>&nbsp;which is
            effectively a&nbsp;<i>{{ userData.connection.effectiveType }}</i
            >&nbsp;connection 🔗</span
          >
        </p>
        <p v-if="userData.referrer">
          <span
            >You seem to have arrived here from the website 📣
            <i>{{ userData.referrer }}</i
            >&nbsp;</span
          >
        </p>
        <p v-if="userData.clipboard">
          <span
            >You seem to have the following content copied in your clipboard 📋 "<i
              class="ellipsis"
              >{{ userData.clipboard }}</i
            >"&nbsp;</span
          >
        </p>
        <p>
          <span
            >You seem to have accessed the website in
            <i class="ellipsis"
              >{{ userData.incognito ? "incognito" : "non incognito" }} </i
            >mode&nbsp;</span
          >
        </p>
        <p>
          Your browser / device is set to&nbsp;<i>{{
            userData.darkMode ? "dark" : "light"
          }}</i
          >&nbsp;{{ userData.darkMode ? "🌚" : "🌞" }}&nbsp;mode
        </p>

        <!-- NEW FEATURES -->
        <p v-if="userData.cpuCores">
          Your device has <i>{{ userData.cpuCores }}</i> logical CPU core{{
            userData.cpuCores > 1 ? "s" : ""
          }}
          🧠 available to the browser
        </p>
        <p v-if="userData.language">
          Your browser's primary language 🗣️ is set to <i>{{ userData.language }}</i
          ><span v-if="userData.languages && userData.languages.length > 1"
            >, and you also have <i>{{ userData.languages.slice(1).join(", ") }}</i> as
            fallback language{{ userData.languages.length > 2 ? "s" : "" }}</span
          >
        </p>
        <p v-if="userData.timezone">
          Your device's timezone 🕐 is <i>{{ userData.timezone }}</i>
        </p>
        <p v-if="userData.pixelRatio">
          Your display has a pixel ratio of <i>{{ userData.pixelRatio }}x</i> 🖥️ —
          {{
            userData.pixelRatio >= 2
              ? "looks like a high-DPI / Retina display!"
              : "a standard resolution display"
          }}
        </p>
        <p v-if="userData.colorDepth">
          Your screen supports <i>{{ userData.colorDepth }}-bit</i> 🎨 color depth, with
          an available resolution of
          <i>{{ userData.availWidth }} × {{ userData.availHeight }}</i> pixels (excluding
          taskbar/dock)
        </p>
        <p>
          Your browser reports that you are currently
          <i>{{ userData.isOnline ? "online 🟢" : "offline 🔴" }}</i>
        </p>
        <p v-if="userData.pointerType">
          Your primary input device seems to be a <i>{{ userData.pointerType }}</i>
          {{
            userData.pointerType === "touch"
              ? "👆"
              : userData.pointerType === "pen"
              ? "✏️"
              : "🖱️"
          }}<span v-if="userData.canHover !== null"
            >, and your device
            <i>{{ userData.canHover ? "supports" : "does not support" }}</i>
            hovering</span
          >
        </p>
        <p
          v-if="userData.maxTouchPoints !== null && userData.maxTouchPoints !== undefined"
        >
          Your device supports up to <i>{{ userData.maxTouchPoints }}</i> simultaneous
          touch point{{ userData.maxTouchPoints !== 1 ? "s" : "" }} 🤚
        </p>
        <p v-if="userData.doNotTrack !== null">
          Your Do Not Track 🚫 preference is set to
          <i>{{
            userData.doNotTrack === "1"
              ? "enabled"
              : userData.doNotTrack === "0"
              ? "disabled"
              : "unspecified"
          }}</i>
        </p>
        <p>
          Cookies 🍪 are <i>{{ userData.cookiesEnabled ? "enabled" : "disabled" }}</i> in
          your browser
        </p>
        <p v-if="userData.reducedMotion !== null">
          You have <i>{{ userData.reducedMotion ? "enabled" : "not enabled" }}</i> the
          reduced motion ♿ accessibility preference
        </p>
        <p v-if="userData.highContrast !== null">
          You have <i>{{ userData.highContrast ? "enabled" : "not enabled" }}</i> the high
          contrast ⚡ accessibility preference
        </p>
        <p v-if="userData.pageLoadTime">
          This page loaded in approximately <i>{{ userData.pageLoadTime }} ms</i> ⏱️ on
          your device
        </p>
        <p v-if="userData.canvasFingerprint">
          Your browser's unique canvas fingerprint 🖼️ hash is
          <i>{{ userData.canvasFingerprint }}</i>
        </p>
        <p v-if="userData.webglVendor || userData.webglRenderer">
          Your GPU 🎮 is reported as <i>{{ userData.webglRenderer }}</i> by
          <i>{{ userData.webglVendor }}</i>
        </p>
        <p v-if="userData.weather">
          The current weather 🌤️ near your location is
          <i>{{ userData.weather.temperature }}°C</i> with
          <i>{{ userData.weather.description }}</i> and wind speed of
          <i>{{ userData.weather.windspeed }} km/h</i> 💨
        </p>

        <!-- DEVICE ENUMERATION -->
        <div
          v-if="
            userData.usbDevices !== undefined ||
            userData.bluetoothAvailable !== undefined ||
            userData.midiInputs !== undefined ||
            userData.mediaDevices !== undefined
          "
          class="q-mt-md"
        >
          <h6 class="text-accent text-bold q-mb-sm q-mt-none">🔌 Connected Devices</h6>

          <!-- USB Devices -->
          <template v-if="userData.usbDevices !== undefined">
            <p v-if="userData.usbDevices === null">
              Your browser does not support the <i>WebUSB API</i> 🔌
            </p>
            <p v-else-if="userData.usbDevices.length === 0">
              No previously paired <i>USB devices</i> 🔌 were found (you may need to pair
              a device first via the browser prompt)
            </p>
            <div v-else>
              <p>
                You have <i>{{ userData.usbDevices.length }}</i> paired USB device{{
                  userData.usbDevices.length !== 1 ? "s" : ""
                }}
                🔌:
              </p>
              <ul class="text-left q-ml-lg">
                <li v-for="(dev, i) in userData.usbDevices" :key="'usb-' + i">
                  <i>{{ dev.productName || "Unknown Device" }}</i>
                  <span v-if="dev.manufacturerName">
                    by <i>{{ dev.manufacturerName }}</i></span
                  >
                  <span class="text-grey-6">
                    (VID: {{ dev.vendorId?.toString(16).toUpperCase().padStart(4, "0") }},
                    PID:
                    {{
                      dev.productId?.toString(16).toUpperCase().padStart(4, "0")
                    }})</span
                  >
                </li>
              </ul>
            </div>
          </template>

          <!-- Bluetooth -->
          <p v-if="userData.bluetoothAvailable === false">
            Your browser does not support the <i>Web Bluetooth API</i> 📶
          </p>
          <p v-else-if="userData.bluetoothAvailable === true">
            Your browser supports the <i>Web Bluetooth API</i> 📶 — Bluetooth is available
            on this device
          </p>

          <!-- MIDI Devices -->
          <template v-if="userData.midiInputs !== undefined">
            <p v-if="userData.midiInputs === null">
              Your browser does not support the <i>Web MIDI API</i> 🎹
            </p>
            <p
              v-else-if="
                userData.midiInputs.length === 0 && userData.midiOutputs.length === 0
              "
            >
              No <i>MIDI devices</i> 🎹 are currently connected
            </p>
            <div v-else>
              <p v-if="userData.midiInputs.length > 0">
                You have <i>{{ userData.midiInputs.length }}</i> MIDI input{{
                  userData.midiInputs.length !== 1 ? "s" : ""
                }}
                🎹:
              </p>
              <ul v-if="userData.midiInputs.length > 0" class="text-left q-ml-lg">
                <li v-for="(dev, i) in userData.midiInputs" :key="'midi-in-' + i">
                  <i>{{ dev.name || "Unknown MIDI Input" }}</i>
                  <span v-if="dev.manufacturer">
                    by <i>{{ dev.manufacturer }}</i></span
                  >
                </li>
              </ul>
              <p v-if="userData.midiOutputs && userData.midiOutputs.length > 0">
                You have <i>{{ userData.midiOutputs.length }}</i> MIDI output{{
                  userData.midiOutputs.length !== 1 ? "s" : ""
                }}
                🎵:
              </p>
              <ul
                v-if="userData.midiOutputs && userData.midiOutputs.length > 0"
                class="text-left q-ml-lg"
              >
                <li v-for="(dev, i) in userData.midiOutputs" :key="'midi-out-' + i">
                  <i>{{ dev.name || "Unknown MIDI Output" }}</i>
                  <span v-if="dev.manufacturer">
                    by <i>{{ dev.manufacturer }}</i></span
                  >
                </li>
              </ul>
            </div>
          </template>

          <!-- Media Devices (cameras, microphones, speakers) -->
          <template v-if="userData.mediaDevices !== undefined">
            <p v-if="userData.mediaDevices === null">
              Your browser does not support the <i>MediaDevices API</i> 📷
            </p>
            <p v-else-if="userData.mediaDevices.length === 0">
              No <i>media devices</i> 📷 were enumerated (permission may be required)
            </p>
            <div v-else>
              <p>
                Your browser can see <i>{{ userData.mediaDevices.length }}</i> media
                device{{ userData.mediaDevices.length !== 1 ? "s" : "" }} 📷🎙️🔊:
              </p>
              <ol class="text-center inline-block">
                <li v-for="(dev, i) in userData.mediaDevices" :key="'media-' + i">
                  <i>{{
                    dev.label ||
                    (dev.kind === "videoinput"
                      ? "Camera"
                      : dev.kind === "audioinput"
                      ? "Microphone"
                      : "Speaker")
                  }}</i>
                  <span class="text-grey-6">
                    &nbsp;({{
                      dev.kind === "videoinput"
                        ? "📷 Camera"
                        : dev.kind === "audioinput"
                        ? "🎙️ Microphone"
                        : "🔊 Speaker"
                    }})
                  </span>
                </li>
              </ol>
            </div>
          </template>

          <!-- Gamepads -->
          <template v-if="userData.gamepads !== undefined">
            <p v-if="userData.gamepads === null">
              Your browser does not support the <i>Gamepad API</i> 🎮
            </p>
            <p v-else-if="userData.gamepads.length === 0">
              No <i>gamepads</i> 🎮 are currently connected
            </p>
            <div v-else>
              <p>
                You have <i>{{ userData.gamepads.length }}</i> gamepad{{
                  userData.gamepads.length !== 1 ? "s" : ""
                }}
                🎮 connected:
              </p>
              <ul class="text-left q-ml-lg">
                <li v-for="(gp, i) in userData.gamepads" :key="'gp-' + i">
                  <i>{{ gp.id || "Unknown Gamepad" }}</i>
                  <span class="text-grey-6">
                    — {{ gp.buttons }} buttons, {{ gp.axes }} axes</span
                  >
                </li>
              </ul>
            </div>
          </template>
        </div>
      </template>
      <q-spinner-ball v-else color="secondary" size="10em" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from "vue";
import DeviceDetector from "device-detector-js";

// WMO weather code descriptions
const WMO_CODES = {
  0: "clear sky",
  1: "mainly clear",
  2: "partly cloudy",
  3: "overcast",
  45: "foggy",
  48: "icy fog",
  51: "light drizzle",
  53: "moderate drizzle",
  55: "dense drizzle",
  61: "slight rain",
  63: "moderate rain",
  65: "heavy rain",
  71: "slight snow",
  73: "moderate snow",
  75: "heavy snow",
  77: "snow grains",
  80: "slight showers",
  81: "moderate showers",
  82: "violent showers",
  85: "slight snow showers",
  86: "heavy snow showers",
  95: "thunderstorm",
  96: "thunderstorm with slight hail",
  99: "thunderstorm with heavy hail",
};

function getCanvasFingerprint() {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 50;
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("BrowserFingerprint", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("BrowserFingerprint", 4, 17);
    const data = canvas.toDataURL();
    // Simple hash
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = (hash << 5) - hash + data.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(16).toUpperCase();
  } catch (e) {
    return null;
  }
}

function getWebGLInfo() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return { vendor: null, renderer: null };
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    if (ext) {
      return {
        vendor: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
        renderer: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
      };
    }
    return {
      vendor: gl.getParameter(gl.VENDOR),
      renderer: gl.getParameter(gl.RENDERER),
    };
  } catch (e) {
    return { vendor: null, renderer: null };
  }
}

function getPointerType() {
  if (window.matchMedia("(pointer: coarse)").matches) return "touch";
  if (window.matchMedia("(pointer: fine)").matches) return "mouse";
  if (window.matchMedia("(pointer: none)").matches) return "none";
  return "unknown";
}

export default defineComponent({
  name: "You",

  setup() {
    const userData = reactive({});
    const loaded = ref(false);

    function handleOrientation(event) {
      const alpha = Number(event.alpha).toFixed(2);
      const beta = Number(event.beta).toFixed(2);
      const gamma = Number(event.gamma).toFixed(2);
      userData.orientation = { alpha, beta, gamma };
    }

    function handleScreenOrientation() {
      userData.height = window.innerHeight;
      userData.width = window.innerWidth;
      userData.angle = window.screen?.orientation?.angle;
      userData.mode =
        window.screen?.orientation?.type?.indexOf("landscape") > -1
          ? "landscape"
          : "portrait";
    }

    onMounted(async () => {
      // --- Synchronous / browser API data (always available) ---
      const device = new DeviceDetector().parse(window.navigator.userAgent);
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const connection = window.navigator.connection;
      const memory = window.navigator.deviceMemory;
      const height = window.innerHeight;
      const width = window.innerWidth;
      const angle = window.screen?.orientation?.angle;
      const mode =
        window.screen?.orientation?.type?.indexOf("landscape") > -1
          ? "landscape"
          : "portrait";
      const referrer = window.document.referrer;

      const cpuCores = window.navigator.hardwareConcurrency || null;
      const language = window.navigator.language || null;
      const languages = window.navigator.languages
        ? Array.from(window.navigator.languages)
        : [];
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
      const pixelRatio = window.devicePixelRatio || null;
      const colorDepth = window.screen.colorDepth || null;
      const availWidth = window.screen.availWidth || null;
      const availHeight = window.screen.availHeight || null;
      const isOnline = window.navigator.onLine;
      const pointerType = getPointerType();
      const canHover = window.matchMedia("(hover: hover)").matches;
      const maxTouchPoints = window.navigator.maxTouchPoints ?? null;
      const doNotTrack = window.navigator.doNotTrack ?? null;
      const cookiesEnabled = window.navigator.cookieEnabled;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const highContrast = window.matchMedia("(prefers-contrast: more)").matches;
      const canvasFingerprint = getCanvasFingerprint();
      const { vendor: webglVendor, renderer: webglRenderer } = getWebGLInfo();

      // Page load time
      let pageLoadTime = null;
      try {
        const perf = window.performance;
        if (perf && perf.timing) {
          const t = perf.timing;
          pageLoadTime = t.loadEventEnd - t.navigationStart;
          if (pageLoadTime <= 0) pageLoadTime = null;
        } else if (perf && perf.getEntriesByType) {
          const nav = perf.getEntriesByType("navigation")[0];
          if (nav) pageLoadTime = Math.round(nav.loadEventEnd);
        }
      } catch (e) {}

      // Populate all synchronous data immediately so the page can render
      Object.assign(userData, {
        ...device,
        connection,
        memory,
        height,
        width,
        angle,
        mode,
        darkMode: isDark,
        referrer,
        cpuCores,
        language,
        languages,
        timezone,
        pixelRatio,
        colorDepth,
        availWidth,
        availHeight,
        isOnline,
        pointerType,
        canHover,
        maxTouchPoints,
        doNotTrack,
        cookiesEnabled,
        reducedMotion,
        highContrast,
        canvasFingerprint,
        webglVendor,
        webglRenderer,
        pageLoadTime,
      });

      // Show the page immediately with browser data — API results will fill in reactively
      loaded.value = true;

      // Register orientation listeners
      window.addEventListener("deviceorientation", handleOrientation, true);
      window.addEventListener("orientationchange", handleScreenOrientation, false);

      // --- Async API calls — each independently try-caught so one failure never blocks others ---

      // 1. IP geolocation (ipapi.co)
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        Object.assign(userData, data);

        // 2. Weather — depends on lat/lon from IP API, so nested but independently caught
        if (data.latitude && data.longitude) {
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true`
            );
            const weatherData = await weatherRes.json();
            if (weatherData.current_weather) {
              const cw = weatherData.current_weather;
              userData.weather = {
                temperature: cw.temperature,
                windspeed: cw.windspeed,
                description: WMO_CODES[cw.weathercode] || "unknown conditions",
              };
            }
          } catch (e) {
            console.warn("Weather API failed:", e);
          }
        }
      } catch (e) {
        console.warn("IP geolocation API failed:", e);
      }

      // 3. Battery API
      try {
        const battery = await window.navigator.getBattery();
        userData.battery = battery;
      } catch (e) {
        // Battery API not supported or denied — silently skip
      }

      // 4. Clipboard
      try {
        const txt = await navigator.clipboard.readText();
        userData.clipboard = txt;
      } catch (e) {
        // Clipboard access denied or not supported — silently skip
      }

      // 5. Incognito detection
      try {
        const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        if (fs) {
          fs(
            window.TEMPORARY,
            100,
            () => {
              userData.incognito = false;
            },
            () => {
              userData.incognito = true;
            }
          );
        } else {
          userData.incognito = true;
        }
      } catch (e) {
        userData.incognito = false;
      }

      // 6. WebUSB — enumerate previously granted/paired USB devices
      try {
        if (navigator.usb) {
          const devices = await navigator.usb.getDevices();
          userData.usbDevices = devices.map((d) => ({
            productName: d.productName,
            manufacturerName: d.manufacturerName,
            vendorId: d.vendorId,
            productId: d.productId,
          }));
        } else {
          userData.usbDevices = null;
        }
      } catch (e) {
        userData.usbDevices = [];
      }

      // 7. Web Bluetooth — check availability
      try {
        if (navigator.bluetooth) {
          const available = await navigator.bluetooth.getAvailability();
          userData.bluetoothAvailable = available;
        } else {
          userData.bluetoothAvailable = false;
        }
      } catch (e) {
        userData.bluetoothAvailable = false;
      }

      // 8. Web MIDI — enumerate MIDI inputs and outputs
      try {
        if (navigator.requestMIDIAccess) {
          const midiAccess = await navigator.requestMIDIAccess();
          const inputs = [];
          midiAccess.inputs.forEach((input) => {
            inputs.push({ name: input.name, manufacturer: input.manufacturer });
          });
          const outputs = [];
          midiAccess.outputs.forEach((output) => {
            outputs.push({ name: output.name, manufacturer: output.manufacturer });
          });
          userData.midiInputs = inputs;
          userData.midiOutputs = outputs;
        } else {
          userData.midiInputs = null;
          userData.midiOutputs = null;
        }
      } catch (e) {
        userData.midiInputs = [];
        userData.midiOutputs = [];
      }

      // 9. MediaDevices — enumerate cameras, microphones, speakers
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
          const devices = await navigator.mediaDevices.enumerateDevices();
          userData.mediaDevices = devices.map((d) => ({
            kind: d.kind,
            label: d.label || null,
          }));
        } else {
          userData.mediaDevices = null;
        }
      } catch (e) {
        userData.mediaDevices = [];
      }

      // 10. Gamepad API — enumerate connected gamepads
      try {
        if ("getGamepads" in navigator) {
          const rawGamepads = Array.from(navigator.getGamepads()).filter(Boolean);
          userData.gamepads = rawGamepads.map((gp) => ({
            id: gp.id,
            buttons: gp.buttons.length,
            axes: gp.axes.length,
          }));
          // Listen for gamepad connect/disconnect events
          window.addEventListener("gamepadconnected", () => {
            const updated = Array.from(navigator.getGamepads()).filter(Boolean);
            userData.gamepads = updated.map((gp) => ({
              id: gp.id,
              buttons: gp.buttons.length,
              axes: gp.axes.length,
            }));
          });
          window.addEventListener("gamepaddisconnected", () => {
            const updated = Array.from(navigator.getGamepads()).filter(Boolean);
            userData.gamepads = updated.map((gp) => ({
              id: gp.id,
              buttons: gp.buttons.length,
              axes: gp.axes.length,
            }));
          });
        } else {
          userData.gamepads = null;
        }
      } catch (e) {
        userData.gamepads = null;
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("orientationchange", handleScreenOrientation);
    });

    return { userData, loaded };
  },
});
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid;
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  min-height: 450px;
  min-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  i {
    color: $secondary;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
