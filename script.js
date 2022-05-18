let minuto = 0;
let segundo = 0;
let miliS = 0;

let minutoHtml = document.getElementById("minuto");
let segundoHtml = document.getElementById("segundo");
let miliSHtml = document.getElementById("miliS");

let cron;

function returnData(numero) {
  return numero > 10 ? numero : `0${numero}`;
}

function contar() {
  if ((miliS += 10) == 1000) {
    miliS = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60) {
    minuto = 0;
  }

  minutoHtml.innerText = returnData(minuto);
  segundoHtml.innerText = returnData(segundo);
  miliSHtml.innerText = returnData(miliS);
}

function inicio() {
  pausar();
  cron = setInterval(() => {
    contar();
  }, 10);
}

function pausar() {
  clearInterval(cron);
}

function limpar() {
   pausar();
    setTimeout(()=>{  
        minuto = 0;
        segundo = 0;
        miliS = 0;
        minutoHtml.innerText = "00";
        segundoHtml.innerText = "00";
        miliSHtml.innerText = "000";
        

    }, 1000)
    

}
