document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    getProductDetails(productId);
});

async function getProductDetails(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        displayProduct(product);
    } catch (error) {
        console.log(error);
    }
}

function displayProduct(product) {
    const productDetails = document.getElementById("product__details");
    productDetails.innerHTML = `
        <div class="card__flex card col-md-3 m-auto mt-5 px-3 d-flex">
            <img src="${product.image}" alt="${product.title}" class=""/>
            <div class="card-body mt">
                <h5 class="card-title">${product.title}</h5>
                <p class="mt-4">Price: $${product.price}</p>
                <p>Rating: <i class="fa-solid fa-star" style="color: #FFD43B;"></i>  ${product.rating.rate} (${product.rating.count} reviews)</p>
                <p>Category: ${product.category}</p>
                <p class="card-text">${product.description}</p>
            </div>
        </div>

        <div class="mt-4 btn__cover">
            <a href="../index.html"><button class="btn__class align-itmes-center"><i class="fa-solid fa-circle-left fs-1"></i></button></a>
        </div>
    `;
}

