import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Documents from '../imports/doc.js';

Meteor.startup(() => {
  // code to run on server at startup
  // console.log('Documents:::', Documents.find().fetch());
  Meteor.publish('documents', function() {
      return Documents.find();
  });
});
