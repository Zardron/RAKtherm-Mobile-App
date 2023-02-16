import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import { postFooterIcons } from "../../data/posts";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <Icon />
      <Like post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 3,
      marginVertical: 5,
      alignItems: "center",
      flex: 1,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.profileIcon} source={{ uri: post.profilePicture }} />
      <Text style={{ color: "black", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "black", marginRight: 15, fontWeight: "900" }}>
      ...
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View>
    <Divider width={1} orientation="vertical" />

    <Image
      source={{ uri: post.imageUrl }}
      style={{
        alignSelf: "center",
        resizeMode: "contain",
        height: 350,
        width: "100%",
      }}
    />
    <Divider width={1} orientation="vertical" />
  </View>
);

const Icon = () => (
  <View
    style={{
      flexDirection: "row",
      marginLeft: 10,
      justifyContent: "space-between",
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={{ uri: postFooterIcons[0].imageUrl }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={{ uri: postFooterIcons[1].imageUrl }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={{ uri: postFooterIcons[2].imageUrl }}
        />
      </TouchableOpacity>
    </View>
    <View style={{ marginRight: 5 }}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={{ uri: postFooterIcons[3].imageUrl }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Like = ({ post }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      style={{ width: 20, height: 20, resizeMode: "contain", marginLeft: 20 }}
      source={{ uri: postFooterIcons[4].imageUrl }}
    />
    <Text style={{ color: "black", marginLeft: 5, fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} <Text>likes</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  profileIcon: {
    width: 33,
    height: 33,
    marginLeft: 10,
    borderColor: "gray",
    borderWidth: 1.6,
    borderRadius: 50,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 5,
    marginVertical: 6,
  },
});

export default Post;
