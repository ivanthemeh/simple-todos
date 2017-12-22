import { Mongo } from 'meteor/mongo';

export default Documents = new Mongo.Collection('documents');

// Documents.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// Documents.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });
