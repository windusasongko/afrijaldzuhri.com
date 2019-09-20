---
title: Mengatasi Error query GROUP BY di Mysql 5.7
category: "Database"
layout: post
date: "2018-10-20"
tags: 
  - mysql
draft: false
description: ""
---

Error seperti ini terjadi karena terdapat `sql_mode only_full_group_by` di settingan mysql. Contoh error yang tampil ketika mengeksekusi query group by.

> Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'support_desk.mod_users_groups.group_id' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

Sedangkan cara simple agar querynya berjalan dengan menambahkan id dari table tersebut, misal

```sql
  SELECT * FROM users GROUP BY salary, id ORDER BY salary ASC
```

Dengan menambahkan `id` di `group by` query tersebut bisa dijalankan, namun bukan itu hasil yang diinginkan.

Cara mengatasinya:

- Buka file configurasi mysql
 
  `sudo nano /etc/mysql/my.cnf`

- Untuk beberapa kasus, file configurasi `my.cnf` tesebut berada di tempat berbeda

  `/usr/local/etc/my.cnf`

- Tambahkan config untuk `sql_mode` di baris terakhir

```
  [mysqld]
  sql_mode = "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
```

- Simpan dan tutup file configurasi tersebut
  
  Karena di atas menggunakan nano, maka bisa menekan perintah `ctrl+o` kemudian tekan `enter` untuk menyimpan, dan `ctrl+x` untuk keluar.

- Jalankan ulang / restart service mysql

  `sudo service mysql restart`

  atau jika menggunakan homebrew bisa menggunakan

  `brew services restart mysql`

- Jalankan kembali query yang menggunakan `group by`.

Saya kemarin mendapatkan error seperti di atas di local saya, dan membutuhkan waktu sekitar 30 menit untuk mencari tahu penyebab dan cara mengatasi. Semoga dengan saya menuliskan kembali dan membagikan hal yang pernah saya alami tersebut bisa memangkas waktu teman-teman agar tidak terbuang banyak. Jika ada yang perlu didiskusikan, silakan berkomentar di bawah. Saya sangat senang jika teman-teman mengajak diskusi dengan saya.

Semoga bermanfaat