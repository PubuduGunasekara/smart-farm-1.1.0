import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import About from "../../components/About";
import Notifications from "../UserPages/Notifications";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../redux/actions/userLogin";

const Stack = createStackNavigator();

const AboutStack = ({ navigation, logout }) => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({
          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
          headerTitle: "",

          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Notifications")}
                  >
                    <MaterialIcons
                      name="notifications-none"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                >
                  <AntDesign name="menu-fold" size={30} color="black" />
                </TouchableOpacity>
              </View>
            );
          },
        })}
      />

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={() => ({
          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
          headerTitle: "",

          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Notifications")}
                  >
                    <MaterialIcons
                      name="notifications-on"
                      size={30}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                >
                  <AntDesign name="menu-fold" size={30} color="black" />
                </TouchableOpacity>
              </View>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const mapDispatchProps = (dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchProps)(AboutStack);
