function changeToColor(x) {
    let color = x.getAttribute("data-color");
    let clicked = x.getAttribute("clicked");
    if(clicked=="no") {
        x.style.color = color;
    }
}

function changeToWhite(x) {
    let clicked = x.getAttribute("clicked");
    if(clicked=="no") {
        x.style.color = "#fff";
    }
}

setBtnColor("#ffaf00");

function setBtnColor(color){
    // console.log(document.getElementsByClassName("box-button"))

    document.getElementById("listBtn").style.setProperty("--btn-color-normal",color);
    document.getElementById("listBtn").style.setProperty("--btn-background-color",color);
}

function changeBox(x) {
    let color = x.getAttribute("data-color");
    let listID = x.getAttribute("id");
    for(let i=1;i<=7;i++){
        temp = "list"+i;
        // console.log(temp != listID)
        if(temp != listID){
            document.getElementById(temp).style.color = "#fff";
            document.getElementById(temp).setAttribute("clicked","no");
        } else {
            document.getElementById(temp).style.color = color;
            document.getElementById(temp).setAttribute("clicked","yes");
            let colorBorder = {
                "border-color": color, 
            }
            let element = document.getElementById("list");
            Object.assign(element.style,colorBorder);
            document.getElementById("heading").style.color = color;
            setBtnColor(color)
            setText(listID);
        }
    }
}

function setText(x){
    let head,para,logo,bg;
    switch(x) {
        case "list2":
            head = "Automating and streamlining agricultural supply chains, and processes."
            para = "Providing analytics, oversight, traceability and ongoing interactive capabilities to enterprises along every stage of the supply chain."
            logo = "../img/box-icon/agricuture.png";
            bg = "../img/box-bg/pic-agriculture.jpg";
            break;
        case "list3":
            head = "Addressing the specific challenges of healthcare systems in emerging markets.";
            para = "Digitizing healthcare services and increasing access to medical information";
            logo = "../img/box-icon/health.png";
            bg = "../img/box-bg/pic-health.jpg";
            break;
        case "list4":
            head = "Streamline distribution channels in emerging markets even to the most remote dealer/outlet.";
            para = "Providing mobile financial services and complete oversight to supply and distribution chains.";
            logo = "../img/box-icon/fmcg.png";
            bg = "../img/box-bg/pic-fmcg.jpg";
            break;  
        case "list5":
            head = "Digitizing government services for universal access and improved policymaking";
            para = "Enabling government to equalize service delivery, collect information and implement digital programs and policies for all its citizens.";
            logo = "../img/box-icon/government.png";
            bg = "../img/box-bg/pic-government.jpg";
            break;
        case "list6":
            head = "Providing modern business tools and practices to MSMEs";
            para = "Enabling medium, small and micro enterprises (MSMEs) to benefit from digital accounting tools and business services.";
            logo = "../img/box-icon/msme.png";
            bg = "../img/box-bg/pic-msme.jpg";
            break;
        case "list7":
            head = "Expanding the potential of retailers serving the mass market.";
            para = "Enabling retailers to gain valuable insights and tailor their marketing and sale strategies to their customers’ needs";
            logo = "../img/box-icon/retail.png";
            bg = "../img/box-bg/pic-retail.jpg";
            break;
        default:
            head = "Mobile and Branchless banking solutions for driving financial Inclusion."
            para = "Providing end-to-end mobile financial services and engagement capabilities through our strategic SaaS solutions."
            logo = "../img/box-icon/bank.png";
            bg = "../img/box-bg/pic-banking.jpg";
    }
    document.getElementById("heading").innerHTML = head;
    document.getElementById("paragraph").innerHTML = para;
    document.getElementById("boxLogo").setAttribute("src",logo);
    document.getElementsByClassName("solution-section")[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${bg}")`;
}

let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider-wrapper");
    let dots = document.getElementsByClassName("dot");
    // console.log(dots.length)
    for(i=0;i<slides.length;i++){
        slides[i].style.display  = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}