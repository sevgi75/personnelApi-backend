### PERSONNEL API
``` jsx
Bu projem basic düzeyde bir personel takip projesidir.Projede personellerim ve departmanım var.
Personeli isActive, isAdmin ve isLead olmak üzere 3 kriter üzerinden kontrol ediyorum.
isActive: Kullanıcı aktif mi pasif mi yani sisteme giriş yapmaya yetkisi var mı?
isAdmin: Kullanıcının sisteme giriş yapmanın yanında tümünü yönetmeye yetkisi var mı?
isLead: Kullanıcının sistemin tümünü değil de kendi departmanını yönetmeye yetkisi var mı?
(Bir departmanımız olacak bu departman içinde personeller olacak ve bu personellerden 1 tanesi isLead olacak.)
-- Aslında personel modeli, user modeli gibi düşünülebilir--
```
- Authentication (Kimlik Kontrolü):

Sadece kimlik kontrolü yapar, engelleme yapmaz.Gelen kullanıcının kim olduğunun kontrolünü yaparız.
isLogin Autentication dur.

- Authorization (Yetki Kontrolü):

Kimlik kontrolü yapmaz.Çünkü, authentication tarafından yapılmıştır.
Authorization ı permissions başlığı altında kontrol edeceğiz.
isLead ve isAdmin Authorization dır.
#### Token Authentication:
``` jsx
Backende güvenlik açısından da en sık kullanılan yöntem TOKEN dır.
TOKEN: Simple Token, Basic Token, Classic Token
```
#### Backend Olarak Session-Cookie değilde Token Tercih Etme Sebebim:
1- Güvenlik

2- Farklı alanlara da hizmet verebiliyor olmam.
(Backend olarak sadece frontende(web tarayıcısına) hizmet etmiyorum, mobil app., internete erişimi olan cihazlar(buzdolabı vb.) ya da elektronik cihazlar vs.)
``` jsx
Frontend backende username ve password gönderiyor.Benim be olarak bu kullanıcıyı başka url e gitmek istediğinde hatırlamam gerekiyor.Bunu session ve cookieler yardımıyla yapabiliyorum.Fakat bu güvenli bir yöntem değil.Aynı zamanda sadece tarayıcılara değil farklı cihazlarada hizmet edebilmeliyim.Bu session ile mümkün değil.

Bu yüzden giriş yapan kullanıcılar için token oluşturup token da saklayacağım.Token verisini kullanıcıya geri vereceğim.Fe deki kullanıcıyı be olarak hatırlamam için, fe bütün işlemlerinde header başlığı altında be e TOKEN göndermek zorunda.
```
``` jsx
mongoose böyle çağırmamızın nedeni:

const {mongoose} = require('../configs/dbConnection')

modulü tekrar tekrar çağırmamak, her modül bellekte yer kaplıyor.Sağlıklı olan yöntem bu şekilde.

const mongoose = require('mongoose')

const dbConnection = function() {
    // Connect:
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}
module.exports = {
    mongoose,
    dbConnection
} 
```
### SET METHODU:
``` jsx
Veri tabanına bir şey yazılacaksa set metodundan çıktıyı alıyor.Set metodunun bir diğer özelliği de create ve update yaparken değil de read(filtreleme) yaparkende çalışıyor.

password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password),
    },

Set işlemi yapmışsam ve findOne işlemi yapıyorsam encrypt işlemi yapmıyorum.
findOne, passwordu modeldeki set metodundaki encrypt i kullanarak db'de filtreleme yapar.

const user = await Personnel.findOne({ username, password })
```
