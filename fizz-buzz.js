function myFunction(){
    var num = document.getElementById("fizz-buzz").value;
    var result=document.getElementById("fizzbuzz_result");
    result.innerHTML="";
for (var i = 1; i<=num; i++) {
    var item = document.createElement("li");

    if (i % 15 ==0&&i%5==0) {
        item.textContent="FizzBuzz"
    }
    
    else if (i % 3 == 0) {
        item.textContent="Fizz"

    }

    else if (i % 5 == 0) {
        item.textContent="Buzz"
    }
    else {
       item.textContent=i;
}


result.appendChild(item);
}

}