export class SubjectsModel {
    constructor({title, lessons, description = null}) {
        this._verify(title, lessons, description);
        
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        this.id = String(Math.floor(Math.random() * new Date().getTime()));
    }

    _verify(title, lessons, description) {
        if(!title || typeof title !== 'string') {
            throw new Error("Error: title field is required and should be a string");
        }
        if(!lessons || typeof lessons !== 'number') {
            throw new Error("Error: lessons field is required and should be a number");
        }
        if(description !== null && typeof description !== 'string') {
            throw new Error("Error: description field should be a string");
        }
    }
}
