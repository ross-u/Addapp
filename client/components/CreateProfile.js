import React, { Component } from 'react';
import { View, StyleSheet, Text, Keyboard, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { storeContacts }  from '../redux/actions/actions';
import { TextField } from 'react-native-material-textfield';
import { ImagePicker } from 'expo';
import { API_URL } from './../config';


import { withNavigation } from 'react-navigation';
import { createNewProfile } from './../utils/profile-obj-compress';

const { width } = Dimensions.get('window');
// const minDate= "1900-05-01";
// const maxDate = "2016-06-01";
const minDate= "01 Jan 1900";
const maxDate = "01 Jan 2001";
const BASE_URL = API_URL;

class FormCreateProfile extends Component {
  state = {
      date:'01 Jan 2000',
      datePlaceholder: "ENTER AGE",
      image: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/add-icon.png',
      uploadedImageURI: 'x',
      name: '',
      base64: ''
    }
  
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

  postImage = async (base64Payload, name) => {
    let payload = JSON.stringify({
      name: name,
      imageBase64: base64Payload
     });

     console.log('postImage');

    await fetch(`${BASE_URL}/image/save`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    // .then(rawData => rawData.json())
    .then(rawData => rawData.text())
    .then( (imageName) =>  {
      const uploadedImageURI = `${BASE_URL}/${imageName}`;

      this.setState({uploadedImageURI: uploadedImageURI});
    })
    .catch( (err) => console.log('Image POST error :', err));

  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });


    // console.log(result);
    
    if (!result.cancelled) {
      // this.setState({ image: result.uri });
      this.setState({ image: result.uri, base64: result.base64 });
      // console.log(converted);
    }
  };
  
  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>

        <Formik
          initialValues={{ fName: '', lName: '', email: '', occupation: '', date: '' }}

          onSubmit={ async ({fName, lName, email, occupation, date}) => {
            
            Keyboard.dismiss();
            await this.postImage(this.state.base64, fName);
            const { uploadedImageURI } = this.state;

            let newProfile = createNewProfile(uploadedImageURI, fName, lName, email, occupation, date);

            this.props.navigation.navigate('CreateProfileAddInfo', {
              newProfile: newProfile
            });
          }
          }>
          {({ handleChange, handleSubmit, values }) => (


            <ScrollView 
              contentContainerStyle={styles.wrapper}
              showsVerticalScrollIndicator={false}
              >

              <Text style={{ fontSize: 12, marginBottom: 30 }}>Photo</Text>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {image &&
                  <Avatar
                    onPress={this._pickImage}
                    source={{ uri: image }}
                    large
                    avatarStyle={{ width: 110, height: 110, marginBottom: 20 }}
                    rounded
                  />}
              </View>

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
  me: state.myProfile
});

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
});

const FormCreateProfileWithNav = withNavigation(FormCreateProfile);
export default connect(mapStateToProps, mapActionToProps)(FormCreateProfileWithNav);