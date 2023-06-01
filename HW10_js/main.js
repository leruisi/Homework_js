// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const formOne = document.forms.formOne;
// console.log(formOne);
//
// const sendButton = document.getElementById("sendButton");
// sendButton.addEventListener("click", function(event) {
//     event.preventDefault(); // Зупиняємо перезавантаження сторінки
//
//     const firstname = formOne.firstname.value;
//     const surname = formOne.surname.value;
//     const age = formOne.age.value;
//
//     console.log(firstname);
//     console.log(surname);
//     console.log(age);
// });
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// Створюємо елемент з id "text"
const textElement = document.createElement("div");
textElement.id = "text";
textElement.textContent = " текст";

const button = document.createElement("button");
button.textContent = "Приховати текст";

button.addEventListener("click", function(e) {
    e.preventDefault()
    const elementToHide = document.getElementById("text");
    elementToHide.style.display = "none";
});

document.body.appendChild(textElement);
document.body.appendChild(button);

//
//    - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.placeholder = "Введіть вік";

const submitButton = document.createElement("button");
submitButton.textContent = "Підтвердити";

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    const age = Number(ageInput.value);

    if (age < 18) {
        alert("Вам не виповнилось 18");
    } else {
        alert("Вам +18 ");
    }
});

// Додаємо інпут та кнопку до body
document.body.appendChild(ageInput);
document.body.appendChild(submitButton);

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається