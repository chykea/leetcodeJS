class EventEmitter {
    subscribe(event, cb) {
        this.list = this.list ? this.list : {};
        (this.list[event] || (this.list[event] = [])).push(cb)
        return {
            unsubscribe: () => {
                this.list[event] = this.list[event].filter((item) => item !== cb);
                return
            }
        };
    }

    emit(event, args = []) {
        // console.log(this.list[event]);
        if (!this.list[event]) return [];
        let res = []
        this.list[event].forEach(cb => {
            res.push(cb(...args))
        })
        return res
    }
}
// const emitter = new EventEmitter()
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);

// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []

const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
console.log(emitter.emit("firstEvent", [1, 2, 3]));; // ["1,2,3"]
console.log(sub.unsubscribe());; // undefined
console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], 没有订阅者