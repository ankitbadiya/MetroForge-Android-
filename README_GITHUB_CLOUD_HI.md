# MetroForge 3D — GitHub Cloud Build (हिंदी)

इस प्रोजेक्ट की APK GitHub Actions पर बनेगी। Chromebook पर Android Studio या Android SDK इंस्टॉल करने की जरूरत नहीं है।

## GitHub पर अपलोड

1. GitHub में नया repository बनाएं, उदाहरण: `MetroForge-Android`.
2. Repository में **Add file → Upload files** चुनें।
3. इस ZIP को अपने Chromebook में extract करें और extracted folder के **अंदर की सभी फाइलें/फोल्डर** repository में upload करें। `.github/workflows/android-apk.yml` भी जरूर upload होनी चाहिए।
4. Commit changes करें। Repository को Public या Private रख सकते हैं; Private repository में GitHub Actions की usage limits लागू हो सकती हैं।

## APK बनाना

1. Repository में **Actions** tab खोलें।
2. बाईं तरफ **MetroForge Android APK** workflow चुनें।
3. **Run workflow → Run workflow** दबाएं। (Main/master पर push करने पर भी अपने-आप build शुरू होगा।)
4. Build पूरा होने पर हरे रंग का success check दिखेगा।
5. Run खोलें और नीचे **Artifacts** में `MetroForge-Android-APK` डाउनलोड करें। ZIP extract करें; उसमें `app-debug.apk` मिलेगी।
6. APK Android फोन में भेजें और install करें। फोन पूछे तो उस स्रोत से app install करने की अनुमति दें।

## ध्यान दें

- यह **debug APK** है, Play Store पर publish करने के लिए signed release build नहीं।
- पहली बार build में कुछ मिनट लग सकते हैं।
- Game की HTML फाइल `www/index.html` में है।
- गेम में कुछ Three.js/CDN dependencies इंटरनेट से लोड होती हैं; इसलिए पहली बार चलाते समय इंटरनेट चालू रखें।
- GitHub Actions workflow `.github/workflows/android-apk.yml` में है।
