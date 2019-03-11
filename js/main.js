"use strict"

console.log("aiiyo")


const resetInputFields = function () {
  var frm = document.getElementsByName('userForm')[0];
  frm.reset();
}

let hasErrors = true

/*
const validation = function() {
  // let str = document.userForm.email.value

  if (document.userForm.firstname.value == "") {
    alert("Please provide your first name!");
    document.userForm.firstname.focus();
    return false;
  }
  if (document.userForm.lastname.value == "") {
    alert("Please provide your last name");
    document.userForm.lastname.focus();
    return false;
  }
  if (document.userForm.title.value == "") {
    alert("Please provide your title!");
    document.userForm.title.focus();
    return false;
  }
  // if (str == "") {
  //   alert("Please provide your email!");
  //   document.userForm.email.focus();
  //   return false;
  // }
  // if (!str.includes("@")) {
  //   alert("Please provide a valid email!");
  //   document.userForm.email.focus();
  //   return false;
  // }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userForm.email.value)) {
    alert("Please provide a valid email!");
    document.userForm.email.focus();
    return false;
  }
  if (document.userForm.phone.value == "" || isNaN(document.userForm.phone.value) ||
    document.userForm.phone.value.length != 10) {

    alert("Please provide a 10-digit phone number in the format 1234567890.");
    document.userForm.phone.focus();
    return false;
  }
  if (document.userForm.alreadyaclient.value == "") {
    alert("Please answer \'Already A Client?\'");
    document.userForm.alreadyaclient.focus();
    return false;
  }

  alert("Form submitted successfully");
  resetInputFields()
  return (true);
}
*/

// version 2 of validation
const validation = function(e) {
  const target = e.target;
  const errmsg = target.parentNode.getElementsByClassName('errormessage');
  if (target.value.length === 0) {
    target.classList.add('error');
      target.parentNode.classList.add('error');
      errmsg[0].style.display = 'block';
    } else {
	    errmsg[0].style.display = 'none';
    	target.parentNode.classList.remove('error');
      return hasErrors = false
    }
  }

  const emailValidation = function(e) {
    const target = e.target;
    const errmsg = target.parentNode.getElementsByClassName('errormessage');
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userForm.email.value)) {
          target.classList.add('error');
        target.parentNode.classList.add('error');
        errmsg[0].style.display = 'block';
      } else {
  	    errmsg[0].style.display = 'none';
      	target.parentNode.classList.remove('error');
        return hasErrors = false
      }
  }

  const phoneValidation = function(e) {
    const target = e.target;
    const errmsg = target.parentNode.getElementsByClassName('errormessage');
    if (document.userForm.phone.value == "" || isNaN(document.userForm.phone.value) ||
      document.userForm.phone.value.length != 10) {
            target.classList.add('error');
        target.parentNode.classList.add('error');
        errmsg[0].style.display = 'block';
      } else {
        errmsg[0].style.display = 'none';
        target.parentNode.classList.remove('error');
        return hasErrors = false
      }
  }

  const clientValidation = function(e) {
    const target = e.target;
    const errmsg = target.parentNode.getElementsByClassName('errormessage');
    if (document.userForm.alreadyaclient.value == "") {
          target.classList.add('error');
        target.parentNode.classList.add('error');
        errmsg[0].style.display = 'block';
      } else {
        errmsg[0].style.display = 'none';
        target.parentNode.classList.remove('error');
        return hasErrors = false
      }
  }

  const checkAll = function() {
    debugger
//     let formFields = document.querySelectorAll('.formgroup');
//     for (let i=0; i<formFields.length; i++) {
//   	if (formFields[i].classList.contains('error')) {
//       break;
//     } else {
//     	hasErrors = false;
//       alert("submitted successfully");
//     }
//   }
// }
let errmsg = document.querySelector('.errormessage');
let noerrmsg = document.querySelector('.successmessage');
let formFields = document.querySelectorAll('.formgroup');
for (let i=0; i<formFields.length; i++) {
    if (hasErrors) {
      break
    } else {
      resetInputFields()
    }
    }
  }

  const checker = function (e) {
    const target = e.target;
    let errmsg = document.querySelector('.errormessage00');
    let noerrmsg = document.querySelector('.successmessage');
    checkAll();
   if (hasErrors === true) {
     target.parentNode.parentNode.classList.add('error');
     errmsg[0].style.display = 'block';
   } else {
     target.parentNode.parentNode.classList.remove('error');
     errmsg[1].style.display = 'none';
   }
  }
