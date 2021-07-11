
let doctor = {
    stre: 8,
    health: 100,
    cost: 30,
};

let cough = {  //кашель
    stre: 6,
    health: 50,
    cost: 20,
    name: "Cough"
};

let fever = {  //температура
    stre: 6,
    health: 50,
    cost: 20,
    name: 'Fever'
};

let runnyNose = { //насморк
    stre: 6,
    health: 50,
    cost: 20,
    name: 'RunnyNose'
};

let coronavirus = {
    stre: 21,
    health: 75,
    cost: 20,
    name: 'Coronavirus'
};

alert(
    "Доктор! Помоги победить Коронавирус! Осталась надежда только на тебя"
);


function show() {
    alert(
        "Ваши деньги = " +
        doctor.cost +
        "....." + "\r\n" +
        "Ваша атака = " +
        doctor.stre +
        "....." + "\r\n" +
        "Ваше здоровье = " +
        doctor.health
    );
}

function shop() {
    let sho = prompt("Выберите оружие:\r\n 1.Витамины 20 копеек (увеличивает здоровье в 2 раза)\r\n 2.Лекарство 15 копеек (увеличивает силу на 5)\r\n 3.Вакцина  30 копеек  (увеличивает силу на 15)");
    switch (sho) {
        case "1":
            if (doctor.cost < 20) {
                alert("Не хватает монет!");
            } else {
                doctor.cost -= 20;
                doctor.health = doctor.health * 2;
                alert("Хороший выбор наше здоровье = " + doctor.health);
            }
            break;

        case "2":
            if (doctor.cost < 15) {
                alert("Не хватает монет!");
            } else {
                doctor.cost -= 15;
                doctor.stre += 5;
                alert("Хороший выбор лечение на пользу = " + doctor.stre);
            }
            break;
        case "3":
            if (doctor.cost < 30) {
                alert("Не хватает монет!");
            } else {
                doctor.cost -= 30;
                doctor.stre += 15;
                alert("Хороший выбор наш иммунитет = " + doctor.stre);
            }
            break;
        default:
            alert("Выберите оружие: 1. 2. 3. ");
    }

} 


function theBattle(enemy) {
    for (var en = 0; doctor.health > 5; en++) { // враг победит 
        console.log("битва началась D.H: " + doctor.health + " enemy.stre:" +  enemy.stre);
        doctor.health -= enemy.stre;
    }
    for (var bur = 0; enemy.health > 5; bur++) {  //доктор победит болезнь
        console.log("битва началась en.H: " + enemy.health + " D.stre:" +  doctor.stre);
        enemy.health -= doctor.stre;
    }
    if (en > bur) {
        alert(enemy.name + " повержен");
        doctor.cost += enemy.cost;
        doctor.health = 50;
    } else {
        alert("Доктор потерпел неудачу!");
        doctor.stre = 0;
        doctor.health = 0;
        doctor.cost = 0;
    }
} 



