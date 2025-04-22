

function  checkCurrency(){
    let country1 =document.getElementById("country1").value.toLowerCase()
    let country2 =document.getElementById("country2").value.toLowerCase()
    let one =document.getElementById("one")
    let conversionResult =document.getElementById("conversionResult")


      axios(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country1}.json`)
    .then((res)=>{

        let data =res.data[country1][country2].toFixed(2);
        // data = data*one
        let currency1 = country1.toUpperCase()
        let currency2 = country2.toUpperCase()     
        conversionResult.innerHTML=`<h1>1 ${currency1}= ${data} ${currency2}</h1> <br><h1>${one.value}  ${currency1} = ${data*one.value} ${currency2}</h1>`
        one.value=""
})
.catch((err)=>{
console.log(err);

})

}
