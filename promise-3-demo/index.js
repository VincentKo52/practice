'use strict';

const fs = require('node:fs/promises');

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {number} userId
 * @property {string} title
 */

/**
 * @typedef {Object} Comment
 * @property {number} id
 * @property {number} postId
 * @property {string} text
 */

/**
 * @returns {Promise<User[]>}
 */
function readUsers () {
    return fs.readFile('data/users.json', 'utf-8')
    .then(data => JSON.parse(data));
}

/**
 * Read post that were posted by the given user.
 * @param {number} userId
 * @returns {Promise<Post[]>} 
 */
function readPosts (userId) {
    return fs
    .readFile('data/posts.json', 'utf-8')
    .then(data => JSON.parse(data)
    .filter(post => post.userId === userId));
}

// // To filter out all posts with the userId = 1 (Alice's posts)
// readPosts(1).then(posts => {
//     const filteredPosts = posts.filter(post => post.userId === 1);
//     console.log(filteredPosts);
// }); 

function readComments (postId) {
    return fs
    .readFile('data/comments.json', 'utf-8')
    .then(data => JSON.parse(data)
    .filter(comment => comment.postId === postId));
}

// readComments(2).then(comments => {
//     console.log(comments);
// });

// Promise Chaining
readUsers()
.then(users => readPosts(users[0].id))
.then(posts => readComments(posts[0].id))
.then(comments => console.log(comments))
.catch(err => {
    console.log('error terjadi'); //optional utk catch error
});