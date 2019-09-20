---
title: Menginstall NVM Sebagai Version Manager
category: "Tools"
tags: 
  - NodeJS
date: "2017-07-26"
layout: post
draft: false
description: ""
---

### Pengantar

NodeJS adalah bahasa pemrograman untuk backend yang menggunakan sintaks javascript yang sekarang mulai banyak digunakan. Dalam pengembangan aplikasi sendiri kita sering terjadi error saat menggunakan versi yang berbeda. Untuk itu ada beberapa tools yang bisa kita gunakan untuk mengatur versi dalam nodeJS dalam satu sistem kita, salah satunya adalah <a href="https://github.com/creationix/nvm" target="_blank">Node Version Manager / NVM</a>

### Instalasi

Untuk menginstall nvm, sebenarnya kita tidak harus menginstall nodejs terlebih dahulu, karena nanti kita bisa menginstallnya lewat nvm dan akan di save di folder yang sama dengan dimana nvm berada. Jadi menurut saya itu menjadi nilai tambahan kenapa menggunakan nvm lebih saya rekomendasikan daripada menginstal nodejs langsung tanpa menggunakan nvm.

### Langkah

Pastikan semua _package_ yang ada di sistem operasi kita terupdate semua.

```
sudo apt-get update
```

Setelah selesai mengupdate package yang ada, ketikkan

```
sudo apt-get install build-essential libssl-dev
```

Agar repository membolehkan kita membuat `package source`.

Setelah selesai persiapan tersebut kita mulai install nvm. Sesuai petunjuk yang ada di <a href="https://github.com/creationix/nvm" target="_blank">Halaman Project</a>nya, kita bisa menginstall nvm menggunakan cURL.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

Atau bisa juga dengan menggunakan wGet.

<pre class="wp-block-preformatted">wget -qO- https://raw.githubusercontent.com/creationix/nvm/**v0.33.2**/install.sh | bash
</pre>

Versi yang saya tandai dengan huruf tebal tersebut adalah versi saat tulisan ini dibuat. Jika ingin menginstall nvm versi terakhir nvm silakan cek ke website resmi nvm. Setelah selesai maka nvm akan membuat direktori di dalam _~/.nvm_ yang nantinya akan menjadi tempat nvm menginstall nodejs. Dan juga nvm akan membuat profilnya di dalam file terminal yang kita gunakan. Maka tutup terminal dan buka ulang untuk merefreshnya.

### Patching

Pada setiap terminal yang terinstall di sistem operasi perlu kita masukkan beberapa script agar dapat mendeteksi nvm

<pre class="wp-block-preformatted">export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
</pre>

Misalkan kita menginstall lebih dari satu terminal, sebagai contoh: zsh, iTerm, Terminator, XTerm, UXTerm dll.

### Penggunaan

Untuk mengetahui apakah nvm berhasil diinstall atau belum ketikkan

<pre class="wp-block-preformatted">nvm --version
</pre>

Maka akan muncul versi dari nvmnya.

Untuk melihat daftar versi node yang terbaru bisa dengan mengetikkan

<pre class="wp-block-preformatted">nvm ls-remote
</pre>

Namun jika hanya ingin melihat versi nodejs yang sudah terinstall, bisa menggukanak perintah

<pre class="wp-block-preformatted">nvm ls</pre>

Di terminal akan muncul versi nodejs yang terinstall beserta versi yang digunakan sebagai default.

Untuk menginstall nodejs dengan versi tertentu, bisa menggunakan

<pre class="wp-block-preformatted">nvm install x.x.x
</pre>

x.x.x bisa langsung diganti dengan versi hasil kita nvm ls-remote tadi. Dan jika ingin menginstall versi Long Term Support / LTS terbaru, bisa dengan

<pre class="wp-block-preformatted">nvm install --lts</pre>

Untuk menghapus / menguninstall versi nodejs tertentu menggunakan

```
nvm uninstall x.x.x
```

Setelah menguninstall, pastikan terdapat satu versi nodejs yang masih terinstall. Untuk menggunakan versi nodejs sebagai default di nvm bisa menggunakan

```
nvm use default x.x.x
```

Maka otomatis ketika kita melihat list di _nvm ls_ versi default nodejs kita berubah ke versi yang barusan kita setting. Hal ini juga berfungsi untuk menghindari Error nvm install N/A yang biasanya terjadi karena versi yang kita gunakan sebagai default tidak terinstall dalam sistem kita / di folder _~/.nvm_

Penggunaan nvm ini juga dapat mengurangi pemakaian sudo kita, karena npm yang terinstall dalam nvm tidak masuk ke root sehingga untuk menginstall sesuatu yang bersifat global tinggal mengetikkan

```
npm i -g namalibrary
```

tanpa embel-embel sudo di depannya.

### Penutup

Sekian penjelasan singkat dari saya mengenai nvm / node version manager ini. Jika ada kebingungan atau permasalahan bisa hubungi saya. Semoga bermanfaat.

Terima kasih