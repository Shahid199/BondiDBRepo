const mongoose = require("mongoose");
const courses = require("./courses");
const students = require("./students");
const Schema = mongoose.Schema;

const courseVsStudentsScheam = new Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:courses,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:students,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true } //createdAt,updatedAt auto genrate in the DB table.
);

module.exports = mongoose.model("CourseVsStudent", courseVsStudentsScheam);
