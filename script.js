const alertContainerTag = document.querySelector(".alertContainer")



const openToastAlert = ()=>{
    let yesOrNo
    const agree = localStorage.getItem("Agree");    

    console.log(agree)
    if(agree === "yes"){
        return;
    }

    const alertTextTag = document.createElement("div");
    alertTextTag.append(`We use cookies.Your continued use of our site implies you 
    agree to this.See detils.`); // create alert tag 
    alertTextTag.classList.add("alertText");

    const buttonTag = document.createElement("button");
    buttonTag.append("Agree");// create buttton tag
    buttonTag.classList.add("button","btn","btn-info");

    alertContainerTag.append(alertTextTag,buttonTag);// append alertTaxtTag and buttonTag to alertContainerTag

    alertContainerTag.style.bottom = `-${alertContainerTag.offsetHeight}px`;// refresh လုပ်တိုင်းပျောက်ပြီးပြန်ပေါ်အောင်လုပ်
    setTimeout(
        ()=>{
            alertContainerTag.style.bottom = "0px";
        },299 // ဆက်တိုက်ရေးရင် transition မမြင်ရမှာဆိုးလို့ setTimeout နဲ့ရေး။
    );

    buttonTag.addEventListener("click", ()=>{
        alertContainerTag.style.bottom = `-${alertContainerTag.offsetHeight}px`;
        yesOrNo= "yes";
        localStorage.setItem("Agree",yesOrNo);
    })
}
window.addEventListener("load", openToastAlert);