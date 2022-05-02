function task1(){
    alert(" Завдання 1 ");
    let sentence = prompt("Введіть речення: ").split(" ");
    if(sentence.lenght)
    {
        alert("Ви ввели речення!");
    }
    else
    {
        let wordList = sentence.split(" ");
        document.write(`кількість слів в реченні = ${wordList.lenght}`);
    }
}

function task2(){
    alert(" Завдання 2 ");
    let numberList = [];
    while(1){
        let number = prompt("Введіть число: ");
        if(isNaN(number)){
            break;
        }
        else{
            numberList.push(+number);
        }
    }

    let sum = function(){
        let s = 0;
        for(number of numberList){
            s += number;
        }
        return s;
    }

    let neParn = function(){
        for(number of numberList){
            if(number % 2 != 0){
                return (+number);
            }
        }
    }

    let parn = function(){ 
        for(number of numberList){
            if(number % 2 == 0){
                return (+number);
            }
        }
    }

    document.write(`елементи: ${numberList.join(", ")} <br>`);
    document.write(`сума елементів: ${sum()} <br> `);
    document.write(`непарні елементи: ${neParn()} <br> `);
    document.write(`парні елементи: ${parn()}`);
}

function task3(){
    alert(" Завдання 3 ");
    let mas = ['win@gmail.com', 'tron@gmail.ua', 'krol@gmail.net'];
    
    while(1){
        let email = prompt('Введіть електронну пошту: ');
        if(email === null){
            break;
        }
        else{
            // додати перевірку на email
            if(mas.indexOf(email) === -1){
            /*if(!mas.find(element => (element == email))){*/
                mas.push(email);
            }
            alert("Така електронна адреса вже існує");
        }
    }
}