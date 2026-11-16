# MetroForge 3D — Complete Android package

इस पैकेज में मोबाइल-टच वाला गेम HTML, Android Capacitor project configuration, Android native fullscreen/back/orientation bridge और offline cache शामिल हैं।

## एक बार Android ऐप तैयार करने के निर्देश

1. Node.js LTS और Android Studio वाले कंप्यूटर पर ZIP extract करें।
2. इस फ़ोल्डर में Terminal खोलें।
3. ये commands चलाएँ:

```bash
npm install
npx cap add android
```

4. `android-native/app/src/main/java/com/metroforge/citybuilder/MainActivity.java` को generated Android project में मौजूद `android/app/src/main/java/com/metroforge/citybuilder/MainActivity.java` से replace करें। अगर generated package path अलग हो तो Java file उसी package folder में रखें।
5. `android-native/app/src/main/AndroidManifest.xml` से `screenOrientation="sensorLandscape"` और `configChanges` settings generated `android/app/src/main/AndroidManifest.xml` की MainActivity में merge करें। Generated manifest को पूरा replace न करें; Capacitor के आवश्यक providers/metadata बने रहने दें।
6. फिर चलाएँ:

```bash
npx cap sync android
npx cap open android
```

7. Android Studio में Gradle Sync के बाद **Build > Build Bundle(s) / APK(s) > Build APK(s)** चुनें।

## सभी शामिल मोबाइल फीचर्स

- एक उंगली से कैमरा Orbit (Inspect mode)
- दो उंगलियों से pinch zoom + pan
- Tap-to-place construction
- Multi-point road drawing के लिए Finish Road / Cancel
- Building Rotate touch control
- Responsive mobile HUD, modal और safe-area layout
- Android landscape orientation और immersive fullscreen
- Android Back: पहले खुला panel/modal बंद, फिर road/follow mode exit, अंत में app exit
- हर 20 सेकंड autosave, background/pagehide पर save, local device storage
- Last saved city auto-restore
- Low / Medium / High graphics presets
- Service worker shell + CDN runtime cache

## Offline व्यवहार — जरूरी बात

HTML में Three.js, OrbitControls, Tailwind और fonts के मौजूदा CDN URLs रखे गए हैं। इस environment में उन third-party files को डाउनलोड करके ZIP में embed करना संभव नहीं हुआ। `sw.js` पहली बार इंटरनेट पर assets लोड होने के बाद उन्हें cache करता है, इसलिए **पहली सफल online launch के बाद** अगली launches में cached assets offline मिल सकते हैं। बिल्कुल पहली बार बिना इंटरनेट चलने वाला पूर्ण offline APK इस पैकेज में दावा नहीं किया गया है।

## APK status

यह Android Studio में APK build करने के लिए source package है; compiled APK नहीं। APK Android Studio/Gradle environment में बनेगी।
