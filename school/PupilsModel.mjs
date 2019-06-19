import {validate} from "./validate";
export class PupilsModel {
    constructor() {
        this.database = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
              {
                "phone": "string",
                "primary": true
              }
            ],
            "sex": "string", // male OR female
            "description": "string"
          };
    }

    add(pupil) {
        return new Promise((resolve, reject) => {
            if(typeof pupil !== 'object') {
                reject("Parameter is not an object");
            } else {
                let id = String(Math.floor(Math.random() * new Date().getTime()));
                pupil.id = id;
                validate(this.schema, pupil);
                this.database.set(id, pupil);
                resolve(this.database.get(id));
            }
        });
    }

    read(id) {
        return new Promise((resolve, reject) => {
            if(typeof id !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(id)) {
                    resolve(this.database.get(id));
                } else {
                    reject("Object not found");
                }
            }
        });
    }

    update(id, updated) {
        return new Promise((resolve, reject) => {
            if(typeof id !== 'string') {
                reject("Id should be a string");
            }
            if(typeof updated !== 'object') {
                reject("UpdatedProfile is not an object");
            }
            validate(this.schema, updated, true);
            let props = Object.getOwnPropertyNames(updated);
            for(let prop of props) {
                resolve(this.database.get(id)[prop] = updated[prop]);
            }
        });
    }

    remove(pupilId) {
        return new Promise((resolve, reject) => {
            if(typeof pupilId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(pupilId)) {
                    resolve(this.database.delete(pupilId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }
}