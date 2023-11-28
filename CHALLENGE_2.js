const simbolos = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
const simbolosSplit = simbolos.split("");

let cuenta = 0;
let total = [];

for (let i = 0; i < simbolosSplit.length; i++) {

  switch (simbolosSplit[i]) {
    case "#":
      cuenta += 1;
      break;
    case "@":
      cuenta -= 1;
      break;
    case "*":
      cuenta *= cuenta;
      break;
    case "&":
      total.push(cuenta)
      console.log(total.join(''));
      break;
    default:
      console.log('error');
  };
};