// =============================================================
//  DUYURULAR — sadece bu dosyayı düzenlemeniz yeterli
// =============================================================
// Her duyuru:
//   { tarih: "gg/aa/yyyy", baslik: "...", metin: "...", dosyalar: ["dosya.pdf"] },
// Sayfada bu dosyadaki sırayla görünür (en üstteki ilk).
// dosyalar: PDF'leri "dosyalar" klasörüne koyup adını yazın.
//           İnternet adresi (https://...) de yazabilirsiniz. Dosya yoksa: []
// Metin içinde tırnak (") kullanacaksanız başına \ koyun: \"

var DUYURULAR = [
  { tarih: "30/06/2026", baslik: "AİDAT, SICAK SU , DEMİRBAŞ ÖDEME AÇIKLAMA VE IBAN BİLGİSİ", metin: "IBAN",
    dosyalar: ["ÖDEME BİLGİSİ.pdf"] },
  { tarih: "01/09/2026", baslik: "Sıcak Su Aylık Tüketim Listesi", metin: "Hesaplam aylık tüketim X 90 + 55",
    dosyalar: ["Ağustos 2026 Sıcaksu tüketimleri.pdf"] },
  { tarih: "15/09/2026", baslik: "OLAĞAN ÜSTÜ GENEL KURUL BİLDİRİMİ", metin: "OLAĞAN ÜSTÜ GENEL KURUL DAVET MEKTUBU BİLDİRİMİ",
    dosyalar: ["2026 olağanüstü genel kurul davet mektubu.pdf"] },
  { tarih: "05/06/2026", baslik: "24 Mayıs 2026 Tarihli Genel Kurul Tutanağı", metin: "24 Mayıs 2026 Tarihli Genel Kurul Tutanağı",
    dosyalar: ["Genel Kurul Tutanağı.pdf"] },
  { tarih: "04/06/2026", baslik: "24 Mayıs 2026 Tarihli Genel Kurul Sonrası Bilgilendirme Yazısı Örneği", metin: "24 Mayıs 2026 Tarihli Genel Kurul Sonrası Bilgilendirme Yazısı Örneği",
    dosyalar: ["Genel Kurul Sonrası Bilgilendirme.pdf"] },
  { tarih: "14/06/2019", baslik: "Site Yönetim Planı", metin: "SİTE YÖNETİM PLANIMIZ",
    dosyalar: ["Site Yönetim Planı  01.10.2018.pdf"] },
  { tarih: "18/05/2026", baslik: "2025-2026 BİLANÇO", metin: "2025-2026 BİLANÇOSU",
    dosyalar: ["2025-2026 bilanço.pdf"] },
  { tarih: "01/04/2019", baslik: "Bina Giriş Kapısı Özel Şifre Nasıl Oluşturulur", metin: "",
    dosyalar: ["BLOK GİRİŞİNDE KONUTUNUZA AİT ŞİFRE  GİRİŞİ NASIL OLUŞTURULUR.pdf"] }
];
