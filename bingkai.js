/*
 * Menampilkan aplikasi Apps Script di dalam domain sendiri.
 *
 * Google tidak mengizinkan domain pribadi diarahkan langsung ke aplikasi
 * Apps Script, jadi aplikasinya dimuat di dalam bingkai selebar layar.
 * Alamat di bilah browser tetap www.alhudagpg3.web.id.
 */
function pasangBingkai(parameter) {
  var bingkai = document.getElementById('bingkai');
  var memuat = document.getElementById('memuat');
  var cadangan = document.getElementById('cadangan');
  var langsung = document.getElementById('tautanLangsung');

  if (!window.URL_APLIKASI || URL_APLIKASI.indexOf('GANTI_DENGAN') >= 0) {
    memuat.innerHTML = '<p><b>URL aplikasi belum diisi.</b></p>' +
      '<p class="kecil">Buka berkas alamat.js lalu tempel URL web app (berakhiran /exec).</p>';
    return;
  }

  var url = URL_APLIKASI + (parameter ? (URL_APLIKASI.indexOf('?') >= 0 ? '&' : '?') + parameter : '');
  langsung.href = url;

  // Bila aplikasi belum tampil dalam 12 detik, beri jalan pintas membuka langsung.
  var penunda = setTimeout(function () { cadangan.hidden = false; }, 12000);

  bingkai.onload = function () {
    clearTimeout(penunda);
    memuat.classList.add('selesai');
    setTimeout(function () { memuat.style.display = 'none'; }, 350);
  };
  bingkai.src = url;
}
