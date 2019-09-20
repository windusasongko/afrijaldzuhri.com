---
date: "2019-07-10"
title: Kenapa Membuat Tema Gatsby Sendiri
---

Sebenarnya sejak saya mengenal Jekyll Static Site Generator sekitar 2 tahun lalu ingin sekali rasanya membuat tema sendiri. Namun karena pada saat itu saya berpikirnya hanya akan digunakan untuk blog/tulisan, kenapa susah-susah? toh juga sudah ada yang bikin tinggal pakai aja tema buatan orang.

Setahun yang lalu pada saat saya kenal Gatsby, yaitu static site generator yang menggunakan React, saya ada keinginan untuk menjamahnya. Terlebih menurut saya Gatsby ini: 

- Cepat (karena mirip spa sehingga gak ada loadingnya)
- Dibuat dengan React
- React pakai bahasa Javascript

Sebelumnya, saya meluangkan waktu untuk membaca dokumentasi dari Gatsby, berharap setelah itu mendapatkan panduan. Tapi cara seperti itu untuk saya kurang efektif.

Akhirnya kemarin pada saat saya lagi buka-buka youtube menemukan video The Great Gatsby Bootcamp Tutorial Crash Course.

<p style="text-align: center">
  <a href="https://www.youtube.com/watch?v=kzWIUX3CpuI" target="_blank">
    <img src="https://img.youtube.com/vi/kzWIUX3CpuI/0.jpg" alt="The Great Gatsby Bootcamp - Full Gatsby.js Tutorial Course"/>
  </a>
</p>

Video berdurasi 4 jam lebih tersebut saya nonton dan sambil saya praktikkan karena menurut saya penjelasan bagaimana Gatsby bekerja oleh Andrew Mead sangat mudah dimengerti. Setelah selesai mengikuti course tersebut, saya mencoba membuat tema dari awal karena sudah paham bagaimana alur gatsby ini bekerja. Dan baru setelah itu, jika ada yang saya belum tahu mengenai fitur gatsby saya buka dokumentasi untuk kasus tersebut.

Setelah saya mengerti dan bisa membuat tema Gatsby sendiri, saya bisa lebih mengubah-ubah tampilan seenak dan semau saya tanpa takut malah merusaknya karena saya bikin dari awal. Saya juga bisa menambahkan fitur-fitur dari plugin yang tersedia jika memang perlu, without worry. Tema yang saya buat sendiri lebih customable, jadi pada saat saya sudah bosan dengan tampilan blog sendiri, saya dengan mudah bisa mengubahnya sesuai yang saya mau.

Menurut saya, dalam membuat tema menggunakan Gatsby ini, yang perlu diperhatikan yaitu:

- Membuat halaman statis biasa
- Membuat halaman statis untuk masing-masing konten yang diambil dari markdown atau data source content lainnya yang digenerate oleh gatsby di `gatsby-node.js`
- Mengambil data menggunakan GraphQL

Selainnya, mungkin styling dan memasang plugin untuk menambah fitur di blog gatsby seperti comment, rss, dsb.