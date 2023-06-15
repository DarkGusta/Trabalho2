import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const educationModel = database.define(
  'education',
  /*isto é o nome da tabela da base de dados*/ {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    school: {
      type: STRING,
      allowNull: false,
    },
    date: {
      type: STRING,
      allowNull: false,
    },
    educationDescription: {
      type: STRING,
      allowNull: false,
    },
  }
);
export { educationModel };