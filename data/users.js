import React from "react";

export const USERS = [
  {
    user: "Imran Haider",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    user: "Loraine Rubio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9jEYH65nY5iY7MnLyf0nI37rckjXldrVZw&usqp=CAU",
  },
  {
    user: "Zardron Pesquera",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPZxYwlGDwLfhkRcH-6zK9sTXxfrP1KYVcQ&usqp=CAU",
  },
  {
    user: "RAKtherm Admin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1K7pE-hHoHeCSxqZh0S_X5sRm0IQ-yG25w&usqp=CAU",
  },
  {
    user: "RAKtherm Admin",
    image:
      "https://res.cloudinary.com/dmbpo49ak/image/upload/v1676281955/RAKtherm/logo_cx5e0l.jpg",
  },
];