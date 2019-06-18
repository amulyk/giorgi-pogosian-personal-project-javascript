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

let pupil_data = {
  name: {
    first: "Jane",
    last: "Doe"
  },
  image: "string",
  dateOfBirth: "11.08.1999", // format date
  phones: [
    {
      phone: "string",
      primary: true
    }
  ],
  sex: "female", // male OR female
  description: "string"
};

(async () => {
    const lms = new LMSModel();
    // console.log(await lms.remove(history));
    // console.log(await lms.add(history));
    // console.log(await lms.add(maths));
    // console.log(await lms.readAll());

    
    const teachers = new TeachersModel();
    let teacherId = await teachers.add(teacher_data);
    // console.log(await teachers.read(teacherId));
    const teacherUpdatedProfile = {
        name: {
            first:"Pitter"
        }
    };
    teacherId = await teachers.update(teacherId, teacherUpdatedProfile);
    console.log(teacherId);
    // console.log(await teachers.remove(teacherId));
    
    
    const pupils = new PupilsModel();
    let pupilId = await pupils.add(pupil_data);
    console.log(await pupils.read(pupilId));
    const pupilUpdatedProfile = {
      name: {
          first:"Kate"
      }
    };
    pupilId = await pupil.update(pupilId, pupilUpdatedProfile);
    console.log(await pupil.remove(pupilId));
})();