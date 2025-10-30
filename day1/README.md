**JAWABAN EVALUASI HARIAN**

 **1. Jelaskan definisi Mobile App Development sesuai pemahaman anda beserta fokus utama dan output teknisnya!**

Mobile App Development adalah proses pembuatan aplikasi yang berjalan di perangkat mobile seperti smartphone dan tablet, mulai dari merancang, coding, testing, sampai rilis dan maintenance.

**Fokus utamanya:**
- User experience yang nyaman sesuai platform
- Performa stabil di berbagai device
- Memanfaatkan fitur HP seperti kamera, GPS, notifikasi
- Mengikuti aturan Play Store/App Store

**Output teknis:**
- File APK/AAB (Android) atau IPA (iOS)
- Sertifikat signing untuk keamanan
- Permission untuk akses fitur
- Metadata seperti icon, deskripsi, screenshot



 **2. Bandingkan perbedaan mendasar antara Web Development dan Mobile App Development dalam aspek target eksekusi, distribusi, dan akses hardware. Berikan contoh implikasi praktis dari perbedaan tersebut dalam pengembangan aplikasi sehari-hari.**

**Perbedaan:**

**Target eksekusi:** Web jalan di browser (DOM), mobile jalan di runtime native dengan komponen asli platform.

**Distribusi:** Web cukup deploy ke server langsung bisa diakses, mobile harus submit ke store dan tunggu review approval.

**Akses hardware:** Web terbatas hanya kamera/mic lewat browser, mobile bisa akses penuh ke GPS, sensor, background process, dll.

**Contoh praktis:**

- **Tokopedia Web** bisa update fitur langsung tanpa approval, tapi **Tokopedia App** harus submit dulu dan nunggu 1-3 hari review dari Play Store.

- **Google Meet Web** cuma bisa akses kamera lewat browser permission, sedangkan **WhatsApp mobile** bisa akses kontak, kirim notifikasi push, bahkan jalan di background waktu app ditutup.

- **Instagram Web** ga bisa upload multiple photos sekaligus atau pakai filter canggih, tapi **Instagram App** bisa karena akses penuh ke gallery dan camera native.



**3. Uraikan tahapan Discovery & Requirement dalam siklus hidup aplikasi mobile. Bagaimana tahap ini memengaruhi keputusan target platform (Android/iOS) dan kebutuhan offline/online?**

**Tahapan Discovery & Requirement:**

1. **Identifikasi masalah bisnis** - Tentuin problem apa yang mau diselesaikan
2. **Riset target user** - Demographics, behavior, market analysis
3. **Define use case** - Fitur utama apa aja yang wajib ada
4. **Prioritas fitur** - Tentuin MVP dan analisis risiko

**Pengaruh ke keputusan platform:**

**Android/iOS:**
- Kalau target market Indonesia/Asia → fokus Android dulu (market share 80%+)
- Kalau target US/premium market → iOS prioritas (daya beli tinggi)
- Budget terbatas → React Native buat dua-duanya sekaligus

**Offline/Online:**
- App catatan/notes → butuh offline-first, pakai AsyncStorage/SQLite
- Streaming app → online-only, fokus ke network error handling
- E-commerce → hybrid, cache produk offline tapi checkout harus online

**Contoh:** Gojek pilih Android & iOS karena market luas, perlu online-first untuk GPS real-time dan payment, tapi cache history buat ditampilkan offline.



 **4. Deskripsikan tahapan Perancangan Arsitektur & Teknologi dalam Mobile App Development, khususnya dalam konteks React Native sesuai pemahaman anda. Mengapa pemilihan strategi state management dan navigasi menjadi krusial di tahap ini?**

**Tahapan Perancangan Arsitektur:**

1. **Tentuin pendekatan** - React Native untuk cross-platform
2. **Struktur folder** - Pisahin components, screens, navigation, services
3. **State management** - Pilih Redux/Zustand/Context API
4. **Navigasi** - Stack/Tab/Drawer navigation
5. **Error handling** - Setup Sentry/Crashlytics

**Kenapa state management krusial?**

Kalau ga direncanain dari awal, bakal terjadi prop drilling nightmare dimana data harus diturunin dari parent ke child berkali-kali. Ini bikin app lambat karena re-render berlebihan dan susah di-maintain.

