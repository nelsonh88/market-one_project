"use strict"

const resetInputFields = function() {
  var frm = document.getElementsByName('userForm')[0];
  frm.reset();
}

let hasErrors = true

// version 2 of validation
const validation = function(e) {
  const target = e.target;
  const errmsg = target.parentNode.getElementsByClassName('errormessage');
  if (target.value.length === 0) {
    target.classList.add('error');
    target.parentNode.classList.add('error');
    errmsg[0].style.display = 'block';
    return hasErrors = true;
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
    return hasErrors = true;
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
    return hasErrors = true;
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
    return hasErrors = true;
  } else {
    errmsg[0].style.display = 'none';
    target.parentNode.classList.remove('error');
    return hasErrors = false
  }
}

const checkAll = function() {
  let errmsg = document.querySelector('.errormessage00');
  let noerrmsg = document.querySelector('.successmessage');
  let formFields = document.querySelectorAll('.formgroup');
  let inputs = document.querySelectorAll('.formgroup input');
  let selects = document.querySelectorAll('.formgroup select');
  for (let i = 0; i < formFields.length; i++) {
    if (i < inputs.length && inputs[i].value === '') {
      hasErrors = true;
      errmsg.style.display = 'block';
      break
    } else if (i === 5 && selects[0].value === '') {
      hasErrors = true;
      errmsg.style.display = 'block';
      break
    }

  }
  if (!hasErrors) {
    resetInputFields();
    errmsg.style.display = 'none';
    noerrmsg.style.display = 'block';
    setTimeout(() => {
      noerrmsg.style.display = 'none';
    }, 4000)
  }

}
