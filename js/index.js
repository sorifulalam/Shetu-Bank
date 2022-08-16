//login button event handelar
const loginBtn = document.getElementById('login')
    loginBtn.addEventListener('click',function(){
       const loginArea = document.getElementById('log-in-area')
       loginArea.style.display="none";
        const transactionArea = document.getElementById('transaction-area') 
        transactionArea.style.display = 'block'
    })


 //deposit busston event handelar
 
    const depositBtn = document.getElementById('adddeposit')
    depositBtn.addEventListener('click',function(){
        // console.log('shetu')
        const despositAmount = document.getElementById('depositamount').value
        const depositNumber = parseFloat(despositAmount)
    })