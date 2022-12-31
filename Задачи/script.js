// 1.В отделе 10 человек с разной зарплатой.
// ● Создайте массив salary, содержащий данные о зарплате
// сотрудников в течение года, разбитую по месяцам.
// ● Напишите функцию, возвращающую сумму зарплат
// отдела за год. При создании функции учтите, что
// зарплаты сотрудников могли меняться в течение года.
// 2.Дополните код задачи 1:
// ● Напишите функцию, возвращающую зарплату
// сотрудника за год по его индексу.
// ● Напишите функцию, возвращающую сумму зарплат
// сотрудников отдела за месяц по номеру месяца (не
// по индексу!).
///////////////////////////////////////////////////////
const salary = [
  {
    namer: "John",
    month_salary: 200,
    id: 0,
  },
  {
    namer: "Elton",
    month_salary: 250,
    id: 1,
  },
  {
    namer: "Britney",
    month_salary: 230,
    id: 2,
  },
  {
    namer: "Ali",
    month_salary: 175,
    id: 3,
  },
  {
    namer: "Conor",
    month_salary: 300,
    id: 4,
  },
  {
    namer: "Goga",
    month_salary: 280,
    id: 5,
  },
  {
    namer: "Khabib",
    month_salary: 270,
    id: 6,
  },
  {
    namer: "Tony",
    month_salary: 300,
    id: 7,
  },
  {
    namer: "Valentina",
    month_salary: 250,
    id: 8,
  },
  {
    namer: "Alexander",
    month_salary: 500,
    id: 9,
  },
];
///////////////////////////////////////////////////////
let userInput = document.querySelector("input");
const container = document.querySelector(".container");
//////////////////////////////////////////////////////
const button = document.querySelector("button").addEventListener("click" , press=>{
  console.clear();
  if(userInput.value >= 0 && userInput.value <= 9){
  let getSumOfYearSalary = (salary) => {
    const sum = [];
    for (const key in salary) sum.push(salary[key].month_salary * 12);
    return sum.reduce((a, b) => a + b, 0);
  };
  console.log(getSumOfYearSalary(salary));
///////////////////////////////////////////////////////
  // Напишите функцию, возвращающую зарплату сотрудника за год по его индексу
  let getIndex = (salary, index) => {
    return salary[index].month_salary * 12;
  };
  console.log(getIndex(salary, userInput.value));
///////////////////////////////////////////////////////
  // Напишите функцию, возвращающую сумму зарплат сотрудников отдела за месяц по номеру месяца
  let getMonth = (salary) => {
    const month = [];
    for (const key in salary) month.push(salary[key].month_salary);
    return month.reduce((a, b) => a + b);
  };
  console.log(getMonth(salary));
///////////////////////////////////////////////////////
  // Вывод всего этого добра на экран
  container.innerHTML = " ";
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class = forObject >
      <p>
      Сумма зп сотрудников за год :
      ${getSumOfYearSalary(salary)}
      AZN
      </p>
      <p>
      Зп сотрудника за год по индексу :
      ${getIndex(salary, userInput.value)}
      AZN
      </p>
      <p>
      Сумма зп сотрудников за месяц : 
      ${getMonth(salary)}
      AZN
      </p>
      </div>`
  );
  }else{
    console.log("wrong index");
    container.innerHTML = " ";
  }
})
