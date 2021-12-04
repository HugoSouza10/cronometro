
/*VARIÁVEIS  GLOBAIS*/

let mile = 0, hours = 0, secund = 0, min = 0;

/*VARIÁVEIS RESPONSÁVEIS POR ATUALIZAR OS ZEROS */
let countStart = 0, countEnd = 0, countEnd_min = 0, countStart_min = 0, countEndHours = 0, countStartHours = 0;

/*Serve para guardar o limite dos mileSegundos */
let scoreLimit = 100;

/*verficar se está parado através de um boolen */
let verifyStop;





/*Função de selecionar objetos */
const s = (el) => document.getElementById(el);



/*BOTÃO INICIAR */

s('start').addEventListener('click',()=>{
    scoreInfinit();
});


/*CONTAGEM */
function scoreInfinit() {
    inteval =  setInterval(()=>{
        /*Milesegundos */
        if(mile <= scoreLimit){
            mile++;
            let mil = s('Mile');
            mil.innerHTML = mile;
         }


        if(mile == scoreLimit){
            secund++;
            mile = 0;
        }

        /*Segundos */
               

        if(secund < 10){
            countEnd = s('widget_number_end_seg').innerHTML = secund;
                    
        }else{
            countStart++;
            secund = 0;
            s('widget_number_start_seg').innerHTML = countStart;

            if(countStart>5){
                /*Se countStart for maior que 5 significa que passou dos 59, então precisa atualizar countStart e o countEnd_min */
                countStart=0;
                countEnd_min++;
                s('widget_number_end_min').innerHTML = countEnd_min;
                s('widget_number_start_seg').innerHTML = countStart;


            }

            /*Verificar se o countEnd_min, ou seja, ultimo do minutos é maior que 10, caso seja atualize */
            if(countEnd_min>=10){
               countEnd_min = 0;
               countStart_min++;
               s('widget_number_start_min').innerHTML = countStart;
               s('widget_number_end_min').innerHTML = countEnd_min;
               


               if(countStart_min>5){
                   countStart_min = 0;
                   countEndHours++;
                   s('widget_number_start_min').innerHTML = countStart_min;
                   s('widget_number_end_hours').innerHTML = countEndHours;
                   /*Atualizar a hora */
               }


               if(countEndHours>5){
                    countEndHours = 0;
                    countStartHours++;
                    s('widget_number_end_hours').innerHTML = countEndHours;
                    s('widget_number_start_hours').innerHTML = countStartHours;

               }

               if(countStartHours> 2){
                    countStartHours = 0;
                    s('widget_number_start_hours').innerHTML = countStartHours;
               }




            }
            


        }



              

        
    },2);

} 
   



s('stop').addEventListener('click',()=>{
        clearInterval(inteval);
        verifyStop = true;
});


s('reset').addEventListener('click',()=>{
       if(verifyStop == true){
          mile = 0, countStart = 0, countEnd = 0,  countEnd_min = 0, countStart_min = 0,  countStartHours = 0, countEndHours = 0;
          s('Mile').innerHTML = mile;
          s('widget_number_end_min').innerHTML = countEnd_min;
          s('countStart_min').innerHTML = countStart_min;
          s('widget_number_start_hours').innerHTML = countStartHours;
          s('widget_number_end_hours').innerHTML = countEndHours;
          s('widget_number_start_seg').innerHTML = countStart;
          s('widget_number_end_seg').innerHTML = countEnd;

       }
});


s('save').addEventListener('click',()=>{
        if(verifyStop == true){
            s('historic_hours').innerHTML = hours;
            s('historic_minutes').innerHTML = secund;
            s('historic_seg').innerHTML = min;
            s('historic_mile').innerHTML = mile;
            
            
        }
});




/*PARA USAR O CLEANiNTERVAL VOCÊ PRECISA GUARDAR O INTERVALO EM UMA VARIÁVEL */

/*A FUNÇÃO CLEAN SÓ FUNCIONA COM FUNÇÃO NOMEADA */

/*CRIE UMA VARIÁVEL GLOBAL E ARMAZE O TIME DENTRO DELA */











