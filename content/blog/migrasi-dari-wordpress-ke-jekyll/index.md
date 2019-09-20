---
title: Migrasi dari Wordpress ke Jekyll
category: "Blogging"
layout: post
date: "2018-09-28"
tags: 
  - jekyll
  - wordpress
draft: false
description: ""
---

Setelah sebelumnya menggunakan wordpress untuk ngeblog, akhirnya kemarin saya putuskan untuk pindah menggunakan jekyll. Alasan sederhananya adalah karena yang saya butuhkan hanya untuk menulis, dan menggunakan static site seperti jekyll ini sudah cukup menurut saya. Selebihnya hanya fitur komentar yang saya tambahkan dan itu bisa menggunakan `disqus`. Dan alasan kenapa menggunakan jekyll yaitu selain jekyll menggunakan ruby, bahasa yang sekarang sedang saya tertarik untuk mempelajarinya, jekyll juga terintegrasi dengan [Github Page](https://pages.github.com/){:target="_blank"} yang mana dengan itu jika kita menaruh jekyll di repository kita maka github akan otomatis mendeploykan.

Untuk memindahkan data dari wordpress ke jekyll, pastikan ruby sudah terinstall. Kemudian langkah-langkahnya:

1. Export data dari wordpress
   
    Untuk mengexportnya, masuk ke `domain_kamu/wp-admin/export.php` pilih *all* atau semua post agar semua postingan dan assets yang ada di wordpress terexport. Hasil export wordpress akan otomatis terdownload dalam bentuk xml.
  
2. Ubah file name (optional)
  
    Agar mudah menuliskan di terminal nanti, ubah nama hasil download wordpress menjadi `domainmu.wordpress.xml`

3. Jalankan perintah dibawah untuk mengimport xml menjadi bentuk jekyll

  ```ruby
    ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "domainmu.wordpress.xml",
      "assets_folder" => "assets"
    })'

  ```

4. Pindah hasil import ke jekyll

    Setelah ruby selesai mengekstrak file xml tersebut akan menghasilkan beberapa folder, diantaranya `assets`, `_attachments`, `_drafts`, `_pages`, dan `_posts`. Seperti nama foldernya, post berada di dalam folder `_posts`, pages berada di dalam folder `_pages`, draft berada di dalam folder `_drafts` dan gambar-gambar atau assets berada di folder `assets`.  Pindahkan isi dari folder tersebut ke project jekyll kita.

5. Ubah plain html ke markdown (optional)
   
    Hasil ekstrak dari file xml yang diimport tadi bentuknya menjadi plain html, agar terlihat rapi maka bisa diubah menjadi markdown dengan syntax yang dimiliki.

Demikian penjelasan singkat dari saya mengenai bagaimana migrasi dari wordpress ke jekyll static site. Semoga bermanfaat !

___
<p style="text-align:right">
  <em>
    Kayaknya perlu ngurangin minum kopi :"<br />
    Jum'at, 28 September 2018<br />
    di Perum. Grand Harmony Residence No. 23<br />
    Karangwuni, Caturtunggal, Depok, Sleman<br />
    Yogyakarta
  </em>
<p>
