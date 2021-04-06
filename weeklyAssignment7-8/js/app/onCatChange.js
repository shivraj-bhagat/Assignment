async function onCategoryChange(id) {
    // console.log(id);
    let elem = document.getElementById("whs");
    let whsId = elem.options[elem.selectedIndex].value;
    let token = getCookie("token");
    if(token != "") {
        try{   
            let products = productLocal;
            let prodList = document.getElementById("products");
            prodList.innerHTML = "";
            for(item in Object.entries(products)){
                if(products[item] == undefined) {
                    products.splice(item,1);
                } else if(products[item].priceList[0].is_default != 'Y') {
                    products.splice(item,1);
                }
            }
            if(id == "p0") {
                products.forEach(product => {
                    addProduct(product);
                });
            } else {
                products.forEach(product => {
                    if(product.categoryId == id) {
                        addProduct(product);
                    }
                });
            }
            updateProductQuantity();
        } catch(e) {
            console.log(e.message);
        }
    }   
}