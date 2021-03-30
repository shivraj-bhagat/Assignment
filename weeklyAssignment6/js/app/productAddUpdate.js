async function onAddInCart(id) {
    let quantity = document.getElementById(`quan${id}`);
    quantity = quantity.children[0];
    let value = quantity.getAttribute("data");
    let catId = quantity.getAttribute("catid");
    let prodName = quantity.getAttribute("prodName");
    let prodPrice = quantity.getAttribute("prodPrice");
    let prodImg = quantity.getAttribute("productImg");
    value++;
    // console.log(prodImg)
    // console.log(catId, prodName, prodPrice, id, value);
    quantity.setAttribute("data",value);
    quantity.innerHTML = value;
    let catName;
    let category = document.querySelector(".active");
    if(category.id == "p0") {
        catName = await getCatName(catId);
        // console.log(catName)
    } else {
        catName = category.children[0].children[1].innerHTML
    }

    let productData = {
        productName: prodName,
        productId: id,
        quantity: value,
        categoryName: catName,
        categoryId: catId,
        productImg: prodImg,
        price: prodPrice
    }

    setCart(productData);
}

function onDeleteInCart(id) {
    let quantity = document.getElementById(`quan${id}`);
    quantity = quantity.children[0];
    let value = quantity.getAttribute("data");
    if(value>0) {
        value--;
        quantity.setAttribute("data",value);
        quantity.innerHTML = value;
        updateCart(id, value);
    }
}

async function getCatName(id) {
    let elem = document.getElementById("whs");
    let whsId = elem.options[elem.selectedIndex].value;
    let token = getCookie("token");
    if(token != "") {
        try{
            let response = await fetch(`https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId=${whsId}`, { 
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Netco-JWT" : token
                }
            });
            response = await response.json();
            let categories = response.categories;
            // console.log(categories);
            for(index in categories) {
                if(categories[index].productCategoryId == id)
                    return categories[index].categoryName;
            }
        } catch(e) {
            console.log(e.message);
        }
    }     
}