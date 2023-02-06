const initialState = {
    // currentRestaurant: {
    //   id: 0,
    //   name : '',
    //   description: '',
    //   address: '',
    //   phone: '',
    //   workTime: {
    //       start: 0,
    //       end: 0,
    //   },
    //   rating: 0,
    //   averageCheck: 0,
    //   cuisineType: [],
    //   reviews : [],
    //   images: [],
    //   menuImg : '',
    //   tag: [],
    //   city: '',
    // },
    restaurants: [],
    user: {
        id: 0,
        isAuthorized: false,
        name: '',
        email: '',
        phone: 0,
        favorites: [],
    },
    currentCity: 'Minsk',
    cities: ['Minsk', 'Kazan'],
    language: '',
    theme: '',
};

export default initialState;
