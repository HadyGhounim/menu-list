


fetch('burger.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('data');

    data.forEach(product => {
      const main = document.createElement('div');
      main.className = 'main';
      main.innerHTML = `
        <img src="${product.image}">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <button class="delete" data-product-id="${product.id}">Delete</button>
      `;
      productList.appendChild(main);
    });

    // Add event listener to handle button clicks
    const deleteButtons = document.querySelectorAll('.delete');

    if (window.location.pathname === '/burgerData.html') {
      deleteButtons.forEach((button) => {
        button.style.display = 'none';
      });
    }

    
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        // Send DELETE request to API
        fetch(`burger.json/${productId}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (response.ok) {
            // Product deleted successfully, remove it from the UI
            button.closest('.main').remove();
            console.log('Product deleted:', productId);
          } else {
            console.error('Error deleting product:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    });
});




const form= document.querySelector('.form');


  form.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(form);
    const data= Object.fromEntries(formData);
    fetch('burger.json', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
});




