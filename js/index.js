const loginBtn = document.getElementById('login')
    loginBtn.addEventListener('click',function(){
       const loginArea = document.getElementById('log-in-area')
       loginArea.style.display="none";
        const transactionArea = document.getElementById('transation-area')
        transactionArea.style.display="block"
    })
