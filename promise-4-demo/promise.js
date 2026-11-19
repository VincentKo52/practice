//Make our own Promise from scratch

const State = {
    INITIAL: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class MyPromise {
    #state = State.INITIAL;
    #value;   // err || value

    /**
     * @type {Array<() => void>}
     */
    #handlers = [];
    constructor(executor) {
        const resolve = (value) => {
            if(this.#state !== State.INITIAL) return;

            this.#state = State.RESOLVED;
            this.#value = value;
            this.#handlers.forEach(h => h());   //(h => h.onResolved(this.#value));
        };

        const reject = (err) => {
            if(this.#state !== State.INITIAL) return;

            this.#state = State.REJECTED;
            this.#value = err;
            this.#handlers.forEach(h => h());   //(h => h.onRejected(this.#value));
        };

        executor(resolve, reject);
    }

    then(onResolved) {
        return new MyPromise((resolve, reject) => {
            const handler = () => {
                const value = onResolved(this.#value);
                resolve(value);
            };

            if(this.#state === State.RESOLVED) {
                handler();
            } else if(this.#state === State.INITIAL) {
                this.#handlers.push(handler)
            }
        });
    }

    catch(onRejected) {
        return new MyPromise((resolve, reject) => {
            const handler = () => {
                const err = onRejected(this.#value);
                reject(err);
            };

            if(this.#state === State.REJECTED) {
                handler();
            } else if(this.#state === State.INITIAL) {
                this.#handlers.push({ onRejected });
                //this.#handlers.push(handler)
            }
        });
    }
}

const promise = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve(5);
    }, 3000);
})

promise.then((value) => {
    return value + 2;
}).then((value) => {
    console.log(value);
});

// // Print out array of The value is 5
// const promise = new MyPromise(function(resolve, reject) {
//     resolve(5);
//     //reject(new Error('Something went wrong'));
// });

// promise.then(function(value) {
//     console.log('[1] The value is ' + value);
// });

// promise.then(function(value) {
//     console.log('[2] The value is ' + value);
// });

// promise.then(function(value) {
//     console.log('[3] The value is ' + value);
// });

// promise.catch(function(err) {
//     console.log(err);
// });

console.log('END OF PROGRAM');