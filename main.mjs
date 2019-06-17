import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    // PupilsModel,
    // GroupsModel,
    // GradebooksModel
} from './school';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
});

const maths = new SubjectsModel({
    title: 'Maths',
    lessons: 20
});

// console.log(history.id);
// console.log(maths.id);

let data = {
    name: {
      first: "John",
      last: "Doe"
    },
    image: "string",
    dateOfBirth: "17.06.1991", // format date
    emails: [
      {
        email: "john.doe@gmail.com",
        primary: false
      }
    ],
    phones: [
      {
        phone: "string",
        primary: true
      }
    ],
    sex: "male", // male or female
    subjects: [
      {
        subject: "History"
      }
    ],
    description: "string",
};

(async () => {
    const lms = new LMSModel();
    // console.log(await lms.remove(history));
    // console.log(await lms.add(history));
    // console.log(await lms.add(maths));
    // console.log(await lms.readAll());

    const teachers = new TeachersModel();
    let teacherId = await teachers.add(data);
    // console.log(await teachers.read(teacherId));
    const updatedProfile = {
        name: {
            first:"Pitter"
        }
    };
    teacherId = await teachers.update(teacherId, updatedProfile);
    console.log(teacherId);
    // console.log(teachers.remove(teacherId));
})();