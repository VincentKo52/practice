const fs = require('node:fs/promises');

fs.readFile('data/users.json', 'utf-8')
    .then((data) => JSON.parse(data))
    .then((users) => 
        fs.readFile('data/posts.json', 'utf-8').then((data) => {
            const posts = JSON.parse(data);        
            return posts.filter((post) => post.userId === users[0].id);
        }),
    )
    .then((posts) => 
        fs.readFile('data/comments.json', 'utf-8').then((data) => {
            const comments = JSON.parse(data);
            return comments.filter((comment) => comment.postId === posts[0].id);
        }),
    )
    .then((comments) => {
        console.log(comments);
    });

//[
//  { id: 2, postId: 2, text: 'Great tips, thanks!' },
//  { id: 4, postId: 2, text: 'This helped me a lot.' }
//]