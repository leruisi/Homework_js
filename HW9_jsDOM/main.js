// - створити блок
let blockDiv= document.createElement('div')
//   - додати йому класи wrap, collapse, alpha, beta
blockDiv.classList.add('wrap','collapse','alpha','beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
blockDiv.style.backgroundColor='#8e8e8e'
blockDiv.style.color='#282828'
blockDiv.style.fontSize ='28px'
// - додати цей блок в body.
document.body.appendChild(blockDiv);
// - клонувати його повністю, та додати клон в body.
const blockDivClone =  blockDiv.cloneNode(true)
document.body.appendChild(blockDivClone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arrList = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
for (let i = 0; i < arrList.length; i++) {
    let li = document.createElement('li');
    li.textContent = arrList[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];


    let block = document.createElement('div');
    block.classList.add('block');


    let title = document.createElement('h3');
    title.textContent = course.title;

    let duration = document.createElement('p');
    duration.textContent = 'Duration: ' + course.monthDuration + ' months';

    block.appendChild(title);
    block.appendChild(duration);

    document.body.appendChild(block);
}



// =========================
//
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArrays = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArrays.length; i++) {
    let course = coursesAndDurationArrays[i];

    const divBlocks = document.createElement('div');
    divBlocks.classList.add('item');

    let titleBlocks = document.createElement('h1');
    titleBlocks.classList.add('heading');
    titleBlocks.textContent = course.title;

    let monthDuration = document.createElement('p');
    monthDuration.classList.add('description');
    monthDuration.textContent = course.monthDuration;

    divBlocks.appendChild(titleBlocks);
    divBlocks.appendChild(monthDuration);

    document.body.appendChild(divBlocks);
}


// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (let i = 0; i <simpsons.length ; i++) {
    let sipsonsFam = simpsons[i];

    let divFam =document.createElement('div')
    divFam.classList.add('member')

    let name = document.createElement('p')
    name.classList.add('names')
    name.textContent=sipsonsFam.name
    divFam.appendChild(name)

    let surname = document.createElement('p')
    surname.classList.add('surnames')
    surname.textContent=sipsonsFam.surname
    surname.style.textTransform='uppercase'
    divFam.appendChild(surname)

    let age = document.createElement('p')
    age.classList.add('ages')
    age.textContent=sipsonsFam.age
    age.style.color='green'
    divFam.appendChild(age)


    let info = document.createElement('p')
    info.classList.add('names')
    info.textContent=sipsonsFam.info
    divFam.appendChild(info)
    document.body.appendChild(divFam)

    let photo = document.createElement('img')
    photo.classList.add('names')
    photo.src=sipsonsFam.photo
    divFam.appendChild(photo)


}




// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
// let bigblock = document.createElement("div")
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 0,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let i = 0; i < coursesArray.length; i++) {
    let course = coursesArray[i];

    let block = document.createElement('div');
    block.classList.add('block');

    let title = document.createElement('div');
    title.classList.add('block_title');
    title.textContent = course.title;
    block.appendChild(title);

    let container = document.createElement('div');
    container.classList.add('container');
    container.style.display= 'flex'
    container.style.flex='row'

    let monthDuration = document.createElement('div');
    monthDuration.classList.add('container_month');
    monthDuration.textContent = `Month Duration: ${course.monthDuration}`;
    container.appendChild(monthDuration);

    let hourDuration = document.createElement('div');
    hourDuration.classList.add('container_hour');
    hourDuration.textContent = `Hour Duration: ${course.hourDuration}`;
    hourDuration.style.marginLeft='12px'
    container.appendChild(hourDuration);

    block.appendChild(container);

    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules');

    for (let j = 0; j < course.modules.length; j++) {
        let module = course.modules[j];

        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }

    block.appendChild(modulesList);

    document.body.appendChild(block)
}