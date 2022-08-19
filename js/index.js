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
    //    // console.log(depositNumber)
    //    const curentDeposit = document.getElementById('curentDeposit').innerText
    //    const curenDepositNumber = parseFloat(curentDeposit)
    //    //console.log()
    //    const totalDeposit = depositNumber + curenDepositNumber;
    //    document.getElementById('curentDeposit').innerText =totalDeposit
       

        // const curentBalance = document.getElementById('curenBalance').innerText
        // const curentBalanceNumber = parseFloat(curentBalance)
        // const curentBalanceTotal = depositNumber + curentBalanceNumber
        // document.getElementById('curenBalance').innerText = curentBalanceTotal

        document.getElementById('depositamount').value=""

        spanUpdatetext = ('curentDeposit' ,depositNumber)
        spanUpdatetext = ('curenBalance' ,depositNumber)
      
    })

   function spanUpdatetext(id , depositNumber){
        const curent =document.getElementById(id).innerText
        const curentNumber = parseFloat(curent)
        const curentTotal = depositNumber + curentNumber
        document.getElementById(id).innerText = curentTotal
   }