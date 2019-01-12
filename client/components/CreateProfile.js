import React, { Component } from 'react';
import { View, StyleSheet, Text, Keyboard, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { storeContacts, storeMyId }  from '../redux/actions/actions';
import { TextField } from 'react-native-material-textfield';

import { withNavigation } from 'react-navigation';
import { createNewProfile } from './../modules/profile-obj-compress';

const { width } = Dimensions.get('window');
// const minDate= "1900-05-01";
// const maxDate = "2016-06-01";
const minDate= "01 Jan 1900";
const maxDate = "01 Jan 2001";
const BASE_URL = "http://192.168.1.149:3000/user";

class FormCreateProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'01 Jan 2000',
      datePlaceholder: "ENTER AGE",
      userPhoto: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/add-icon.png'
    }
  };
  
  static navigationOptions = {
    title: 'Create profile',
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
            initialValues={{ fName: '', lName: '',  occupation: '', email: '', date: '' }} 

            onSubmit={values => {
                const { userPhoto } = this.state;
                Keyboard.dismiss();
                let newProfile = createNewProfile(userPhoto ,values.fName, values.lName, values.email, values.occupation, values.date );

                this.props.navigation.navigate('CreateProfileAddInfo', {
                  newProfile : newProfile
                });
              }
            }>
          {({ handleChange, handleSubmit, values }) => (


            <ScrollView 
              contentContainerStyle={styles.wrapper}
              showsVerticalScrollIndicator={false}
              >

              <Text style={{ fontSize: 12, marginBottom: 5 }}>Photo</Text>
              <Avatar
                large
                rounded
                activeOpacity={0.7} 
                source={{ uri: this.state.userPhoto }}
                onPress={() => console.log("Add Photo Pressed!")} 
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('fName')}
                value={values.fName}
                label="First Name"
                placeholder="First Name"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('lName')}
                value={values.lName}
                label="Last Name"
                placeholder="Last Name"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('email')}
                value={values.email}
                label="Email"
                placeholder="Email"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('occupation')}
                value={values.occupation}
                label="Occupation"
                placeholder="Occupation"
              />


              <DatePicker
                style={{ width: width - 100,  }}
                date={values.date}
                mode="date"
                placeholder={this.state.datePlaceholder}
                format="DD MMM YYYY"
                minDate={minDate}
                maxDate={maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 0
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { 
                  this.setState({ date: date, datePlaceholder: `BIRTHDAY:  ${date}` }) 
                }}
              />

              <TouchableOpacity 
                onPress={handleSubmit}
                title="Create Profile"
                style={styles.button}
              >
              <Text>Next</Text>
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

const FormCreateProfileWithNav = withNavigation(FormCreateProfile);
export default connect(mapStateToProps, mapActionToProps)(FormCreateProfileWithNav);