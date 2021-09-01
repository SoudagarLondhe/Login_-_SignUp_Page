function validate_name()
{
  var name= document.getElementById("name").value;
  var letters= /^[A-Za-z]+$/;
  if(name.trim()=="")
  {
    textname.innerHTML = "&nbsp;No Empty Field<br>";
    textname.style.color = "#ff0000";
  }
  else
  {
    if(!name.match(letters))
    {
      textname.innerHTML = "&nbsp;Numbers not allowed<br>";
      textname.style.color = "#ff0000";
    }
    if(name.length<=3)
    {
      textname.innerHTML = "&nbsp;Atleast three characters<br>";
      textname.style.color = "#ff0000";
    }
  }
  if(name.match(letters) && name.length>=3)
  {
    textname.innerHTML = "&nbsp;Name is valid<br>";
    textname.style.color = "#006400";
  }
}
//
function last_name(input)
{
  var regex = /[^a-z]/gi;
  input.value =input.value.replace(regex,"");
}
//
function check_regId()
{
     var pattern = /(C2K|I2K|E2K)[0-9]{8}$/;
     var reg = document.getElementById("regid").value;

     if (pattern.test(reg) && reg !== '')
     {
         reg_error_message.innerHTML = "&nbsp;Reg_Id is valid<br>";
         reg_error_message.style.color = "#006400";
     }
     else
     {
       reg_error_message.innerHTML = "&nbsp;Invalid<br>";
       reg_error_message.style.color = "#ff0000";
     }
 }
 //
 function validate_email()
 {
   var email= document.getElementById("email").value;
   var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(email.match(pattern))
   {
     email_error_message.innerHTML = "&nbsp;Your Email Address in Valid<br>";
     email_error_message.style.color = "#006400";
   }
   else
   {
     email_error_message.innerHTML = "&nbsp;Please Enter valid<br>";
     email_error_message.style.color = "#ff0000";
   }

   if( email.trim() =="")
   {
     email_error_message.innerHTML = "&nbsp;No Empty Field<br>";
     email_error_message.style.color = "#ff0000";
   }
 }
 //
 function validate_password1()
 {
     var str= document.getElementById("passwords1").value;
     if (str.match(/[a-z]/g) && str.match(
       /[A-Z]/g) && str.match(
                   /[0-9]/g) && str.match(
                   /[^a-zA-Z\d]/g) && str.length >= 8)
     {
       pass1_error_message.innerHTML = "&nbsp;Valid password<br>";
       pass1_error_message.style.color = "#006400";
       return true;
     }

     errors = [];
   if (str.length < 8)
   {
       errors.push("<br>•Your password must be at least 8 characters");
   }

   if (str.search(/[0-9]/) < 0)
   {
       errors.push("<br>•Your password must contain at least one digit.");
   }

   if (str.search(/[a-z]/) < 0)
   {
      errors.push("<br>•Your password must contain at least one lowercase letter.")
   }

    if (str.search(/[A-Z]/) < 0)
    {
       errors.push("<br>•Your password must contain at least one uppercase letter.")
    }

   if (errors.length > 0)
   {
     pass1_error_message.innerHTML = errors;
     pass1_error_message.style.color = "#ff0000";
   }
 }
 //
 function validate_password2()
 {
   var x= document.getElementById("passwords1").value;
   var y= document.getElementById("passwords2").value;
   if(y.trim()=="")
   {
     pass2_error_message.innerHTML = "&nbsp;No Empty Field<br>";
     pass2_error_message.style.color = "#ff0000";
   }
   if(x!=y)
   {
     pass2_error_message.innerHTML = "&nbsp;Passwords do not match<br>";
     pass2_error_message.style.color = "#ff0000";
   }
   else
   {
     pass2_error_message.innerHTML = "&nbsp;Password matched<br>";
     pass2_error_message.style.color = "#006400";
   }
 }
 //
 function validate_phone()
 {
 var x= document.getElementById("mobilenumber").value;
 var letters= /^[A-Za-z]+$/;
   if(x.trim()=="")
   {
     mobile_error_message.innerHTML = "&nbsp;No empty field<br>";
     mobile_error_message.style.color = "#ff0000";
   }
   if(isNaN(x))
   {
     mobile_error_message.innerHTML = "&nbsp;No characters allowed<br>";
     mobile_error_message.style.color = "#ff0000";
   }
   if(x.length<10 || x.length>10)
   {
     mobile_error_message.innerHTML = "&nbsp;Number of digits should be 10<br>";
     mobile_error_message.style.color = "#ff0000";
   }
   if(x.length==10 && !isNaN(x) && x!="")
   {
     mobile_error_message.innerHTML = "&nbsp;Valid Number<br>";
     mobile_error_message.style.color = "#006400";
   }
 }
 function phone_check(input)
 {
   var regex =/[^0-9]/g;
   input.value = input.value.replace(regex,"");
 }
 //
 function validate_radio()
 {
   var a=document.forms.gender;
   for(i=0;i<a.length;i++)
   {
     if(a[i].checked==true)
     {
       return true;
     }
   }
   textradio.innerHTML = "&nbsp;Choose your gender<br>";
   textradio.style.color = "#ff0000";
   return false;
 }
 //
 function validate_country()
 {
   var x=document.getElementById('select');
   if(x.value == "NotValid")
   {
     textcountry.innerHTML = "&nbsp;Choose your country<br>";
     textcountry.style.color = "#ff0000";
     return false;
   }
     return true;
 }
 //
 function validate()
 {
   if(validate_radio() && validate_country())
   {
     //success
     return true;
   }
   else
   {
     return false;
   }
 }
