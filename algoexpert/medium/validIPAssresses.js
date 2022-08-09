//each IP consists of 4 parts(each part cannot be longer than 3 digits)
//find one valid part at a time and then combine stese 4 parts to create 1 valid IP address
//TRy all of the valid positions in periods in input string
//!!Notice there shoud NOT be any leading 0 s! (as 192.168.00.01)=>WRONG

//1.pick the 1st location for the 1st period
//Time O(1);Space O(1); doesn't depend on the size of string. There's a constant amount of IP addresses
//that we can generate
function validIPAddresses(string) {
    let results = [];
    //now let's look through all the possible positions where we can insert a period!
    for (let i = 0; i < Math.min(string.length, 4); i++) {
      let curIP = ["", "", "", ""];
      //decide what will be our first part of IP
      curIP[0] = string.slice(0, i); //will give us whatever is before the 1st period we place
      console.log('curIP[0]:',curIP[0])
      if (!isValidPart(curIP[0])) continue;
      //once we found the place for first period=>found first valid part
      //let's find the next valid parts(the place where to insert the next period) that we can generate
      //with curIP[0]
      //i+1 becase we want to put next period at least one more position from previous and AT MOST 3 positions past i
      for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
        curIP[1] = string.slice(i, j); //we start from index i(after the previous valid part) and j -is where we place the next period
        console.log('curIP[1]:',curIP[1]) //???
        if (!isValidPart(curIP[1])) continue;
  
        for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
          curIP[2] = string.slice(j, k); //we start from index j after the previous valid part) and untill k -is where we place the next period
          console.log('curIP[2]:',curIP[2])
          curIP[3] = string.slice(k); // the last 4th part is whatever is left after the third part
           console.log('curIP[3]:',curIP[3])
          if (isValidPart(curIP[2]) && isValidPart(curIP[3])) {
            results.push(curIP.join("."));
             console.log('results',results)
          }
        }
      }
    }
    return results;
  }
  function isValidPart(str) {
    let num = +str; //when we convert it to the number any leading 0 s will be dissapeared(01=>0)
    console.log('num:',num)
    if (num > 255) return false;
    console.log('!',str.length === num.toString().length)
    return str.length === num.toString().length; //check for leading 0
  }
  