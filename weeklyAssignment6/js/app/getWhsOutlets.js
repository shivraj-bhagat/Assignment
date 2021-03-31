const whsLocal = (() => {
    const fieldValue = localStorage.getItem('whs');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
})();

const outletLocal = (() => {
    const fieldValue = localStorage.getItem("outlets");
    return fieldValue == null ? [] : JSON.parse(fieldValue);
})();

const categoryLocal = (() => {
    const fieldValue = localStorage.getItem("categories");
    return fieldValue == null ? [] : JSON.parse(fieldValue);
})();

const productLocal = (() => {
    const fieldValue = localStorage.getItem("products");
    return fieldValue == null ? [] : JSON.parse(fieldValue);
})();

async function getWhsLocal() {
    let token = getCookie("token");
    if(token != "") {
        try{
            let response = await fetch("https://netco-indo-test.nfrnds.net:20003/fmcg-dd/whs/v2", { 
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Netco-JWT" : token
                }
            });
            response = await response.json();
            let whs = response.organizations;
            if (whsLocal.length > 0) {
                whsLocal.splice(0,whsLocal.length);
                localStorage.setItem("whs", JSON.stringify(whsLocal));
            }

            // whsLocal.push(whs);
            for( i in whs) {
                whsLocal.push(whs[i]);
            }
            localStorage.setItem("whs", JSON.stringify(whsLocal));
            // console.log(whsLocal)

        } catch(e) {
            console.log(e.message);
        }
    }
}

async function getOutletsLocal() {
    let token = getCookie("token");
    if(token != "") {
        try{
            let response = await fetch("https://netco-indo-test.nfrnds.net:20003/fmcg-dd/outlets/v2", { 
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Netco-JWT" : token
                }
            });
            response = await response.json();
            let outlets = response.organizations;

            if (outletLocal.length > 0) {
                outletLocal.splice(0,outletLocal.length);
                localStorage.setItem("outlets", JSON.stringify(outletLocal));
            }

            // outletLocal.push(outlets);
            for( i in outlets) {
                outletLocal.push(outlets[i]);
            }
            localStorage.setItem("outlets", JSON.stringify(outletLocal));

        } catch(e) {
            console.log(e.message);
        }
    }
}

async function getCategoryandProductLocal(whsId) {
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
            let products = response.products;
            categories.sort((a,b)=>{
                return b.productCategoryId-a.productCategoryId
            })
            // console.log("yes")
            if (categoryLocal.length > 0 || productLocal.length > 0) {
                // console.log("yaya!")
                categoryLocal.splice(0,categoryLocal.length);
                productLocal.splice(0,productLocal.length);
                localStorage.setItem("categories", JSON.stringify(categoryLocal));
                localStorage.setItem("products", JSON.stringify(productLocal));
            }

            for(index in categories){
                categoryLocal.push(categories[index]);
            }

            for(index in products) {
                productLocal.push(products[index]);
            }

            localStorage.setItem("categories", JSON.stringify(categoryLocal));
            localStorage.setItem("products", JSON.stringify(productLocal));            
        } catch(e) {
            console.log(e.message);
        }
    }
}