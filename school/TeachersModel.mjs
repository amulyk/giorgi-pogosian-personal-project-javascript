import {validate} from "./validate";
export class TeachersModel {
    constructor() {
        this.database = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male or female
            "subjects": [
              {
                "subject": "string"
              }
            ],
            "description": "string",
          };
    }

    add(teacher) {
        return new Promise((resolve, reject) => {
            if(typeof teacher !== 'object') {
                reject("Parameter is not an object");
            } else {
                let id = String(Math.floor(Math.random() * new Date().getTime()));
                teacher.id = id;
                validate(this.schema, teacher);
                this.database.set(id, teacher);
                resolve(id);
            }
        });
    }

    read(teacherId) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(teacherId)) {
                    resolve(this.database.get(teacherId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }

    update(teacherId, updated) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof updated !== 'object') {
                reject("UpdatedProfile is not an object");
            }
            validate(this.schema, updated, true);
            let props = Object.getOwnPropertyNames(updated);
            for(let prop of props) {
                this.database.get(id)[prop] = updated[prop];
            }
        });
    }

    remove(teacherId) {
        return new Promise((resolve, reject) => {
            if(typeof teacherId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(teacherId)) {
                    resolve(this.database.delete(teacherId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }
}