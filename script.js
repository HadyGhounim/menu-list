const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const secondHiddenElements = document.querySelectorAll('.hidden-1');
secondHiddenElements.forEach((el) => observer.observe(el));




// fetch('http://localhost:9000/products')
//   .then(res => res.json())
//   .then(data => {

//     // Access the HTML elements
//     const list = document.querySelector('.meals');


//     // Create list items for each user
//     data.forEach(user => {
//       const listItem = document.createElement('div');
//       listItem.textContent= user.title;
//       list.appendChild(listItem);
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// const productTemplate = document.getElementById('product-template');
// const productsContainer = document.getElementById('products-container');
// const addProductButton = document.getElementById('add-product-button');

// let products = [];

// addProductButton.addEventListener('click', () => {
//   // Add logic to get user input (e.g., from a form) and create a new product object
//   const newProduct = {
//     id: Math.random().toString(36).substring(2, 15),
//     name: 'Product Name', // Replace with actual name
//     price: 10, // Replace with actual price
//     image: 'product-image.jpg', // Replace with actual image URL
//   };

//   products.push(newProduct);
//   renderProducts();
// });

// productsContainer.addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     const productId = event.target.dataset.productId;
//     const productIndex = products.findIndex(product => product.id === productId);
//     if (productIndex !== -1) {
//       products.splice(productIndex, 1);
//       renderProducts();
//     }
//   }
// });

// function renderProducts() {
//   productsContainer.innerHTML = '';
//   products.forEach(product => {
//     const productElement = productTemplate.content.cloneNode(true);
//     productElement.querySelector('h2').textContent = product.name;
//     productElement.querySelector('img').src = product.image;
//     productElement.querySelector('p').textContent = `Price: $${product.price}`;
//     productElement.querySelector('button').dataset.productId = product.id;
//     productsContainer.appendChild(productElement);
//   });
// }
