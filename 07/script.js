function homework1(){
    let kg = +prompt("Введіть кількість кілограмів: ");
    if(isNaN(kg)){
        alert("!Помилка, ви ввели невірні дані");
    }
    else{
    let pound = kg * 2.2046226218488;
    let ounce = kg * 35.27396194958048;
    let quintal = kg * 0.01;
    let tons = kg * 0.001;

    alert(`Кількість у фунтах: ${pound} `);
    alert(`Кількість у унціях: ${ounce} `);
    alert(`Кількість у центнерах: ${quintal} `);
    alert(`Кількість у тонах: ${tons} `);

    console.log(`Кількість у кілограмах: ${kg} `);
    console.log(`Кількість у фунтах: ${pound} `);
    console.log(`Кількість у унціях: ${ounce} `);
    console.log(`Кількість у центнерах: ${quintal} `);
    console.log(`Кількість у тонах: ${tons} `);
    }
}

function homework2(){
    let result;
    let a = +prompt("Введіть ваш депозит: ");
    if(isNaN(a)){
        alert("!Помилка ви ввели невірні дані")
    }
    else{
        if (a < 10000){
            result = (a*15)/100;
        }
        else if(a >= 10000){
            result = (a*17)/100;
        } 
        alert(result);
        console.log(result);
    }
}
