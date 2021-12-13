const storeForm = document.getElementById('store-form');
const storeLastName = document.getElementById('store-lastName');
const storeAddress = document.getElementById('store-address');
const storeName = document.getElementById('store-name');

//Send POST to API to add store
async function addStore(e) {
    e.preventDefault();

    if(storeLastName.value ==='' || storeAddress.value ==='') {
        alert('Please fill in fields');
    }

    const sendBody = {
        storeLastName: storeLastName.value,
        address: storeAddress.value,
        name: storeName.value
    }

    try {
        const res = await fetch('/api/books', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendBody)
        });
    
        if(res.status === 400){
          throw Error('Store alredy exist.');
        }
    
        alert('Store added!');
        // window.location.href = 'index.html';
    
      } catch (err) {
        alert(err);
        return;
      }
}

storeForm.addEventListener('submit', addStore)