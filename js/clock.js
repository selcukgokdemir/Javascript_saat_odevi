


// isim alma kısmı yapıldı 
let nameAl = prompt("Adınızı yazınız")

let myName = document.querySelector("#myName")
let zaman = document.querySelector("#myClock")




if  ( nameAl.length > 0) 
{
myName.innerHTML = ` ${nameAl[0].toUpperCase()}${nameAl.slice(1).toLowerCase()} `
}
else (
 myName.innerHTML = ` <a href =  ${document.URL} >adınızıgirmek için tıklayınız</a>`
)



   
//  tarih kısmı

//console.log(new Date())    // ANLIK ZAMAN 
//console.log(` ${new Date().getHours()} ` ) // gunun saat bilgisi
// tarih doğru kısım


const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]


 

  setInterval(function() {

  

    let tarih = new Date()
    let tarih1 = tarih.getHours()
    let tarih2 = tarih.getMinutes()
    let tarih3 = tarih.getSeconds()
    let tarih4 = tarih.getDay()
    let dayss = days[tarih.getDay()]
    
    tarih3 = tarih.getSeconds();
    document.querySelector("#myClock").innerHTML = `${tarih1}:${tarih2}:${tarih3} ${dayss}`
 
}, 1000); 


// tarih kısmında gün saat saniy kısmı alttaki şekilde alındı  bu kısım dan
//   console.log(tarih)
//   console.log("saat :" + tarih1)
//   console.log("dakikak :" + tarih2)
//   console.log("saniye :" + tarih3)
//   console.log("saniye :" + (tarih3+1))
//   console.log("gün :" + tarih4)
//   console.log("gun :" + days)
//   console.log("gunsss : "+ dayssm)
//


// tarih doğru kısım bitiş


 

