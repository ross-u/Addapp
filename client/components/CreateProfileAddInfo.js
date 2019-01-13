import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Keyboard, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { storeMyId }  from '../redux/actions/actions';
import { TextField } from 'react-native-material-textfield';

import { withNavigation } from 'react-navigation';
import { populateNewProfile } from '../modules/profile-obj-compress';

const { width } = Dimensions.get('window');
// const minDate= "1900-05-01";
// const maxDate = "2016-06-01";
const minDate= "01 Jan 1900";
const maxDate = "01 Jan 2001";
const BASE_URL = "http://192.168.1.149:3000";

class FormCreateProfileAddInfo extends Component {
  
  static navigationOptions = {
    title: 'Add Info',
  };

  createMyProfileInDB = async (newProfile) => {
    let payload = JSON.stringify(newProfile);

    await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
      .then(rawData => rawData.text())
      .then((myProfileID) => {

        myProfileIdCleaned = myProfileID.replace(/"/g, '');
        this.props.storeMyId(myProfileIdCleaned);
      })
      .catch( (err) => console.log('ERROR IN CREATING THE USER',err));
      // this.props.navigation.navigate('Dashboard');
  };

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
                
                delete completedProfile._id;
                
                ( async () => {
                await this.createMyProfileInDB(completedProfile);
                console.log('COMPLETED PROFILE', completedProfile);
                  this.props.navigation.navigate('Dashboard');
                })();
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
                onPress={ () => handleSubmit() }
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
  me: state.myProfile,
  myID: state.myID
});

const mapActionToProps = (dispatch) => ({
  storeMyId: ((id) => dispatch(storeMyId(id)))
});

const FormCreateProfileAddInfoWithNav = withNavigation(FormCreateProfileAddInfo);
export default connect(mapStateToProps, mapActionToProps)(FormCreateProfileAddInfoWithNav);