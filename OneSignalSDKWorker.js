try {
  importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
} catch (error) {
  self.console?.warn?.("OneSignal worker SDK failed to load. Continuing without push support.", error);
}

importScripts("/sw.js");
