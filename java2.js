var week = Number(prompt("Апта күнін енгізіңіз!"));
if(0<week<8){
    switch(week){
        case 1: alert("Дүйсенбі!")
        break;
        case 2: alert("Сейсенбі!")
        break;
        case 3: alert("Сәрсенбі!")
        break;
        case 4: alert("Бейсенбі!")
        break;
        case 5: alert("Жұма!")
        break;
        case 6: alert("Сенбі!") 
        break;
        case 7: alert("Жексенбі!") 
        break;
        default: alert("Дұрыс санды енгізбедіңіз!(1-7)") 
    }
}