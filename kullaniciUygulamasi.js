var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/kullanici_uygulamasi");

var kullaniciSemasi = new mongoose.Schema({
   kullaniciAdi: String,
   email: String,
    sifre: String,
    sehir: String,
});

var Kullanici = mongoose.model("Kullanici",kullaniciSemasi);
/*
var ahmet = new Kullanici({
    kullaniciAdi: "Ahmet06",
    email: "ahmet@gmail.com",
    sifre: "****",
    sehir: "Ankara",
});

ahmet.save((err,data)=>{
   if(err){
       console.log(err);
   }
   else{
       console.log("Kullanici basariyla eklendi: ", ahmet);
   }
});
*/
/*Kullanici.create({
   kullaniciAdi: "Ayse01",
   email: "ayse01@gmail.com",
   sifre: "*****",
},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
*/
Kullanici.find({kullaniciAdi: "Ayse01"},(err,data)=>{
   if(err){
       console.log(err);
   }
   else{
       console.log(data);
   }
});

//MONGODB METHODLARINI DÖKÜMENTASYONDAN İNCELEYİP YAZ