let input = document.getElementById('input');
let ul = document.getElementById('list');
let btn = document.getElementById('btn');

btn.addEventListener('click', addList);
function addList(event) {
    let li = document.createElement('li');
    li.className = 'li';
    li.innerHTML = input.value;
    ul.append(li);
    input.value = '';

    let deletBtn = document.createElement('button');
    deletBtn.className = 'deletBtn';
    deletBtn.textContent = 'x';
    li.append(deletBtn);

    deletBtn.addEventListener('click', () => {
        li.remove();
    })

    li.addEventListener('click', (event) => {
       event.target = li.classList.toggle('li-done');
    })
}