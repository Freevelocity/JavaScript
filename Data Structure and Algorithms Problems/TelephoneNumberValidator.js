function telephoneCheck(str) {
    let sum =0;
   if(str.indexOf("(") === -1 && str.indexOf(")") > -1) return false;
   if(str[0] === "-") return false;
   if(str.indexOf(")") - str.indexOf("(") >= 5) return false;
  
   for(let i = 0; i < str.length; i++)
   {
     if(str[i] ==="-")
     {
        sum ++;
     }
   }
  
    if(sum > 2) return false
  
  
  
  var newPhone = str.replace(/-| /g, '');
  
  if(newPhone.indexOf("(") < newPhone.indexOf(")"))
  {
    newPhone = newPhone.replace(/\(|\)/g,'');
  }
  if(newPhone.length == 10 || newPhone.length === 11 && newPhone[0] === "1")
   {
     return true;
   }
  
    return false;
  }
  
  console.log(telephoneCheck("55 55-55-555-5"));