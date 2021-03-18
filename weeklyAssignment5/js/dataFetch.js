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