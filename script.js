async function displayProductData() {
  const productContainer = document.getElementById("productContainer");

  try {
    // Fetch product data
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products = await response.json();

    // Generate product cards
    const productCards = products
      .map(
        (product) => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price: $${product.price}</strong></p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");

    // Insert cards into the container
    productContainer.innerHTML = productCards;
  } catch (error) {
    // Handle errors
    console.error("Error fetching product data:", error);
    productContainer.innerHTML = `<div class="alert alert-danger">Error loading products. Please try again later.</div>`;
  }
}

// Execute function on page load
document.addEventListener("DOMContentLoaded", displayProductData);
