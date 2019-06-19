export class LMSModel {
    constructor() {
        this.database = new Map();
    }

    add(subject) {
        return new Promise((resolve, reject) => {
            let {id} = subject;
            if(typeof subject !== 'object' || !id) {
                reject("Parameter is not an object or id is not defined");
            } else {
                this.database.set(id, subject);
                resolve(id);
            }
        });
    }

    remove(subject) {
        return new Promise((resolve, reject) => {
            let {id} = subject;
            if(typeof subject !== 'object' || !id) {
                reject("Parameter is not an object or id is not defined");
            } else {
                if(this.database.has(id)) {
                    resolve(this.database.delete(id));
                } else {
                    reject("Object not found");
                }
            }
        });
    }

    verify(subject) {
        return new Promise((resolve, reject) => {
            let {id} = subject;
            if(typeof subject !== 'object' || !id) {
                reject("Parameter is not an object or id is not defined");
            } else {
                if(this.database.has(id)) {
                    resolve(true);
                } else {
                    reject(false);
                }
            }
        });
    }

    read(id) {
        return new Promise((resolve, reject) => {
            resolve(this.database.get(id));
        });
    }

    readAll() {
        return new Promise((resolve, reject) => {
            if(arguments.length > 0) {
                reject("readAll() does not have any parameters");
            } else {
                resolve([...this.database.values()]);
            }
        });
    }
}
