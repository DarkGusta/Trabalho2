import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const workExpModel = database.define(
  'workExp',
  /*isto é o nome da tabela da base de dados*/ {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    job: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: STRING,
      allowNull: false,
    },
    jobDescription: {
      type: STRING,
      allowNull: false,
    },
  }
);
export { workExpModel };