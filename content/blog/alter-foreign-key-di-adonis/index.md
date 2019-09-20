---
title: Alter Foreign Key Menggunakan Migration di AdonisJS
category: "Backend"
layout: post
date: "2018-10-20"
tags: 
  - adonisjs
  - nodejs
draft: false
description: ""
---

Dalam kasus ini, sebagai contoh kita mempunyai dua buah tables, `users` dan `cars` dan hubungannya `cars belongsTo users` sehingga di table `cars` terdapat foreign key `user_id` yang mereferensi ke `id` di table `users`. Kita ingin menjadikan `onDelete CASCADE` untuk foreign key `user_id` yang sebelumnya `RESTRICT`.

Untuk `alter` suatu foreign key, langkah yang perlu dilakukan yaitu ada 2:

- Menghapus foreign key yang sudah ada
- Membuat foreign key baru

Pertama yang perlu dilakukan yaitu buat migrationnya

`adonis make:migration users`

Kemudian pilih yang `select table` karena table yang akan dieksekusi sudah ada di database.

Di file `migration` yang terletak di dalam folder `database/migrations`nya, tambahkan perintah di bagian `up`

```javascript
table.dropForeign('user_id', 'cars_user_id_foreign')
```

Perintah ini digunakan untuk menghapus foreign key yang sudah ada.

Kemudian di bawahnya tambahkan lagi perintah.

```javascript
table.foreign('user_id')
  .references('id')
  .inTable('users')
  .onDelete('CASCADE')
```

Yang digunakan untuk membuat `foreign key` baru.

untuk di bagian `down`nya, isi dengan perintah kebalikkan dari yang ada di `up`.

```javascript
table.dropForeign('user_id', 'cars_user_id_foreign')
table.foreign('user_id')
  .references('id')
  .inTable('users')
  .onDelete('RESTRICT')

```

Ini digunakan untuk sewaktu-waktu jika kita perlu merevert / rollback ke bentuk semula.

Setelah semuanya beres tinggal jalankan perintah migrationnya 

`adonis migration:run`

Maka `foreign key user_id` yang ada di table `cars` sudah berubah.

Kita juga bisa melakukannya dengan tanpa migration, alias langsung di database (tapi tidak saya sarankan). Yaitu dengan perintah

```sql
ALTER TABLE `cars` 
DROP FOREIGN KEY `user_id`;
```

Untuk menghapus `foreign key` yang sudah ada.

```sql
ALTER TABLE `cars`  
ADD CONSTRAINT `cars_user_id_foreign` 
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
```

Semoga bermanfaat !