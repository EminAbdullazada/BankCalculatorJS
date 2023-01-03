//! Требования
// В качестве параметров функция должна принимать на вход:
// ● Начальную сумму вклада (в валюте)
// ● Сумму ежемесячного пополнения (в валюте)
// ● Величину доходности по вкладу (в процентах годовых)
// ● Срок вклада (дней)
// При расчетах считать, что проценты начисляются ежемесячно и
// капитализируются (ежемесячный доход попадает на баланс и учитывается при
// расчете дохода в следующем месяце).
// Функция должна возвращать сумму вклада на момент окончания его срока
// действия.
// Предусмотреть проверку корректности входных данных. Корректными
// входными данными для функции следует считать:
// ● Начальная сумма - положительно число
// ● Сумма пополнения - неотрицательное число
// ● Процент - положительное число (до 100)
// ● Срок - положительное целое число.
///////////////////////////////////////////////////////
//! Чеклист
// Устанавливаем начальный вклад 100000
// Срок 180 дней
// Ставка 8%
// Пополнение 10000
// Функция возвращает: сумму на конец периода
// В консоли отсутствуют сообщения об ошибках
//////////////////////////////////////////////////////
// Устанавливаем начальный вклад 100000
// Срок 360 месяцев
// Ставка 0
// Пополнение “Тысяча” (строка)
// Функция возвращает: NaN
// В консоли сообщение об ошибке входных параметров.
//! Дополнительное задание
// Предусмотреть возможность изменения периодичности пополнения вклада
// (ежемесячно, ежеквартально, ежегодно)
// Функция должна возвращать развернутый ответ в виде объекта, содержащего:
// ● Сумма вклада на момент окончания срока
// ● Сумма пополнений
// ● Начисленные проценты
// ● Сообщение об ошибке (если есть)
////////////////////////////////////////////////
// Get HTML elements
const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const thirdInput = document.querySelector("#third");
const fourthInput = document.querySelector("#fourth");
// Also need to get div for showing result of calculate
const block = document.querySelector(".showResult");
// Get the hidden <h1> from HTML
let msg = document.querySelector(".hidden");
///////////////////////////////////////////////
// Get a button from HTML and addEventListener
const button = document.querySelector("button").addEventListener("click",press=>{
    console.clear();
    let myResult = getResult();
    let resultToPrint = ResultToPrint(myResult);
    
    if(checkValues()){
        block.innerHTML = " ";
        block.insertAdjacentHTML (
            "beforeend",
            `<p>${resultToPrint[0]} <br/> ${resultToPrint[1]} <br/> ${resultToPrint[2]} </p>`,
            )
            console.log(myResult);   
    }
    else block.innerHTML= " ";
})
////////////////////////////////////////////////
// We need a function which 'll show result of count
function getResult() {
    let month = getMonthFromDays(fourthInput.value);
    let income = firstInput.value;
    thirdInput.value = thirdInput.value.replace(',','.')
    for(let i=1;i<=month;i++){
        income = income * (1 + (thirdInput.value * 0.01) / 12) + +secondInput.value;
    }
    // Return getResult as Object
    income = (Math.round((income + Number.EPSILON) * 100) / 100) - secondInput.value;
    let replenishmentAmount = +secondInput.value * month;
    let accrued = Math.floor(income - +firstInput.value - +replenishmentAmount + +secondInput.value);
    const result = {
        "Сумма вклада на момент окончания срока" : income,
        "Сумма пополнений" : replenishmentAmount,
        "Начисленные проценты" : accrued
    }
    return result;
}
////////////////////////////////////////////////
// We also need a function which 'll return month(s) from days
let getMonthFromDays = (days) => {
    return Math.floor(days / 30);
}
// And now we need a function which 'll check the values of the inputs
////////////////////////////////////////

function checkValues(){
    if(firstInput.value <= 0 || isNaN(firstInput.value) ||
       secondInput.value <= -1 || isNaN(secondInput.value) ||
       thirdInput.value <= 28 ||isNaN(thirdInput.value) ||
       fourthInput.value <=0 || isNaN(fourthInput.value))
       {
       console.log(
        "Вводимые данные должны быть только положительными числами !! " ,
        "Срок вклада не меньше одного месяца !!!"
        );
       msg.classList.remove("hidden");
       msg.classList.add("shown");
       return false
       }
       else{
        msg.classList.remove("shown");
        msg.classList.add("hidden");
        return true;
       }
}
////////////////////////////////////////
function ResultToPrint(resultObject)
{
    let arrOfResults = [];
    arrOfResults.push("Сумма вклада на момент окончания срока: "+ resultObject["Сумма вклада на момент окончания срока"] + " Р")
    arrOfResults.push("Сумма пополнений: "+ resultObject["Сумма пополнений"] + " P")
    arrOfResults.push("Начисленные проценты:"+resultObject["Начисленные проценты"] + " Р")
    return arrOfResults;
}

