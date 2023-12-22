const inps = document.querySelectorAll('#inp');
const ans = document.querySelector('#ans');
const eql = document.querySelector('#eql');
const del = document.querySelector('#del');
const clear = document.querySelector('#clear');
const sec = document.querySelector('#section')

for (let inp of inps) {
    inp.addEventListener('click', function () {
        ans.setAttribute('class', "col-span-4 text-center rounded-lg bg-sky-500/100 p-7 h-50 text-blue-600/100")

        ans.innerText += inp.innerText;
        console.log(inp.innerText);

    })
}

eql.addEventListener('click', function () {
    ans.innerText = eval(ans.innerText);
})

clear.addEventListener('click', function () {
    ans.innerText = '';
    
})

del.addEventListener('click', function () {
    ans.innerText = ans.innerText.slice(0, -1);
})
