import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { connect } from "react-redux";
import {
  storeContacts,
  storeMyId,
  storeMyProfileJSONString
} from "../redux/actions/actions";
import { compressProfile } from "./../utils/profile-obj-compress";
import {
  backgroundColor,
  headerColor,
  accentColor,
  dimmedAccentColor,
  accentColorShadow
} from "../utils/style";

import HeadersActions from "./../components/HeadersActions";

const canOpenURL = url => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) console.log(`Can't handle url: ${url}`);
      else return Linking.openURL(url);
    })
    .catch(err => console.error("An error occurred", err));
};

class MyProfileView extends Component {
  static navigationOptions = {
    headerBackgroundTransitionPreset: "toggle",
    title: "My Profile",
    headerRight: <HeadersActions />,
    headerStyle: { backgroundColor: headerColor },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  stringifyMyProfile = myProfile => {
    const myProfileCompressed = compressProfile(myProfile);
    const jsonString = JSON.stringify(myProfileCompressed);
    this.props.storeMyProfileJSONString(jsonString);
  };

  componentDidMount() {
    this.stringifyMyProfile(this.props.me);
  }

  render() {
    const myProfile = this.props.me;

    const {
      fName,
      lName,
      occupation,
      currentLocation: loc,
      email
    } = myProfile.personal;
    const { facebook, instagram, twitter, blog } = myProfile.social;
    const { linkedIn, github, cv, website } = myProfile.networking;
    const { photo } = myProfile;
    return (
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <Avatar
            avatarStyle={{ borderWidth: 2, borderColor: accentColorShadow }}
            xlarge
            rounded
            source={{ uri: photo }}
            onPress={() => console.log("Works!")}
          />
          <Text style={styles.name}> {`${fName} ${lName}`} </Text>
          <Text style={styles.jobtitle}> {`${occupation}`} </Text>
          <Text style={styles.details}>
            Lives in - {`${loc.country}, ${loc.place}`}
          </Text>

          <TouchableOpacity style={styles.yellowButtonRound}>
            <Icon
              git
              status
              type="font-awesome"
              name="share-alt"
              size={36}
              color="black"
              onPress={() =>
                this.props.navigation.navigate("ShareQRCode", {
                  myProfile: myProfile
                })
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconsContainer}>
          <Text style={styles.category}> Networking </Text>

          <ScrollView horizontal contentContainerstyle={styles.iconsScrollView}>
            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="font-awesome"
              name="github"
              color="#00aced"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(github)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="font-awesome"
              name="user-circle-o"
              color="#517fa4"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(cv)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              name="mail-outline"
              color="#0984e3"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(email)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="entypo"
              name="facebook"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(facebook)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="font-awesome"
              name="instagram"
              color="#00aced"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(instagram)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="font-awesome"
              name="twitter"
              color="#517fa4"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(twitter)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type="font-awesome"
              name="meetup"
              color="#517fa4"
              size={28}
              raised={true}
              onPress={() => thiscanOpenURL(blog)}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: backgroundColor
  },
  profileWrapper: {
    flex: 4,
    padding: 10,
    alignItems: "center"
  },
  avatarContainer: {
    borderBottomColor: "rgb(204, 160, 15)",
    borderLeftColor: "rgb(204, 160, 15)",
    borderRightColor: "rgb(204, 160, 15)",
    borderBottomWidth: 5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1
  },
  iconsContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  iconsScrollView: {
    flex: 1,
    flexDirection: "row",
    color: "black"
  },
  iconShadow: {
    borderBottomColor: "rgb(204, 160, 15)",
    borderLeftColor: "rgb(204, 160, 15)",
    borderRightColor: "rgb(204, 160, 15)",
    borderBottomWidth: 4,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2
  },
  icons: {
    color: "black"
  },
  name: {
    fontSize: 30,
    color: "white"
  },
  jobtitle: {
    fontSize: 20,
    marginBottom: 10,
    color: "white"
  },
  details: {
    fontSize: 16,
    color: "white"
  },
  miniInfo: {
    fontSize: 12,
    fontWeight: "100",
    color: dimmedAccentColor
  },
  category: {
    fontSize: 14,
    fontWeight: "700",
    alignItems: "center",
    color: "white",
    marginLeft: 10,
    marginBottom: 5
  },
  website: {
    fontSize: 14,
    alignItems: "center"
  },
  yellowButtonRound: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: accentColor,
    borderRadius: 65,
    marginTop: 20,

    borderBottomColor: "rgb(204, 160, 15)",
    borderLeftColor: "rgb(204, 160, 15)",
    borderRightColor: "rgb(204, 160, 15)",
    borderBottomWidth: 5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1
  },
  iconShadow: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: "#FFFFFF",
    borderRadius: 65,
    marginTop: 20,

    borderBottomColor: "rgb(80, 79, 79)",
    borderLeftColor: "rgb(80, 79, 79)",
    borderRightColor: "rgb(80, 79, 79)",
    borderBottomWidth: 4,

    // borderBottomColor: 'rgb(87, 87, 87)',
    // borderLeftColor: 'rgb(87, 87, 87)',
    // borderRightColor: 'rgb(87, 87, 87)',
    // borderBottomWidth: 3,

    borderLeftWidth: 0.1,
    borderRightWidth: 0.1
  }
});

const mapStateToProps = state => ({
  contacts: state.contacts,
  me: state.myProfile,
  myProfileJSONString: state.myProfileJSONString
});

const mapActionToProps = dispatch => ({
  storeContacts: contacts => dispatch(storeContacts(contacts)),
  storeMyId: id => dispatch(storeMyId(id)),
  storeMyProfileJSONString: JSONString =>
    dispatch(storeMyProfileJSONString(JSONString))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(MyProfileView);
