// let nama = ("adi","yusuf",pulang)
// Diketahui newCallback("adi","yusuf",pulang) buatlah function newCallback 
// yang memiliki 3 parameter untuk parameter 1 dan 2 yaitu nama dan asal dan 
// untuk parameter 3 callback pulang dan function newCallback mengembalikan juga callback peluang. 
// Jangan lupa buat juga function peluang.

let newCallback = (nama, asal) => {
  console.log(`${nama} ${asal}`);
  pulang();
};

let pulang = () => {
  console.log("Pulang Kampung");
};

let nama = "adi";
let asal = "yusuf";

newCallback(nama, asal, pulang);