import {validate} from "./validate";
export class GroupsModel {
    constructor() {
        this.database = new Map();
        this.schema = {
            id: 'JEF5H43H',
            room: 237
        };
    }

    _makeid(length = 8) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
           result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    add(room) {
        return new Promise((resolve, reject) => {
            if(typeof room !== 'number') {
                reject("Parameter is not a number");
            } else {
                let id = this._makeid();
                let group = Object.create(Object.prototype, {
                    id: {
                        value: id,
                        enumerable: true
                    },
                    room: {
                        value: room,
                        enumerable: true
                    }
                });
                this.database.set(id, group);
                resolve(group.id);
            }
        });
    }

    addPupil(id, pupil) {
        return new Promise((resolve, reject) => {
            if(typeof id !== 'string') {
                reject("Id should be a string");
            }
            if(typeof pupil !== 'object') {
                reject("Pupil should be an object");
            }
            resolve();
        });
    }

    read(id) {
        return new Promise((resolve, reject) => {
            if(typeof id !== 'string') {
                reject("Parameter is not a string");
            } else {
                if(this.database.has(id)) {
                    resolve(this.database.get(id));
                } else {
                    reject("Object not found");
                }
            }
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