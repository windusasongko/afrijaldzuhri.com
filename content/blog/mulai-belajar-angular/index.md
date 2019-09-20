---
date: "2017-07-30"
title: Mulai Belajar Angular
category: "Frontend"
tags: 
  - angular
  - frontend
  - web apps
layout: post
draft: false
description: ""
---

Setelah paham dan mengerti tentang pengertian Angular di [story saya sebelumnya](https://afrijaldzuhri.com/pengertian-angular/), di bagian ini kita memulai membuat aplikasi Angular kita untuk pertama kali. Dan sebagai referensi, teman-teman bisa mengunjungi situs resminya [Angular.io](https://angular.io/).

### Persiapan

#### 1\. Internet

Pastikan teman-teman terkoneksi dengan jaringan internet karena untuk membuat project angular ini pertama kali kita harus menginstall dependensi, dan itu memerlukan internet.

#### 2\. NPM (Node Package Manager)

Kita perlu menginstall NodeJs dan NPM sebagai lingkungan pengembangan aplikasi kita sebelum dapat memulai belajar Angular. Untuk menginstallnya, teman-teman bisa mengunjungi story saya sebelumnya tentang [Menggunakan NVM Sebagai Version Manager](https://medium.com/@afrijaldz/menginstall-nvm-sebagai-version-manager-78d8e41b46de). Disitu saya terangkan bagaimana cara menginstall node dengan versi tertentu. Atau teman-teman bisa mengunjungi langsung website [NodeJS](https://nodejs.org/en/download/).

#### 3\. Angular CLI

Angular CLI adalah sebuah tool yang dapat kita gunakan untuk membuat project aplikasi Angular, selain itu juga banyak kegunaan atau fungsi lainnya, misalnya untuk membuat komponen, membuat service, dan lain lain yang nantinya akan saya jelaskan di story selanjutnya.

Setelah menginstall NodeJS dan NPM selesai, kemudian teman-teman bisa menginstall Angular CLI secara global dengan cara.

```
npm install @angular/cli -g
```

atau bisa menambahkan `@latest` agar menginstall versi terakhir.

```
npm i @angular/cli@latest -g
```

Untuk memastikan Angular CLI sudah terinstall, teman-teman bisa mengetik perintah.

```
ng --version
```

Disana kita akan diberi informasi mengenai versi Angular CLI yang sudah terinstall, versi Node yang sudah terinstall, dan OS apa yang kita gunakan.

### Project Pertama

Setelah semuanya beres, kita langsung bisa membuat project pertama kita dengan cara.

```
ng new belajar-angular
```

Tunggu sebentar sampai semua library dari Angular terpasang di folder project yang kita beri nama `belajar-angular.` Setelah selesai terpasang ketikkan

```
cd belajar-angular
```

Untuk menjalankannya cukup ketikkan

```
ng serve --open
```

Perintah tersebut digunakan untuk menjalankan aplikasi, _watching _aplikasi kita dan membangun ulang saat kita mengubah sesuatu di dalam files Angular. Tunggu sampai prosesnya selesai. Dengan menggunakan flag `--open` atau bisa juga `-o` akan secara langsung membuka browser kita dan mengarahkannya ke `[http://localhost:4200](http://localhost:4200/)` dimana project kita berjalan. Teman-teman juga bisa mengubah port dengan cara menambahkan flag `--port` untuk runningnya. Setelah proses buildnya selesai, maka teman-teman akan mendapatkan tampilan seperti berikut ini.

![Tampilan awal saat menjalankan Angular](30-1-1.png)

Sekian dulu belajar kali ini, untuk struktur folder dan pengoperasiannya akan ada di post saya berikutnya.

semoga bermanfaat untuk teman-teman.