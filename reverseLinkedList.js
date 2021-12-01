//null -> 1 -> 2 -> 3 -> 4 -> 5 ->null

let func = (p2) =>{
    let p1 = null;
    while(p2 !== null){
        let p3 = p2.next; //we saved refference in p3
        p2.next = p1; //we change our  arrow
        p1 = p2;
        p2 = p3
    }
    return p2
}