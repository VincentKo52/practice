const fs = require('node:fs');

fs.readFile('data/users.json', 'utf-8', (err, data) => {
    const users = JSON.parse(data); //convert menjadi object
    
    fs.readFile('data/posts.json', 'utf-8', (err, data) => {
        const posts = JSON.parse(data);

        const filteredPosts = posts.filter((posts) => posts.userId === 1);
        //console.log(filteredPosts);

        fs.readFile('data/comments.json', 'utf-8', (err, data) => {
            const comments = JSON.parse(data);
            const filteredComments = comments.filter((comment) => comment.postId === filteredPosts[0].id);

            console.log(filteredComments);
        });
    });
    //console.log(users.length);  //2
    //console.log(typeof data);   //string
});

















