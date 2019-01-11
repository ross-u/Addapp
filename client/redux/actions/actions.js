// ACTIONS
/* export const apiGetEvents = (events) => (
  { type: 'API_GET_EVENTS', events: events }
);
 */

export const storeContacts = (contacts) => (
  { type: 'STORE_CONTACTS', contacts }
);

export const storeMyId = (id) => (
  { type: 'STORE_MY_ID', id }
);

export const storeMyProfile = (myProfile) => (
  { type: 'STORE_MY_PROFILE', myProfile }
);

export const storeMyProfileJSONString = (JSONString) => (
  { type: 'STORE_MY_PROFILE_AS_JSON_STRING', JSONString }
);