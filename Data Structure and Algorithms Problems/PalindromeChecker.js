function palindrome(str) {
        let newString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
        let splitString = newString.split("");
        let reverseString = splitString.reverse();
        let reveredString = reverseString.join("");

        if(newString == reveredString)
        {
            return true;
        }
        else
            return false;
      
       
  }
  
palindrome("My age is 0, 0 si ega ym.");