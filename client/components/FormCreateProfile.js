import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Keyboard, Dimensions } from 'react-native';
import { Avatar, Button} from 'react-native-elements';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { storeContacts, storeMyId }  from './../redux/actions/actions';

const { width } = Dimensions.get('window');
const minDate= "1900-05-01";
const maxDate = "2016-06-01";
const BASE_URL = "http://192.168.1.149:3000/user";

class FormCreateProfile extends Component {
  static navigationOptions = {
    title: 'Create profile',
  };

  createMyContacts = (values) => {
    const payload = {
      "photo": values.photo,
      "personal": {
          "fName": values.fName,
          "lName": values.lName,
          "age": 36,
          "occupation": values.occupation,
          "email": values.email,
          "birthday": "1234567890123",
          "nationality": [],
          "birthplace": {
              "country": "Scotland",
              "place": "Gurock",
              "lng": 2.19705,
              "lat": 41.39578
          },
          "currentLocation": {
              "country": "Spain",
              "place": "Barcelona",
              "lng": 2.19705,
              "lat": 41.39578
          }
      },
      "social": {
          "facebook": "https://www.facebook.com/",
          "instagram": "https://www.instagram.com/codeworksbcn/",
          "twitter": "https://twitter.com/",
          "blog": "https://blogger.googleblog.com/"
      },
      "networking": {
          "linkedIn": "https://www.linkedin.com/in/rossulbricht",
          "github": "https://github.com/ross-u",
          "cv": " CV ",
          "website": "https://github.com/ross-u"
      },
      "contacts": [],
      "__v": 0
  }

    fetch(`${BASE_URL}/${this.props.me}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(rawData => rawData.json())
    .then( (parsedContacts) => {
      this.props.storeContacts(parsedContacts);
    });
  };

  render() {
    return (
      <View style={styles.container}>

      <Formik 
            initialValues={{ fName: '', lName: '',  occupation: '', email: '', date: '' }} 
            onSubmit={values => {
                console.log(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
          {({ handleChange, handleSubmit, values }) => (

            <View style={styles.wrapper}>
              <Avatar
                xlarge
                rounded
                activeOpacity={0.7} 
                source={{ uri: "https://static.thenounproject.com/png/396915-200.png" }}
                onPress={() => console.log("Works!")} 
              />

              <TextInput
                style={styles.formField}
                onChangeText={handleChange('fName')}
                value={values.fName}
                label="First name"
                placeholder="First Name"
              />

              <TextInput
                style={styles.formField}
                onChangeText={handleChange('lName')}
                value={values.lName}
                label="Last name"
                placeholder="Last Name"
              />

              <TextInput
                style={styles.formField}
                onChangeText={handleChange('occupation')}
                value={values.occcupation}
                label="Occupation"
                placeholder="Occupation"
              />

              <TextInput
                style={styles.formField}
                onChangeText={handleChange('email')}
                value={values.occcupation}
                label="Email"
                placeholder="Email"
              />

              <DatePicker
                style={{ width: 200 }}
                date={values.date}
                mode="date"
                placeholder={values.date}
                format="YYYY-MM-DD"
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
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
              />

              <Button 
                onPress={handleSubmit}
                raised
                title="Submit"
              ></Button>
              </View>
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
    alignItems: 'center'
  },
  formField: {
    width: width - 50,
    height: 40,
    marginBottom: 20
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

export default connect(mapStateToProps, mapActionToProps)(FormCreateProfile);