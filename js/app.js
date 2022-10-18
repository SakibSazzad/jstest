function welcome(){
    var username = document.getElementById('name').value;
    document.getElementById('wlc').innerHTML='Welcome ' + username;

    if(username.length <= 5){
        document.getElementById('wlc').style.color='blue';
    }else if(username.length >= 10){
        document.getElementById('wlc').style.color='purple';
    }else{
        document.getElementById('wlc').style.color='orange'
    }
}

function showgrade(){
    var marks = document.getElementById('numbers').value;
    var results = document.getElementById('grade');

    if(marks >=80 && marks <= 100){
        results.innerText='Your Grade is A+';
    }else if(marks >= 70 && marks <= 79){
        results.innerText='Your Grade is A'
    }else if(marks >= 60 && marks <= 69){
        results.innerText='Your Grade is A-'
    }else if(marks >= 50 && marks <= 59){
        results.innerText='Your Grade is B'
    }else if(marks >= 40 && marks <= 49){
        results.innerText='Your Grade is C'
    }else if(marks >= 33 && marks <= 39){
        results.innerText='Your Grade is D'
    }else if(marks >= 0 && marks <= 32){
        results.innerText='Your are Fail'
    }else{
        alert('BAAL CHAAL NUMBER CHUDAS KEN?')
    }
}

function oddeven(){
    var user_num = document.getElementById('getanum').value;
    var user_rslt = document.getElementById('oddevenrslt');
    if(user_num % 2 == 0){
        user_rslt.innerText='This is a  Even  Number'
        user_rslt.style.color='#307B1C'
    }else{
        user_rslt.innerText='This is a Odd Number'
        user_rslt.style.color='#5D1C7B'
    }
}