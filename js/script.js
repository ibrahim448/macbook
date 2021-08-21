
document.getElementById('no-memory-cost').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost').innerText = 0;

    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;
    

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(memoryCost) + parseFloat(bestPrice.innerText)
   
})
document.getElementById('extra-memory-cost').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = memoryCost.innerText;
    memoryCost.innerText = 180
    // // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;
   
    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(memoryCost.innerText) + parseFloat(bestPrice.innerText);
})

// storage cost
document.getElementById('no-storage-cost').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost').innerText = 0;
    
    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;


    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(storageCost) + parseFloat(bestPrice.innerText)
})
document.getElementById('extra-storage-cost').addEventListener('click',function(){
    // extra cost
    const extraCost = document.getElementById('storage-cost');
    const extraCostDelivery = extraCost.innerText;
    extraCost.innerText = 100;

    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
     
     totalPrice.innerText=  parseFloat(bestPrice.innerText) + parseFloat(extraCost.innerText)

})
document.getElementById('extra-extra-storage-cost').addEventListener('click',function(){
    const extraExtraCost = document.getElementById('storage-cost');
    const extra = extraExtraCost.innerText;
    extraExtraCost.innerText =180

    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(extraExtraCost.innerText) + parseFloat(bestPrice.innerText )
})
// delivery charge
document.getElementById('no-delivery-cost').addEventListener('click',function(){
    const deliveryCharge = document.getElementById('delivery-cost').innerText = 0;
    
    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(deliveryCharge) + parseFloat(bestPrice.innerText)
})
document.getElementById('extra-delivery-charge').addEventListener('click',function(){
    const deliveryCharge = document.getElementById('delivery-cost').innerText = 20;

    // best price
    const bestPrice = document.getElementById('best-price');
    const best = bestPrice.innerText;
    bestPrice.innerText = 1299;

    const totalPrice = document.getElementById('total-price');
    const totalPriceValue = totalPrice.innerText;
    totalPrice.innerText = parseFloat(deliveryCharge) + parseFloat(bestPrice.innerText)
})





