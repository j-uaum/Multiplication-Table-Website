function tabuada(){
    let num = parseInt(document.getElementById("num").value);
    let res = document.getElementById('res')
    let tabuada= '';

    for(let count=1; count<=100 ; count++)
    tabuada += num+ "x"+count+"="+ num*count+ "<br />" ;
    

    res.innerHTML = tabuada;
}



//   &#x"codigo emoji'====== emoji