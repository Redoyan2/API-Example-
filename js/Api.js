



function userLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>getUser(data));
}


function getUser(data){
    const div = document.getElementById('comment-box');
    const userHead = document.getElementById('user-head');
    userHead.style.display='block';
    for(const user of data){
         const li = document.createElement('li');
         li.innerText = user.name;
         div.appendChild(li);
    } 
}
function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>getComment(data))
}

function getComment(props){
    const div = document.getElementById('comment-box');
    const userComent = document.getElementById('user-coment');
    userComent.style.display='block';
    for(const coment of props){
        const li = document.createElement('li');
        li.innerText = coment.email;
        div.appendChild(li);
    }
}

function postLoad(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=>getPost(data))
}

function getPost(data){
    const postBox = document.getElementById('post-box');
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerText =`
        <h2>${post.title}</h2>
        <p>${post.body}</p>`

        postBox.appendChild(div);


    }
}

