const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');

admin.initializeApp();

exports.saveImages = functions.https.onCall(async (files, context) => {
  if (files.length === 0) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
        'one arguments containing files to add.');
  }

  if (!context.auth) {
    throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
  }

  try{
    const client = new vision.ImageAnnotatorClient();

    await Promise.all(files.map(async file => {
      console.log("here");
      const [result] = await client.labelDetection(
        `gs://image-repository-c1030.appspot.com/${file.uploadPath}`
      );


      await admin.firestore().collection('images').doc().set(
        { 
          name: file.name, 
          uploadPath: file.uploadPath, 
          downloadURL: file.downloadURL, 
          isPublic: file.isPublic, 
          uploadedBy: context.auth.uid, 
          tags: result.labelAnnotations
        });
    }));
  } catch(err) {
    throw new functions.https.HttpsError('unknown', err.message, err);
  }

});
