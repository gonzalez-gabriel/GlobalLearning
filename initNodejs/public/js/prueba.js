const userForm = document.getElementById('user-form');
const userFirstName = document.getElementById('user-firstName');
const userLastName = document.getElementById('user-lastName');
const userName = document.getElementById('user-userName');
const userPassword = document.getElementById('user-password');
const userEmail = document.getElementById('user-email');
const userAddress = document.getElementById('user-address');
const userPhone = document.getElementById('user-phone');
const userId = document.getElementById('user-id');
const texto = document.getElementById('texto');


async function addUser(e) {
    e.preventDefault();

    

    const sendBody = {
        firstName: userFirstName.value,
        lastName: userLastName.value,
        userName: userName.value,
        password: userPassword.value,
        email: userEmail.value,
        address: userAddress.value,
        phone: userPhone.value,
    }

    try {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendBody),
        });
        // location.reload();  

        if(res.status === 400){
          res.text().then(text => {
            const obj = JSON.parse(text);
            const msg = Object.values(obj);
            // .map(item => `ERROR: ${item}.`);
            throw new Error(`ERROR: ${msg}`);
          })
          .catch(err => {
            alert(err.message);
          });
        }
    
        // alert('Store added!');
        // window.location.href = 'index.html';

      } catch (err) {
        alert(err.message);
        return;
      }
}

async function getUser(e) {
  e.preventDefault();

  const res = await fetch('/api/users');//El metodo get va por defecto y los header son opcionales
  const users = await res.json();

  const strings = users.map(user => JSON.stringify(user,null,4));
  console.log(strings);
  texto.innerText = strings;
}



async function putUser(e) {
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
      const res = await fetch(`/api/users/${userId.value}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBody)
      });
      console.log(res.status);
      if(res.status === 500){
        // alert('holi');
        throw Error('User alredy exist.');
      }
  
      // alert('Store added!');
      // window.location.href = 'index.html';
  
    } catch (err) {
      alert(err);
      return;
    }
    // location.reload();

}
async function deleteUser(e) {
  e.preventDefault();
  let isDelete = confirm(`Estás seguro que deseas eliminar el id ${userId.value}?`);

  if(isDelete){
    try {
        const res = await fetch(`/api/users/${userId.value}`, {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json'
          },
        });
        } catch (err) {
          alert(err);
          return;
        }
    location.reload();
  }
}

userForm.querySelector('#post').addEventListener('click', addUser);
userForm.querySelector('#get').addEventListener('click', getUser);
userForm.querySelector('#put').addEventListener('click', putUser);
userForm.querySelector('#delete').addEventListener('click', deleteUser);