Contoh masalah tanpa state management:
```jsx
// Props harus turun 5 level!
<App user={user}>
  <Header user={user}>
    <Menu user={user}>
      <Profile user={user}>
        <Avatar user={user} /> // Ribet!
```

Dengan Redux/Zustand:
```jsx
// Component ambil langsung dari store
<Avatar /> // Akses user langsung
```

**Kenapa navigasi krusial?**

Navigasi yang salah bikin:
- User bingung cara back/forward
- Memory leak karena screen ga ke-unmount
- UX ga konsisten antar platform

Instagram pakai Tab Navigation untuk home/search/profile, dan Stack Navigation untuk flow detail post → comments. Kalau ga direncanain dari awal, refactoring bisa berbulan-bulan.



 **5. Jelaskan perbedaan antara pendekatan Native Development dan Hybrid Development dalam pengembangan aplikasi mobile. Sertakan keuntungan serta kekurangan masing-masing, dan berikan contoh framework yang relevan selain dari yang telah disampaikan di materi.**

**Native Development:**
Bikin app pakai bahasa resmi platform - Kotlin/Java untuk Android, Swift untuk iOS.

**Keuntungan:**
- Performa maksimal
- UX paling smooth
- Akses full ke fitur terbaru

**Kekurangan:**
- Butuh 2 codebase terpisah
- Development 2x lebih lama
- Biaya mahal

**Framework:** Jetpack Compose (Android), SwiftUI (iOS), Kotlin Multiplatform Mobile

**Contoh app:** Spotify, Google Maps



**Hybrid Development:**
Bikin app pakai HTML/CSS/JS yang dibungkus WebView.

**Keuntungan:**
- Satu codebase untuk semua platform
- Cepat untuk prototyping
- Murah

**Kekurangan:**
- Performa rendah, sering lag
- Terasa kayak website, bukan app
- Akses hardware terbatas

**Framework:** Ionic, Capacitor, Quasar Framework, Onsen UI

**Contoh app:** App berita, dashboard admin internal



**6. Apa yang dimaksud dengan Cross-Platform Native Development? Bandingkan keuntungan dan kekurangannya dengan pendekatan native.**

**Cross-Platform Native Development:**
Bikin app pakai 1 codebase (JavaScript/Dart), tapi hasilnya komponen native asli, bukan WebView.

**Cara kerja:** 
Kode JS/Dart → Framework translate → Komponen native (UIView untuk iOS, View untuk Android)

**Framework:** React Native, Flutter, .NET MAUI

**Keuntungan dibanding Native:**
- Satu codebase hemat waktu 40-60%
- UI tetap native, performa 80-95% dari native
- 1 tim bisa handle Android & iOS
- Hot reload untuk development cepat
- Biaya jauh lebih murah

**Kekurangan dibanding Native:**
- Ada overhead bridge, bisa bottleneck di animasi kompleks
- Debugging lebih ribet (2 layer: JS + native)
- Fitur terbaru platform kadang telat support
- Ukuran app lebih besar (~20MB vs ~5MB)
- Dependency ke framework

**Kesimpulan:** Cross-platform cocok untuk 90% kasus (social media, e-commerce, dashboard). Native cuma kalau butuh performa ekstrem atau game 3D.



**7. Posisikan React Native dalam ekosistem pengembangan aplikasi mobile. Bagaimana React Native berbeda dari ReactJS dalam hal target, sintaks dasar, dan styling?**

**Posisi React Native:**
React Native ada di kategori Cross-Platform Native, jadi jembatan antara web developer dan mobile development. Komunitas terbesar di kategori cross-platform.

**Perbedaan dengan ReactJS:**

**Target:**
- ReactJS → Browser (DOM)
- React Native → Native components (UIView/View)

**Sintaks:**
Mirip tapi komponennya beda:
- ReactJS: `<div>`, `<p>`, `<button>`
- React Native: `<View>`, `<Text>`, `<Button>`

Contoh:
```jsx
// ReactJS
<div>
  <p>Hello</p>
  <button onClick={...}>Click</button>
</div>

// React Native
<View>
  <Text>Hello</Text>
  <Button onPress={...} title="Click" />
</View>
```

**Styling:**
- ReactJS: Pakai CSS file, `fontSize: '24px'`
- React Native: JavaScript object, `fontSize: 24` (ga pake 'px')

