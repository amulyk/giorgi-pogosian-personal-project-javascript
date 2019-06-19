import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel
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

let pupil_data = {
  name: {
    first: "Jane",
    last: "Doe"
  },
  image: "string",
  dateOfBirth: "11.08.1999",
  phones: [
    {
      phone: "string",
      primary: true
    }
  ],
  sex: "female",
  description: "string"
};

const pupilUpdatedProfile = {
  name: {
      first: "Kate"
  }
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

    // teacherId = await teachers.update(teacherId, teacherUpdatedProfile);
    // console.log(teacherId);
    // console.log(await teachers.remove(teacherId));
    
    const pupils = new PupilsModel();
    const pupil = await pupils.add(pupil_data);
    // console.log(await pupils.read(pupil.id));
    // console.log(await pupils.update(pupil.id, pupilUpdatedProfile));
    // pupils.remove(pupil.id);

    const room = 236;
    const groups = new GroupsModel();
    const group = await groups.add(room);
    // console.log(await groups.removePupil(groupId, pupil.id));
    // console.log(await groups.addPupil(group, pupil));
    console.log(group);
    // groups.update(groupId, {
    //   room: 237
    // });
    // console.log(await groups.read(groupId));
    // console.log(await groups.readAll());

    const pupilId = pupil.id;
    const gradebooks = new GradebooksModel(groups, teachers, lms);
    const level = 1;
    const gradebook = gradebooks.add(level, group.id);
})();