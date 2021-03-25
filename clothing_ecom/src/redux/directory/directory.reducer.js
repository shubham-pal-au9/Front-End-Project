const INITIAL_STATE = {
  sections: [
    {
      title: "jeans",
      imageUrl:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 1,
      linkUrl: "shop/jeans",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "accessories",
      imageUrl:
        "https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 4,
      linkUrl: "shop/accessories",
    },
    {
      title: "shirts",
      imageUrl:
        "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 5,
      linkUrl: "shop/shirts",
    },
    {
      title: "t-shirts",
      imageUrl:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      id: 6,
      linkUrl: "shop/tshirts",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      size: "large",
      id: 7,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=426",
      size: "large",
      id: 8,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
