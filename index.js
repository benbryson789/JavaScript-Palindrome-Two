function PalindromeTwo(str) { 

    // code goes here
    let answer = "";
    str = str.replace(/[^a-z]/ig, "");
  
    const reversed = str.split("").reverse().join("")
  
    if(str.toLowerCase() === reversed.toLowerCase()){
      answer = "true"
    }else {
      answer = "false"
    }
  
    return answer;
  
  }

  PalindromeTwo("Noel - sees Leon")
  PalindromeTwo("A war at Tarawa!")
     
  // keep this function call here 
  //console.log(PalindromeTwo(readline()));
  