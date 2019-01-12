import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Keyboard, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { storeContacts, storeMyId }  from '../redux/actions/actions';
import { TextField } from 'react-native-material-textfield';

import { withNavigation } from 'react-navigation';
import { populateNewProfile } from '../modules/profile-obj-compress';

const { width } = Dimensions.get('window');
// const minDate= "1900-05-01";
// const maxDate = "2016-06-01";
const minDate= "01 Jan 1900";
const maxDate = "01 Jan 2001";
const BASE_URL = "http://192.168.1.149:3000/user";

class FormCreateProfileAddInfo extends Component {
  
  static navigationOptions = {
    title: 'Add Info',
  };

  //   fetch(`${BASE_URL}/${this.props.me}`, {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(rawData => rawData.json())
  //   .then( (parsedContacts) => {
  //     this.props.storeContacts(parsedContacts);
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>

      <Formik 
            initialValues={{ company: '', nationality:'', country: '',  place: '', linkedIn: '', github: '', cv: '', website: '' }} 

            onSubmit={ values => {

              const newProfileObject = this.props.navigation.getParam('newProfile', {});
              const { company, nationality, country,  place, linkedIn, github, cv, website } = values;

                Keyboard.dismiss();
                let completedProfile = populateNewProfile( newProfileObject, company, nationality, country,  place, linkedIn, github, cv, website);
                
                console.log('UROS YOU ARE DONE WITH CREATING USERS FROM FORM, NOW YOU HAVE TO STORE IT IN THE REDUX STORE, IN HERE,  AND ALSO CREATE A USER ON THE SERVER... After creation on the server you need to get the entire profile from the server, especially because it has the `_id` created by MongoDB')
              }
            }>
          {({ handleChange, handleSubmit, values, handleBlur }) => (

            <ScrollView 
              contentContainerStyle={styles.wrapper}
              showsVerticalScrollIndicator={false}
              >
            <TextField
                style={styles.formField}
                onChangeText={handleChange('company')}
                onBlur={handleBlur('company')}
                value={values.company}
                label="Company"
                placeholder="Company"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('nationality')}
                value={values.nationality}
                label="Nationality"
                placeholder="Nationality"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('country')}
                value={values.country}
                label="Country"
                placeholder="Country"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('place')}
                value={values.place}
                label="Place"
                placeholder="Place"
              />

              
              <TextField
                style={styles.formField}
                onChangeText={handleChange('linkedIn')}
                value={values.linkedIn}
                label="linkedIn"
                placeholder="linkedIn"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('github')}
                value={values.github}
                label="GitHub"
                placeholder="GitHub"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('cv')}
                value={values.cv}
                label="CV"
                placeholder="CV"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('website')}
                value={values.website}
                label="Website"
                placeholder="Website"
              />

              <TouchableOpacity 
                onPress={handleSubmit}
                title="Create Profile"
                style={styles.button}
              >
              <Text>Create Profile</Text>
              </TouchableOpacity>
              </ScrollView>
            )}
          </Formik>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    alignContent: 'center',
    width: width - 30,
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  formField: {
  },
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  me: state.me
});

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyId: ((id) => dispatch(storeMyId(id)))
});

const FormCreateProfileAddInfoWithNav = withNavigation(FormCreateProfileAddInfo);
export default connect(mapStateToProps, mapActionToProps)(FormCreateProfileAddInfoWithNav);