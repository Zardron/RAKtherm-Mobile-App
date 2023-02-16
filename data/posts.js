import { USERS } from "../data/users";

export const POSTS = [
  {
    imageUrl:
      "https://scontent.ffjr8-1.fna.fbcdn.net/v/t39.30808-6/325732260_1826479301052456_7311052362684288023_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=y3lO7NY1R6wAX_DI5hF&_nc_ht=scontent.ffjr8-1.fna&oh=00_AfB1nlZnbCY93N9OpYwE_roC02p6jk8r_13LC4Wl7vu6OQ&oe=63EF73B8",
    user: USERS[0].user,
    likes: 7870,
    caption: "What's on your mind?",
    profilePicture: USERS[0].image,
    comments: [
      {
        user: "Sample User",
        comment: "In my mind is you.",
      },
      {
        user: "Sample User 2",
        comment: "FOOOOOD!",
      },
    ],
  },
  {
    imageUrl:
      "https://scontent.ffjr8-1.fna.fbcdn.net/v/t39.30808-6/327477287_834855674279864_792298099214475155_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=SxEBDOsWNOoAX8HMavl&_nc_ht=scontent.ffjr8-1.fna&oh=00_AfBBBLB0f4oCCSco_7BR-XcNMZSjkgIvSr7lCY7f9kG0NQ&oe=63F14822",
    user: USERS[1].user,
    likes: 7870,
    caption: "What's on your mind?",
    profilePicture: USERS[1].image,
    comments: [
      {
        user: "Sample User",
        comment: "In my mind is you.",
      },
      {
        user: "Sample User 2",
        comment: "FOOOOOD!",
      },
    ],
  },
  {
    imageUrl:
      "https://scontent.ffjr8-1.fna.fbcdn.net/v/t39.30808-6/329139381_617762140160371_5498031233122973529_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=yrGw4fk4148AX8uxRb2&_nc_ht=scontent.ffjr8-1.fna&oh=00_AfBcLZBBYrJ47gmVs_tqJPGl2vnKIlb-p1xJOOHlKySVPw&oe=63F0DE70",
    user: USERS[2].user,
    likes: 7870,
    caption: "What's on your mind?",
    profilePicture: USERS[2].image,
    comments: [
      {
        user: "Sample User",
        comment: "In my mind is you.",
      },
      {
        user: "Sample User 2",
        comment: "FOOOOOD!",
      },
    ],
  },
  {
    imageUrl:
      "https://scontent.ffjr8-1.fna.fbcdn.net/v/t39.30808-6/317611958_5586316071464280_8471243420895170387_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=6vhVtdFUac8AX9F3fg6&_nc_ht=scontent.ffjr8-1.fna&oh=00_AfC5QDfs-Xaa8OgWZN3vYF277nF4AlY0Tye_Gt3Bnm8Iow&oe=63F13A4B",
    user: USERS[2].user,
    likes: 7870,
    caption: "What's on your mind?",
    profilePicture: USERS[2].image,
    comments: [
      {
        user: "Sample User",
        comment: "In my mind is you.",
      },
      {
        user: "Sample User 2",
        comment: "FOOOOOD!",
      },
    ],
  },
  {
    imageUrl:
      "https://scontent.ffjr8-1.fna.fbcdn.net/v/t39.30808-6/315972071_5545187525577135_7177553208287037396_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=topee2CbHTsAX-b56sp&_nc_ht=scontent.ffjr8-1.fna&oh=00_AfAxf5fexFRxhZBczXM3sADPzGNq8-npIABoYNh-i_7hsg&oe=63F07850",
    user: USERS[2].user,
    likes: 7870,
    caption: "What's on your mind?",
    profilePicture: USERS[2].image,
    comments: [
      {
        user: "Sample User",
        comment: "In my mind is you.",
      },
      {
        user: "Sample User 2",
        comment: "FOOOOOD!",
      },
    ],
  },
];

export const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676446842/RAKtherm/like_tmahuq.png",

  },
  {
    name: "Comment",
    imageUrl: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676446843/RAKtherm/comment_ybln3o.png",

  },
  {
    name: "Share",
    imageUrl: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676446843/RAKtherm/share_qtuokf.png",

  },
  {
    name: "Save",
    imageUrl: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676446842/RAKtherm/save_eqj5ag.png",

  },
  {
    name: "like-small",
    imageUrl: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676461411/RAKtherm/like_omai9p.png",

  },

]