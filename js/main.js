"use strict"

console.log("aiiyo")

const validation = function() {
  let str = document.userForm.email.value

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
  return (true);
}
