import {validate} from "./validate";
export class GroupsModel {
    constructor() {
        this.database = new Map();
        this.schema = {
            id: 'JEF5H43H',
            room: 237,
            pupils: []
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
                        writable: true,
                        enumerable: true
                    },
                    pupils: {
                        value: [],
                        writable: true,
                        enumerable: true
                    }
                });
                this.database.set(id, group);
                resolve(group.id);
            }
        });
    }

    removePupil(groupId, id) {
        return new Promise((resolve, reject) => {
            if(typeof groupId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof id !== 'string') {
                reject("Pupil should be an string");
            }
            if(!this.database.has(groupId)) {
                reject("Group not found");
            } else {
                let pupilsArray = this.database.get(groupId).pupils;
                for(let i = 0; i < pupilsArray.length; i++) {
                    if(pupilsArray[i].id === id) {
                        resolve(pupilsArray.splice(pupilsArray.indexOf(pupilsArray[i]), 1));
                    };
                }
            }
        });
    }

    addPupil(groupId, pupil) {
        return new Promise((resolve, reject) => {
            if(typeof groupId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof pupil !== 'object') {
                reject("Pupil should be an object");
            }
            if(!this.database.has(groupId)) {
                reject("Group not found");
            } else {
                resolve(this.database.get(groupId).pupils.push(pupil));
            }
        });
    }

    update(groupId, updated) {
        return new Promise((resolve, reject) => {
            if(typeof groupId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof updated !== 'object') {
                reject("Updated should be an object");
            }
            validate(this.schema, updated, true);
            let props = Object.getOwnPropertyNames(updated);
            for(let prop of props) {
                resolve(this.database.get(groupId)[prop] = updated[prop]);
            }
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

    async readAll() {
        return new Promise((resolve, reject) => {
            if(arguments.length > 0) {
                reject("readAll() does not receive any parameters");
            } else {
                resolve([...this.database.values()]);
            }
        });
    }
}
