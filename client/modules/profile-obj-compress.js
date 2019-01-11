export const compressProfile = (myProfile) => {

  const {_id, photo} = myProfile;
  const { age, fName, lName, occupation } = myProfile.personal;
  const { country, place } = myProfile.personal.currentLocation;
  const { cv, github, linkedIn, website } = myProfile.networking;

  const compressed = { _id, cv, github, linkedIn, website, age, country, place, fName, lName, occupation, photo};
  return compressed;
};

let emptyProfile = {
  "_id": "",
  "contacts": [],
  "networking": {
    "cv": "",
    "github": "",
    "linkedIn": "",
    "website": "",
  },
  "personal": {
    "age": 1234,
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
    "nationality": [],
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

  const { cv, github, linkedIn, website, age, country, place, fName, lName, occupation} = compressedProfile;

  let { _id, photo} = compressedProfile;
  let currentLocation = Object.assign({}, { country, place });
  let personal = Object.assign({}, { age, currentLocation, fName, lName, occupation});
  let networking = Object.assign({}, {cv, github, linkedIn, website});

  decompressed = Object.assign(decompressed, { _id, photo, personal, networking,  });
  return decompressed;
};

