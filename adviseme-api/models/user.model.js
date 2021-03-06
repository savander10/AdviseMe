var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var passportLocalMongoose = require('passport-local-mongoose');

//TODO: VALIDATION

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
    },
    hash: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    }
    studentID: {
      type: Number,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    major: {
      type: String,
      default: 'undeclared',
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    university: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },

    //Student
    advisor: Schema.ObjectId,
    course: [
      {
        classID: { Schema.ObjectId, required: true },
        grade:  { type: String, required: true}
      }
    ],
    suggestedClasses: [{classID: Schema.ObjectId }],
    student_Meta: Schema.ObjectId,
    cart: Schema.ObjectId,

    //Adviser/Teacher
    underlings: [ {student_id: Schema.ObjectId}],

    //Other data
    appointments: [{ appointment: Schema.ObjectId}],
    created: Date,
    updated: { type: Date, default: Date.now}
})

UserSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created)
    this.created = currentDate;

  next();
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('User', UserSchema)

module.exports = User;
