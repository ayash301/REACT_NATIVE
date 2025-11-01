### 1. Konsep Dasar React Native

* React Native itu framework buat bikin **aplikasi mobile native (Android & iOS)** pakai **JavaScript/TypeScript** dan konsep React.
* Beda dari React web karena dia **nggak pakai HTML/CSS**, tapi komponen native kayak `View`, `Text`, dll.
* Hasilnya bener-bener aplikasi native, bukan web yang dibungkus.
* Di versi **v0.80**, ada **New Architecture (JSI, Fabric, TurboModules)** yang bikin komunikasi antara JS dan native jadi lebih cepat, animasi lebih halus, dan performa naik signifikan.



### 2. React Native CLI vs Expo

**Perbedaan utama:**

* **CLI:** akses penuh ke kode native (`android/`, `ios/`), cocok buat proyek kompleks.
* **Expo:** setup cepat, cocok buat pemula dan prototyping, tapi terbatas di akses native.

**Kelebihan & Kekurangan Singkat:**

* CLI → fleksibel tapi setup ribet.
* Expo → gampang tapi terbatas.

**Contoh penggunaan:**

* Kalau bikin app kompleks (misalnya butuh sensor atau kamera custom) → pakai **CLI**.
* Kalau cuma bikin app katalog, e-commerce, atau MVP → **Expo** lebih cepat.



### 3. Fungsi SDK Platforms, Build Tools, dan Platform Tools

* **SDK Platforms (android-35):** berisi API Android, wajib biar app bisa dikompilasi.
* **Build Tools (35.0.0):** alat buat compile & sign APK (kayak `aapt2`, `apksigner`).
* **Platform Tools:** berisi `adb` buat install dan debug app di device.
 Tanpa salah satu, build bisa error atau device nggak bisa jalan.



### 4. Prasyarat Umum Setup CLI

* **Node.js:** buat jalanin JavaScript dan Metro Bundler.
* **Watchman:** deteksi perubahan file biar hot reload jalan.
* **Yarn:** (opsional) buat ngatur dependency biar cepat dan stabil.
  ➡️ Ketiganya bantu nyambungin kode JS ke sistem native dengan lancar.



### 5. Struktur Folder React Native CLI

* **android/** → kode native Android (Gradle, Java/Kotlin).
* **ios/** → kode native iOS (Swift/Objective-C).
* **App.js** → komponen utama aplikasi.
* **index.js** → entry point buat jalankan App.
* **metro.config.js** → ngatur bundling JS.
* **package.json** → info & dependency proyek.
  ➡️ Struktur ini bikin kita bisa pakai 1 kode JS untuk 2 platform (Android & iOS).



