function calculate(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1==="" || name2 ===""){
        alert("Please enter both names.");
    }

    const percentage = Math.floor(Math.random() * 101);
    
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s Compatibility Percentage : ${percentage}% `; 

    if(percentage <30){
        result.innerHTML += "<br> Not a Great Match. Keep looking !";
    }else if(percentage >=30 && percentage <70){
        result.innerHTML += "<br> There is a Potentail . Give it a try !";
    }else{
        result.innerHTML += "<br> Great Match !";
    }








}
