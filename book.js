let library = [
    'bruno Kersy',
    '!keep Serkwi',
    'Ndzi manager'
];

let isForm = false;

function Book() {

}

function addBookToLibrary() {
    let userInput = prompt("Enter");
    library.push(userInput);

    const bookTitle = document.querySelector('input');
    console.log(bookTitle.value);
}

function displayBook() {
    for (let book of library) {
        display(book);
    }
}

function display (book) {
    const displayBookTitle = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = book;

    displayBookTitle.appendChild(li);
}

function onClickButton() {
    const newButton = document.querySelector('button');
        newButton.addEventListener('click', showForm);
    // isForm = true;
}

function showForm() {
    const displayForm = document.querySelector('form');
    displayForm.classList.toggle('hidden');
}

function validation(){
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;
    // var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if( author ==='' || title ==='' || pages ==='' || read ===''){
        alert("Please fill all fields...!!!!!!");
        return false;
    // }else if(!(email).match(emailReg)){
    //     alert("Invalid Email...!!!!!!");
    //     return false;
    }else{
        return true;
    }
}

function submitForm() {
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;

    if (validation()) {
        document.getElementById("form_id").submit();
        alert(" Author : " + author + " n Title : " + title + " n Number of pages : " + pages + " n Read/Not read : " + read + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }

    console.log(        alert(" Author : " + author + " n Title : " + title + " n Number of pages : " + pages + " n Read/Not read : " + read + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......"));
}
function onSubmit() {
    // document.getElementById('submit').submitForm();
}


(function init() {
    // addBookToLibrary()
    displayBook();
    onClickButton();
    submitForm();
    // showForm();

    const Player = (name, level) => {
        let health = level * 2;
        const getLevel = () => level;
        const getName  = () => name;
        const die = () => {
            // uh oh
        };
        const damage = x => {
            health -= x;
            if (health <= 0) {
                die();
            }
        };
        const attack = enemy => {
            if (level < enemy.getLevel()) {
                damage(1);
                console.log(`${enemy.getName()} has damaged ${name}`);
            }
            if (level >= enemy.getLevel()) {
                enemy.damage(1);
                console.log(`${name} has damaged ${enemy.getName()}`);
            }
        };
        return {attack, damage, getLevel, getName};
    };

    const jimmie = Player('jim', 10);
    const badGuy = Player('jeff', 5);
    jimmie.attack(badGuy);
})()