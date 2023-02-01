/* eslint-disable func-names */
import {
  Schema,
  Document,
  model,
  Model,
} from 'mongoose';

import bcrypt from 'bcryptjs';
import validator from 'validator';

export interface IUser extends Document {
  firstName: string;
  secondName: string;
  login: string
  email: string;
  phone: string;
  avatar: string;
  password: string;
  status: string;
  confirmationCode: string;
}

export interface UserModel extends Model<IUser> {
  findUserByCredentials: (email: string, password: string) => Promise<IUser | undefined>;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email: string) {
        return validator.isEmail(email);
      },
      message: 'Введён некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

UserSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user: IUser) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

export default model<IUser, UserModel>('User', UserSchema);
