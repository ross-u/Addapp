export const compressProfile = (profile) => {

  const { _id, photo } = profile;
  const { age, fName, lName, occupation } = profile.personal;
  const { country, place } = profile.personal.currentLocation;
  const { cv, github, linkedIn, website } = profile.networking;

  const compressed = { _id, cv, github, linkedIn, website, age, country, place, fName, lName, occupation, photo };
  return compressed;
};

let emptyProfile = {
  "_id": null,
  "contacts": [],
  "networking": {
    "cv": "",
    "github": "",
    "linkedIn": "",
    "website": "",
  },
  "personal": {
    "age": 99,
    "birthday": "",
    "birthplace": {
      "country": "",
      "lat": 0,
      "lng": 0,
      "place": "",
    },
    "currentLocation": {
      "country": "",
      "lat": 0,
      "lng": 0,
      "place": "",
    },
    "fName": "",
    "lName": "",
    "nationality": "",
    "occupation": "",
  },
  "photo": "",
  "social": {
    "blog": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
  }
}

export const decompressProfile = (compressedProfile) => {
  let decompressed = Object.assign({}, emptyProfile);

  const { cv, github, linkedIn, website, age, country, place, fName, lName, occupation } = compressedProfile;

  let { _id, photo } = compressedProfile;
  let currentLocation = Object.assign({}, { country, place });
  let personal = Object.assign({}, { age, currentLocation, fName, lName, occupation });
  let networking = Object.assign({}, { cv, github, linkedIn, website });

  decompressed = Object.assign(decompressed, { _id, photo, personal, networking });
  return decompressed;
};

export const createNewProfile = (photo, fName, lName, email, occupation, birthday) => {
  const newProfile = Object.assign({}, emptyProfile);
  let personal = Object.assign(newProfile.personal, { fName, lName, email, occupation, birthday });

  const newProfilePopulated = Object.assign(newProfile, { photo, personal });
  return newProfilePopulated;
}

export const populateNewProfile = (newProfileObject, company, nationality, country, place, linkedIn, github, cv, website) => {

  const currentLocation = { country, place, lng: '123', lat: '123' };
  const personal = Object.assign(newProfileObject.personal, { company, nationality, currentLocation });
  let networking = Object.assign({}, { linkedIn, github, cv, website });

  const newProfileCompleted = Object.assign(newProfileObject, { personal, networking });

  return newProfileCompleted;
}
