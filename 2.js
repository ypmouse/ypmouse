 function validasi (){

 	var username = /^[a-z]{5}$/;
 	var password = /^([0-9+]{2}@[A_Z]{4})$/;
 

 if(!username.test(form.username.value)){
 	alert ('Penulisan username minimal 5 huruf kecil');
 	form.username.focus();
 	return (false);
 }

 else if(!password.test(form.password.value)){
 	alert('Penulisan password tidak benar');
 	form.password.focus();
 	return(false):
 }

else{
	return (true);
	}
}