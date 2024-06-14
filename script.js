/**
 * 1. CALL THE PRODUCTS API
 * 
 * 2. POPULATE THE UI WITH PRODUCTS DATA
 * 
 */

/**
 * 
 * <div class="category__product--item">
          <div class="image-container">
            <img src="public/assets/Products/Images.png" alt="dining" />
          </div>
          <div class="product-description">
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <h5>Rp 2.500.000 Rp 3.500.000</h5>
          </div>
        </div>
 */
async function fetchData() {
    const productListContainer = document.getElementById('product-list')
    try {
        console.info('FETCH HANYO')
        const data = await fetch("https://fakestoreapi.com/products")
        console.info('FETCH JSON LAGYO')
        const response = await data.json()
        console.info('DATA DEKHAYO')

        response.forEach(element => {
            console.log('element', element)
            const product = document.createElement('div')
            product.classList.add('category__product--item')

            const imgCont = document.createElement('div')
            imgCont.classList.add('image-container')

            const img = document.createElement("img")
            img.setAttribute('src', element.image)
            img.setAttribute('alt', element.title)

            imgCont.appendChild(img)

            const productDesc = document.createElement('div')
            productDesc.classList.add('product-description')

            const pH2 = document.createElement('h2')
            pH2.innerText = element.title

            const pPara = document.createElement('p');
            pPara.innerText = element.description

            const pH5 = document.createElement('h5');
            pH5.innerText = `NRP ${element.price}`

            productDesc.appendChild(pH2)
            productDesc.appendChild(pPara)
            productDesc.appendChild(pH5)

            product.appendChild(imgCont)
            product.appendChild(productDesc)

            productListContainer.append(product)
        });



    } catch (e) {
        console.error(e)
    }
}

fetchData()

