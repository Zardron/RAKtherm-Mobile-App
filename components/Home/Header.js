import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={{
            uri: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1672379596/RAKtherm/Asset_1-8_lvdgaa.png",
          }}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>0</Text>
          </View>
          <Image
            style={styles.notificationIcon}
            source={require("../../images/notif.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.profileIcon}
            source={require("../../images/logo.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  profileIcon: {
    width: 38,
    height: 38,
    resizeMode: "contain",
    marginRight: 10,
    borderColor: "#414142",
    borderWidth: .3,
    borderRadius: 50
  },
  notificationIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
   
  },
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 18,
    bottom: 12,
    width: 25,
    height: 22,
    zIndex: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  unreadBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
