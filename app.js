
const boton = document.getElementById("boton");
const añosResultado = document.getElementById("edad_año");
const mesesResultado = document.getElementById("edad_mes");
const diasResultado = document.getElementById("edad_dias");
const diaAlert = document.getElementById("alertDia");
const mesAlert = document.getElementById("alertMes");
const añoAlert = document.getElementById("alertAño");


boton.addEventListener("click",function(){
    const dayInput = document.getElementById("dia").value;
    const monthInput = document.getElementById("mes").value;
    const yearInput = document.getElementById("año").value;

    const fechaNacimiento = yearInput+"-"+monthInput+"-"+dayInput;

    const fecha = new Date();
    const fechaNac = new Date(fechaNacimiento);

    let edad = fecha.getFullYear() - fechaNac.getFullYear();
    let mes = fecha.getMonth() - fechaNac.getMonth();
    let dia;

    const diasMes = new Date(yearInput,(monthInput-1),0).getDate();

    if(dayInput < diasMes && monthInput < 12 && yearInput < fecha.getFullYear()){
        if (mes < 0 || (mes === 0 && fecha.getDate() < fechaNac.getDate())) {
        edad--;
        mes = 12 + mes;
    }

    if (mes < 0) {
        mes = 12 + mes;
    }

    if (fecha.getDate() < fechaNac.getDate()) {
        mes--;
    }

    // Si el mes actual es menor al mes de nacimiento, restar un año
    if (fecha.getMonth() < fechaNac.getMonth()) {
        edad--;
    }

    if(fecha.getDay() < fechaNac.getDate()){
        dia = (fechaNac.getDate() - fecha.getDay()) + (diasMes-fechaNac.getDate());
        
    }else{
        dia = fecha.getDay()-fechaNac.getDate();
    }

    añosResultado.textContent = edad;
    mesesResultado.textContent = mes;
    diasResultado.textContent = dia;
    }else{
        if(dayInput > diasMes){
            diaAlert.textContent = "Enter a valid day"
        }else if(dayInput == ""){
            diaAlert.textContent = "Enter the day you born"
        }

        if(monthInput > 12){
            mesAlert.textContent = "Enter a valid month" 
        }else if(monthInput == ""){
            mesAlert.textContent = "Enter the month you born"
        }

        if(yearInput > fecha.getFullYear()){
            añoAlert.textContent = "Enter a valid year"
        }else if(yearInput == ""){
            añoAlert.textContent = "Enter the year you born"
        }
    }
})

