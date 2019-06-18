import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
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

let teacher_data = {
    name: {
      first: "John",
      last: "Doe"
    },
    image: "string",
    dateOfBirth: "17.06.1991",
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
    sex: "male",
    subjects: [
      {
        subject: "History"
      }
    ],
    description: "string",
};

const teacherUpdatedProfile = {
  name: {
      first: "Pitter"
  }
};

// let pupil_schema = {
//   "name": {
//     "first": "string",
//     "last": "string"
//   },
//   "image": "string",
//   "dateOfBirth": "string", // format date
//   "phones": [
//     {
//       "phone": "string",
//       "primary": "boolean"
//     }
//   ],
//   "sex": "string", // male OR female
//   "description": "string"
// }

// let pupil_data = {
//   name: {
//     first: "Jane",
//     last: "Doe"
//   },
//   image: "string",
//   dateOfBirth: "11.08.1999",
//   phones: [
//     {
//       phone: "string",
//       primary: true
//     }
//   ],
//   sex: "female",
//   description: "string"
// }

// const pupilUpdatedProfile = {
//   name: {
//       first: "Kate"
//   }
// }

(async () => {
    const lms = new LMSModel();
    // console.log(await lms.remove(history));
    // console.log(await lms.add(history));
    // console.log(await lms.add(maths));
    // console.log(await lms.readAll());

    
    const teachers = new TeachersModel();
    let teacherId = await teachers.add(teacher_data);
    // console.log(await teachers.read(teacherId));

    teacherId = await teachers.update(teacherId, teacherUpdatedProfile);
    console.log(teacherId);
    // console.log(await teachers.remove(teacherId));
    
    
    // const pupils = new PupilsModel();
    // let pupilId = await pupils.add(pupil_data);
    // console.log(await pupils.read(pupilId));

    // pupilId = await pupil.update(pupilId, pupilUpdatedProfile);
    // console.log(await pupil.remove(pupilId));
})();