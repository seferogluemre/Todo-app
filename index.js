const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


// const alert = () => {
//     const error = `  <div class="alert alert-secondary  " role="alert">
//     Boş deger Eklenemez
// </div> `;

//     alerts.innerHTML += error;

// }

const generateTemplate = todo => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x"
        viewBox="0 0 16 16">
        <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
    </svg>
</li>`;

    list.innerHTML += html;
}


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();

    }
})

list.addEventListener('click', e => {
    if (e.target.classList.contains('bi')) {
        e.target.parentElement.remove(list);
    }
})


const filterTodos = term => {

    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));


    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

}

search.addEventListener('keyup', e => {
    const value = search.value.trim().toLowerCase();
    filterTodos(term);
})