function handleWhs() {
    document.getElementById("whs").addEventListener("change", () => {
        let elem = document.getElementById("whs");
        let whsId = elem.options[elem.selectedIndex].value;
        let select = document.getElementById("outl");
        let length = select.options.length;
        for (i = length-1; i >= 0; i--) {
            select.options[i] = null;
        }
        clearCart();
        getOutlets(whsId);
        getCategoryandProduct(whsId);
    });
}