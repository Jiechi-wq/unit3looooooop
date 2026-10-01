
function slots(Q, M1, M2, M3){
    let x = 0;
    while(Q>0){
        Q = Q-1;
        M1 = M1+1;
        x = x+1;
        if(M1 === 35){
            Q = Q+30;
            M1 = 0;
        }
        if (Q<=0){
            break;
        }
         Q = Q-1;
        M2 = M2+1;
        x = x+1;
        if(M2 === 100){
            Q = Q+60;
            M2 = 0;
        }
        if (Q<=0){
            break;
        }
         Q = Q-1;
        M3 = M3+1;
        x = x+1;
        if(M3 === 10){
            Q = Q+9;
            M3 = 0;
        }
    }
    console.log("Martha plays ", x ,"times before going broke.")
}
console.log(slots(48,3,10,4));