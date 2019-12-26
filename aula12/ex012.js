let hora = new Date();

console.log(`Agora são exatamente ${hora.getHours()} horas`);
if(hora.getHours() <= 12){
    console.log('Bom dia!')
} else if (hora.getHours() <= 18){
    console.log('Boa tarde!')
} else if(hora.getHours() <= 00) {
    console.log('Boa noite!')
} else if (hora.getHours() <= 04){
    console.log('Boa madrugada!')
}