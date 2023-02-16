import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import { ScrollView, Image } from "react-native";
import { POSTS } from "../data/posts";
import { Divider } from "@rneui/themed";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    height: 20,
  },
  profileIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
    borderColor: "gray",
    borderWidth: 1.6,
    borderRadius: 50,
  },
});

export default HomeScreen;
