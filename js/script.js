// Task 1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
//          исчезал элемент с id="text".

const task1 = document.getElementsByClassName('task1')[0];
const block = document.createElement('div')

block.id = 'text';
block.style.width = '50px';
block.style.height = '50px';
block.style.background = 'red';

task1.appendChild(block);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    block.style.display = 'none';
});

// Task 2 - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//          інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const task2 = document.getElementsByClassName('task2')[0],
    input = document.getElementsByClassName('input2')[0],
    btn2 = document.getElementsByClassName('btn2')[0];

const text = document.createElement('p');
text.textContent = '';

btn2.addEventListener('click', () => {

    if (input.value > 0 && input.value < 18) {
        text.textContent = "This is a child!";
    } else if (input.value > 18 && input.value < 100) {
        text.textContent = "This is a older person!";
    } else {
        text.textContent = "Your answer is wrong!";
    }

    task2.appendChild(text);
});

// Task 3 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на
//          консоль інформація з цих 2х форм.
//          Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//          Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const f1 = document.forms.f1,
    f2 = document.forms.f2;

const btn3 = document.getElementsByClassName('btn3')[0];

btn3.addEventListener('click', () => {
    console.log("Text 1: " + f1.text1.value);
    console.log("Text 2: " + f1.text2.value);
    console.log("Text 3: " + f2.text3.value);
    console.log("Text 4: " + f2.text4.value);
})

// Task 4 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//          При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//          (Додатковачастина для завдання)

const task4 = document.getElementsByClassName('task4')[0],
    btn4 = document.getElementsByClassName('btn4')[0];

const inputTr = document.getElementsByClassName('tr')[0],
    inputTh = document.getElementsByClassName('th')[0],
    inputText = document.getElementsByClassName('text4')[0];

btn4.addEventListener('click', () => {
    const table = document.createElement('table');
    task4.appendChild(table);

    for (let i = 0; i < +inputTr.value; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < +inputTh.value; j++) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = inputText.value;
        }
    }

});




















