const photos__list = document.getElementById("photos__list")
let photos = []
let page = 1
let limit = 4

document.addEventListener("DOMContentLoaded", () => {
    getPhotos()

    document.getElementById("prev").addEventListener("click", () => {
        if (page != 1) {
            page--
            getPhotos()
        }
    })
    document.getElementById("next").addEventListener("click", () => {
        page++
        getPhotos()
    })
})

async function getPhotos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        photos = await response.json()
        displayPhotos()
        
    } catch (error) {
        console.log(error);
        
    }
}

function displayPhotos() {
    const start = (page - 1) * limit
    const end = start + limit 
    const paginatedPhotos = photos.slice(start, end)

    photos__list.innerHTML = ""
    paginatedPhotos.forEach(item => {
        let col = document.createElement("div")
        col.className = "col-md-3 my-5"
        col.innerHTML = `
            <div class="card image__style">
                <div class="card-body">
                    <img src=${item.image} alt=${item.title} class="" />
                </div>
                <div class="card-footer">
                    
                  <div class="d-flex justify-content-between">
                        <div class="d-flex gap-1">
                            <p>Price:</p>
                            <p class="">${item.price}$</p>
                        </div>

                        <div class="d-flex align-items-start gap-2">
                            <span><i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
                            <p>${item.rating.rate}</p>
                        </div>
                  </div>

                    <div class="d-flex gap-1">
                        <p>Category:</p>
                        <p class="">${item.category}</p>
                    </div>
                    <a href="./pages/product.html?id=${item.id}" class="text-decoration-none text-secondary link__hover"><button class="btn btn-primary">Learn more</button></a>
                   
                    
                </div>
            </div>
        `
        photos__list.appendChild(col)
    })
}