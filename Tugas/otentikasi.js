function login(){
    Username=document.getElementById("Username").value; 
    Password= document.getElementById("Password").value;
    
   if(Username== "Zayn Malik" && Password=="Direction12"){
        alert("Selamat anda berhasil Login");
        window.location="belajarjavascript.html";
        return false;
    }
    
    else{
        alert("Username dan password salah");
    }
   
  
    
}
   