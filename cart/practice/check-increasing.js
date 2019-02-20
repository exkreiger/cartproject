 function checkIncrease(list){
    let s1 = 0;
    let s2 = 0;
    let c1 = 1;
    let c2 = 1;
    let count = 0;
        
    list.forEach(function(i){
        //pass state
            //iterate sum
            //iterate check
            //set as last sum
        if (c2 > s2){
            s1 += list[i];
            c1 = s1 + list[i] + 1; 
        }     
        //fail state
            //iterate count
        else {
            count ++;
        }
        
        s1 = s2;
        c1 = c2;

    })
    
    if (count > 1){
        return false;
    }
    else {
        return true;
    }   
}

let l = [1,2,3,4,5];
checkIncrease(l);

/**
 * s1 = 1
 * c1 = 2
 * end --- s1 = s2
 *         c1 = s2
 * s1 update = 3 vs c2 = pass
 * c1 = 7
 * 
 * 
 * 
 * 
 *  */