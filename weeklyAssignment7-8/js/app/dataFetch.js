async function getData() {
    let token = getCookie("token");
    if(token != "") {
        try{
            let response = await fetch("https://netco-indo-test.nfrnds.net:20003/fmcg-dd/initialData", { 
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Netco-JWT" : token
                }
            });
            response = await response.json();
            console.log(response);
            // if(response.responseCode == 200) {
            //     document.getElementById("data").innerHTML = response.responseCode;
            // }
        } catch(e) {
            console.log(e.message);
        }
    }
}

async function userDetails() {
    let token = getCookie("token");
    let flag = localStorage.getItem("userDetails");
    if(token != "" && !flag) {
        try{
            let response = await fetch("https://netco-indo-test.nfrnds.net:20003/fmcg-dd/user", { 
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Netco-JWT" : token
                }
            });
            response = await response.json();
            let data = {
                "name" : response.fullName,
                "phone_number" : response.msisdn,
                "user_id" : response.userId
            }

            localStorage.setItem("userDetails",JSON.stringify(data));
        } catch(e) {
            console.log(e.message);
        }
    }
}

async function getWholesaler() {
    let token = getCookie("token");
    if(token != "") {
        try{
            await getWhsLocal();
            await getOutletsLocal();
            let whs = whsLocal;
            let firstWhsId = whs[0].orgId;
            
            getOutlets(firstWhsId);
            getCategoryandProduct(firstWhsId);
            let whsOption = document.getElementById("whs");
            whs.forEach(wholesaler => {
                let option = document.createElement("option");
                option.value = wholesaler.orgId;
                option.text = wholesaler.orgName;
                whsOption.add(option);
            });
            handleWhs()
        } catch(e) {
            console.log(e.message);
        }
    }   
}

async function getOutlets(whsId) {
    let token = getCookie("token");
    if(token != "") {
        try{
            let outlets = outletLocal;
            let outletOption = document.getElementById("outl");
            outlets.forEach(outlet => {
                if(whsId == outlet.whs[0].whsOrgId) {
                    let option = document.createElement("option");
                    option.value = outlet.orgId;
                    option.text = outlet.orgName;
                    outletOption.add(option);
                }
            });
        } catch(e) {
            console.log(e.message);
        }
    }   
}


async function getCategoryandProduct(whsId) {
    let token = getCookie("token");
    if(token != "") {
        try{
            await getCategoryandProductLocal(whsId);

            let categories = categoryLocal;
            let products = productLocal;
            
            let catList = document.getElementById("category");
            catList.innerHTML = "";

            let list = document.createElement('div');
            list.className = "category active";
            list.id = "p0";
            list.setAttribute("onclick","onClickActive(this.id)");
            let data = `<a href="javascript:void(0);">
                            <img src="../img/app/product.svg" alt="all category image">
                            <span>All</span>
                        </a>`;
            list.innerHTML = data;
            catList.appendChild(list);

            categories.forEach( category => {
                if ( category.imgUrl && category.productCategoryId >= 0 ){
                    let list = document.createElement('div');
                    list.className = "category";
                    list.id = category.productCategoryId;
                    list.setAttribute("onclick","onClickActive(this.id)");
                    let color = category.color ? category.color : "#000"; 
                    list.setAttribute("color",color)
                    let data = `<a href="javascript:void(0);">
                                    <img src="https://res.cloudinary.com/nfrnds/image/upload/fmcgdd${category.imgUrl}" alt="category image">
                                    <span style="color:${color};">${category.categoryName}</span>
                                </a>`;
                    list.innerHTML = data;
                    catList.appendChild(list);
                }
            });
            // console.log(products);
            let prodList = document.getElementById("products");
            prodList.innerHTML = "";
            for(item in Object.entries(products)){
                if(products[item] == undefined) {
                    products.splice(item,1);
                } else if(products[item].priceList[0].is_default != 'Y') {
                    products.splice(item,1);
                }
            }

            products.forEach(product => {
                addProduct(product);
            })
            updateProductQuantity();
        } catch(e) {
            console.log(e.message);
        }
    }   
}

function addProduct(product) {
    let prodList = document.getElementById("products");
    let list = document.createElement('div');
    list.className = "product";
    // console.log(product.productId, product)
    list.id = product.productId
    let productImg = product.smallImgUrl ? `https://res.cloudinary.com/nfrnds/image/upload/fmcgdd${product.smallImgUrl}` : "../img/app/gallery-icon.png";
    let data = `<div class="product-container">
                    <div class="product-img">
                        <img src="${productImg}">
                    </div>
                    <div class="product-content">
                        <div class="product-name">
                            <p>${product.productName}</p>
                        </div>
                        <div class="product-price">
                            <h5>Rs. ${product.priceList[0].list_price}</h5>
                        </div>
                        <div class="product-quantity">
                            <div class="quantity-minus" onclick="onDeleteInCart(${product.productId})">
                                <p>-</p>
                            </div>
                            <div class="quantity-no" id="quan${product.productId}">
                                <p data="0" catid="${product.categoryId}" prodName="${product.productName}" prodPrice="${product.priceList[0].list_price}" productImg="${productImg}">0</p>
                            </div>
                            <div class="quantity-plus" onclick="onAddInCart(${product.productId})">
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    list.innerHTML = data;
    prodList.appendChild(list);
}

getData();
userDetails();
getWholesaler();