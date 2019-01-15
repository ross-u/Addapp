// ACTIONS
/* export const apiGetEvents = (events) => (
  { type: 'API_GET_EVENTS', events: events }
);
 */

export const storeContacts = (contacts) => (
  { type: 'STORE_ALL_CONTACTS', contacts }
);

export const storeNewContact = (newContact) => (
  { type: 'STORE_NEW_CONTACT', newContact }
);

export const addIdToOfflineList = (newContactId) => (
  { type: 'ADD_CONTACT_ID_TO_OFFLINE_LIST', newContactId }
);

export const resetOfflineList = () => ({ type: 'RESET_OFFLINE_LIST'});

export const storeMyId = (id) => (
  { type: 'STORE_MY_ID', id }
);

export const storeMyProfile = (myProfile) => (
  { type: 'STORE_MY_PROFILE', myProfile }
);

export const storeMyProfileJSONString = (JSONString) => (
  { type: 'STORE_MY_PROFILE_AS_JSON_STRING', JSONString }
);

export const shrinkLogo = (myProfile) => (
  { type: 'SHRINK_LOGO', myProfile }
);


export const expandLogo = (myProfile) => (
  { type: 'EXPAND_LOGO', myProfile }
);