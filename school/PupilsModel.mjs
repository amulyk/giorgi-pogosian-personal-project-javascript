export class PupilsModel {
    constructor() {
        this.database = new Map();
    }

    _verify(pupil) {
        let {id, name, image, dateOfBirth, phones, sex, description = null} = pupil;
        if(typeof pupil !== 'object' || !id) {
            throw new Error("Parameter is not an object or id is not defined");
        }
        if(!name || typeof name !== 'object') {
            throw new Error("Error: name is required and should be an object");
        }
        if(!name.first || typeof name.first !== 'string') {
            throw new Error("Error: name.first is required and should be a string");
        }
        if(!name.last || typeof name.last !== 'string') {
            throw new Error("Error: name.last is required and should be a string");
        }
        if(!image || typeof image !== 'string') {
            throw new Error("Error: image is required and should be a string");
        }
        if(!dateOfBirth || typeof dateOfBirth !== 'string') {
            throw new Error("Error: dateOfBirth is required and should be a string");
        }
        if(!this._isDate(dateOfBirth)) {
            throw new Error("Invalid date format");
        }
        if(!phones || !Array.isArray(phones)) {
            throw new Error("Error: phones are required and should be an array");
        }
        if(phones.length === 0) {
            throw new Error("Error: at least one phone is required");
        }
        for(let item of phones) {
            if(typeof item !== 'object') {
                throw new Error("Error: each item should be an object");
            } else if(typeof item.phone !== 'string') {
                throw new Error("Error: phone should be a string");
            } else if(typeof item.primary !== 'boolean') {
                throw new Error("Error: phone.primary should be a boolean");
            }
        }
        if(!sex || typeof sex !== 'string') {
            throw new Error("Error: sex is required and should be a string");
        }
        if(sex !== 'male' && sex !== 'female') {
            throw new Error("Error: invalid input");
        }
        if(description !== null && typeof description !== 'string') {
            throw new Error("Error: description field should be a string");
        }
        return true;
    }

    _isDate(str) {
        if(typeof str !== 'string') {
            throw new Error("Error: parameter should be a string");
        }

        let re = /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
        return str.match(re) ? true : false;
    }

    add(pupil) {
        return new Promise((resolve, reject) => {
            if(typeof pupil !== 'object') {
                reject("Parameter is not an object or id is not defined");
            } else {
                let id = String(Math.floor(Math.random() * new Date().getTime()));
                pupil.id = id;
                if(this._verify(pupil)) {
                    this.database.set(id, pupil);
                    resolve(id);
                } else {
                    reject("Error: object is not valid");
                }
            }
        });
    }

    read(pupilId) {
        return new Promise((resolve, reject) => {
            if(typeof pupilId !== 'string') {
                reject("Id should be a string");
            } else {
                if(this.database.has(pupilId)) {
                    resolve(this.database.get(pupilId));
                } else {
                    reject("Object not found");
                }
            }
        });
    }

    update(pupilId, updated) {
        return new Promise((resolve, reject) => {
            if(typeof pupilId !== 'string') {
                reject("Id should be a string");
            }
            if(typeof updated !== 'object') {
                reject("UpdatedProfile is not an object");
            }
            // console.log(Object.getOwnPropertyNames(updated));
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