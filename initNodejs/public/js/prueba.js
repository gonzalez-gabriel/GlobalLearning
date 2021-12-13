const userForm = document.getElementById('user-form');
const userFirstName = document.getElementById('user-firstName');
const userLastName = document.getElementById('user-lastName');
const userName = document.getElementById('user-userName');
const userPassword = document.getElementById('user-password');
const userEmail = document.getElementById('user-email');
const userAddress = document.getElementById('user-address');
const userPhone = document.getElementById('user-phone');
const texto = document.getElementById('texto');

//Send POST to API to add store
async function addUser(e) {
    e.preventDefault();

    if(userFirstName.value ==='' || userLastName.value ==='' || userName.value ==='' || userPassword.value ==='' || userEmail.value ==='' || userAddress.value ==='' || userPhone.value ==='' ) {
        alert('Porfa llena los campos');
    }

    const sendBody = {
        firstName: userFirstName.value,
        lastName: userLastName.value,
        userName: userName.value,
        password: userPassword.value,
        email: userEmail.value,
        address: userAddress.value,
        phone: userPhone.value
    }

    try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendBody)
        });
        console.log(sendBody)
        if(res.status === 400){
          // alert('holi');
          throw Error('Store alredy exist.');
        }
    
        // alert('Store added!');
        // window.location.href = 'index.html';
    
      } catch (err) {
        alert(err);
        return;
      }
}

async function getUser(e) {
  e.preventDefault();

  const res = await fetch('/api/users');
  const users = await res.json();

  const strings = users.map(user => JSON.stringify(user,null,4));
  console.log(strings);
  texto.innerText = strings;
}

userForm.querySelector('#post').addEventListener('click', addUser);
userForm.querySelector('#get').addEventListener('click', getUser);