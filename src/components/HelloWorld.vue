<template>
  <div class="hello">
    <div class="all" style="text-align: center"><br><br><br>
      <h1>Aplikasi Presensi</h1>
    </div>
              <div class="zq">
            <div class="ww">
        <div class="vx">
        <img
          src="data:image/png;base64,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" class="iq"
        />
        <p>
          SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang
          berdiri pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara <br><br> SMK
          BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari
          Ngaliyan Semarang. Dengan luas lokasi 4004 m2, sarana dan prasarana
          yang memadai, suasana belajar yang nyaman karena berada di tengah
          perkamampungan masyarakat yang jauh dari kebisingan.
        </p>
        </div>
        <div class="xv">
          <p><b>SEKOLAH</b></p><br>
          <p>Sejarah</p>
          <p>Kontak</p>
          <p>Galery</p>
          <p>Berita Smk</p>
        </div>
        <div class="qu">
          <p><b>QUICK LINK</b></p><br><b></b>
          <p>PBB</p>
          <p>Ujian</p>
          <p>Pengumuman</p>
          <p>Kelas Industri</p>
        </div>
        <div class="demo">
          <p><b>ALAMAT</b></p><br>
          <p>Jl. Kemantren Raya <br><br> No.5, RT.02/RW.04 <br><br> Wonosari <br><br> Kota Semarang</p>
        </div>
        </div>
        <div class="kontak">
        <div class="uy">
         <p>Copyright © 2020 Binusa Semarang</p>
         </div>
      <div class="wx">
      <a href="https://www.facebook.com/smkbinusasmg/" class="fa fa-facebook"></a>    
      </div>
      <div class="xww">
      <a href="https://twitter.com/smkbinusasmg" class="fa fa-twitter"></a>    
      </div>
      <div class="ig">
      <a href="https://www.instagram.com/smkbinanusantara_smg/" class="fa fa-instagram"></a>   
      </div>
      <div class="you">
      <a href="https://www.youtube.com/channel/UCw5YNITJ8UTpWB9N55saWhw" class="fa fa-youtube"></a>   
      </div>
      <div class="ui">
        <p></p>
      </div>
      <p>Made with ❤️ at Binusa Semarang</p>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>


<style scoped>
.vx{
  border-radius: 1px;
  width: 38%;
  background-color: white;
  padding: 15px;
}
.xv{
  margin-left: 100px;
}
 .qu{
  margin-left: 100px;
  border: none;
  width: 20%;
 }
 .demo{
  margin-left: 0px;
 }
 .wx{
   font-size: 30px;
   display: flex;
   height: 46px;
 }
  .kontak{
    display: flex;
    padding: 3px;
    background-color: rgb(207, 207, 0);
    color: black;
}
  .uy{
    padding-right: 10rem;
    padding-left: 20px;
    
  }
  .xww, .you, .ig{
    padding-left: 20px;
    font-size: 30px;
  }
   .ui{
     padding-right: 27rem;
   }
   .fa {
  padding: 3px;
  width: 35px;
  text-decoration: none;
  margin: 5px;
  border-radius: 5px;
}
   .fa-youtube {
  background: #bb0000;
  color: white;
   }
   .fa-youtube {
  background: #bb0000;
  color: white;
   }
   .fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: firebrick;
  color: white;
}

</style>