```jsx
// ReactJS
<div style={{ backgroundColor: '#fff', padding: '20px' }}>

// React Native
<View style={{ backgroundColor: '#fff', padding: 20 }}>
```



**8. Analisis tantangan utama dalam pengembangan aplikasi mobile dibandingkan dengan web. Bagaimana pendekatan cross-platform seperti React Native mengatasi tantangan ini?**

**Tantangan & Solusi React Native:**

**1. Fragmentasi Device**
- **Masalah:** Ribuan kombinasi ukuran layar, OS version
- **Solusi RN:** `Dimensions` API dan `Platform` untuk detect device

**2. Distribusi lambat**
- **Masalah:** Submit ke store butuh 1-7 hari review
- **Solusi RN:** CodePush untuk update JavaScript tanpa re-submit

**3. Performance & Battery**
- **Masalah:** Mobile punya resource terbatas
- **Solusi RN:** FlatList untuk virtualized list, React.memo untuk optimize

**4. Permission kompleks**
- **Masalah:** Harus handle permission manual
- **Solusi RN:** Library `react-native-permissions` untuk unified handling

**5. Network fluktuatif**
- **Masalah:** Koneksi ga stabil (3G/4G/WiFi/Offline)
- **Solusi RN:** NetInfo untuk monitor network + AsyncStorage untuk offline cache

**6. Navigation kompleks**
- **Masalah:** Stack/Tab navigation + app lifecycle
- **Solusi RN:** React Navigation + AppState API



 **9. Uraikan tahapan Pengujian dan Build, Signing, serta Release dalam Mobile App Development menggunakan React Native!**

**Tahapan Pengujian:**

**1. Unit Testing**
- Test fungsi/komponen individual pakai Jest
- Contoh: test function calculation, API call

**2. Snapshot Testing**
- Test UI component ga berubah unexpected
- Jest snapshot

**3. Integration Testing**
- Test interaksi antar komponen
- React Native Testing Library

**4. E2E Testing**
- Test full user flow di simulator/device
- Detox atau Appium

**5. Manual Testing**
- Test di real device (Android & iOS)
- Test berbagai skenario edge case



**Tahapan Build & Signing:**

**Android:**
1. Generate keystore untuk signing
2. Configure `build.gradle` dengan signing config
3. Build APK/AAB: `./gradlew bundleRelease`
4. Sign dengan jarsigner

**iOS:**
1. Setup certificate & provisioning profile di Xcode
2. Configure signing di Xcode
3. Archive app
4. Export IPA file

**Tahapan Release:**

**1. Persiapan:**
- Buat app icon berbagai ukuran
- Screenshot untuk store listing
- Deskripsi app, keywords
- Privacy policy

**2. Submit:**
- **Android:** Upload ke Play Console
- **iOS:** Upload ke App Store Connect

**3. Review:**
- Android: ~1-3 hari
- iOS: ~1-7 hari

**4. Monitoring:**
- Setup Crashlytics untuk bug reporting
- Firebase Analytics untuk user behavior
- Monitor review & feedback user



**10. Berdasarkan penjelasan diatas, jelaskan kenapa React native menjadi pilihan dalam development application mobile saat ini?**

**React Native jadi pilihan utama karena:**

**1. Efisiensi Development**
- Satu codebase untuk Android & iOS
- Hemat waktu 40-60%
- 1 tim developer bisa handle 2 platform

**2. Cost-Effective**
- Ga perlu hire 2 tim specialist (Android + iOS dev)
- Maintenance lebih murah
- Perfect untuk startup dengan budget terbatas

**3. Performance Mendekati Native**
- Pakai komponen native asli (bukan WebView)
- 80-95% performa native, cukup untuk mayoritas app

**4. Developer Experience**
- Hot reload untuk instant feedback
- Ekosistem JavaScript yang massive
- Library npm bisa dipakai

**5. Komunitas Besar**
- Dukungan Facebook/Meta
- Banyak library & tutorial
- Mudah cari developer

**6. Proven Track Record**
- Dipake perusahaan besar: Instagram, Facebook, Discord, Shopify, Airbnb
- Production-ready dan stable

**7. Flexibility**
- Bisa tulis custom native module kalau butuh
- Update cepat via CodePush
- Platform-specific code kalau perlu
