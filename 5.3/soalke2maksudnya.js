let dataHandling = (input) => {};

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
       ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
       ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
       ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
   ]



   input.map((item) => {
    console.log(`
      Nomer ID : ${item[0]}
      Nama Lengkap : ${item[1]}
      TTL : ${item[2]} ${item[3]}
      Hobi : ${item[4]}`);
  });
  
  dataHandling(input);
  