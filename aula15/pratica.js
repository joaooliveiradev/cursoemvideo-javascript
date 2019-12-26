let pos = [1,5,3,4,7,6,9,8,2,10,20,30,34,94,38,48,54].sort();


for(let i in pos){
    pos.sort((a,b) =>{
        return a - b;
    });
    console.log(pos[0]);
}