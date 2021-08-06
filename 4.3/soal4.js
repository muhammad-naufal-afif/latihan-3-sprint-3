// Buatlah sebuah closure Login yang memilik 2 parameter yaitu email dan password.
// Dan jika email dan password benar maka return atau 
// jalankan function goHome yang menampilkan text di console halaman home. 
// Dan jika tidak salah satu salah maka return atau menjalankan function 
// backLogin yang menampilkan text di console login gagal, kembali ke Halaman login

let login = (email, password) => {
    let email1 = "aku@gmail.com"
    let password1 = 999

    function goHome() {
        document.write(`berhasil login`)
    }

    function backLogin() {
        document.write(`login gagal`)
    }
    if (email1 == email && password1 == password) {
            return goHome()
        }else{
            return backLogin()
        }
    }

let masuk = prompt(`email / ID ?`)
let pw = prompt(`Kata sandi?`)
login(masuk, pw)