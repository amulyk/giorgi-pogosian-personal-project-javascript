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

const groupUpdated = {
  room: 237
};

(async () => {
    const lms = new LMSModel();
    // console.log(await lms.remove(history));
    console.log(await lms.add(history));
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
    
    const pupil2 = await pupils.add({
      name: {
        first: "TEST",
        last: "TEST"
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
    });

    // console.log(await pupils.read(pupil.id));
    // console.log(await pupils.update(pupil.id, pupilUpdatedProfile));
    // pupils.remove(pupil.id);

    const room = 236;
    const groups = new GroupsModel();
    const groupId = await groups.add(room);
    await groups.addPupil(groupId, pupil);
    await groups.addPupil(groupId, pupil2);
    // console.log(await groups.removePupil(groupId, pupil2.id));
    // console.log(await groups.update(groupId, groupUpdated));
    // console.log(await groups.read(groupId));
    // console.log(await groups.readAll());

    const pupilId = pupil.id;

    const record = {
      pupilId: pupilId,
      teacherId: teacherId,
      subjectId: history.id,
      lesson: 1,
      mark: 9
    };

    const gradebooks = new GradebooksModel(groups, teachers, lms);
    const level = 1;
    const gradebookId = await gradebooks.add(level, groupId);
    // console.log(gradebookId)
    // console.log(await gradebooks.clear());
    await gradebooks.addRecord(gradebookId, record);
    const oliver = await gradebooks.read(gradebookId, pupilId);
    // console.log(oliver);
    const students = await gradebooks.readAll(gradebookId);
    console.log(students);
})();