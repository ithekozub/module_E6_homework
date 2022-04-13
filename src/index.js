import './styles.css';

console.log("SUPER");
let root = document.getElementById('root');



function render(data) {

    let text = '<h2>Заголовок: ' + data["title"] + '</h2><p>Автор: '+ data["author"] +'</p>';
    root.insertAdjacentHTML('afterend',text);
};

fetch('http://localhost:3000/posts')
    .then((response) => { return response.json(); })
    .then((data) => { data.reverse().map(render); })
    .catch(() => { console.log('error') });