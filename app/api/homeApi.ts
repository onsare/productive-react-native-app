export const getHomepageData = (): Promise<HomepageData> => {
  return new Promise(resolve => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const data: HomepageData = {
        components: [
          {
            type: 'carousel',
            data: generateCarouselData(),
          },
          {
            type: 'banner',
            data: generateBannerData(),
          },
          {
            type: 'data',
            data: generateDataComponent(),
          },
        ],
      };

      resolve(data);
    }, 1000);
  });
};

const generateCarouselData = (): CarouselItem[] => {
  return [
    {
      title: 'Eco99fm',
      url: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
      description:
        'We built an innovative design and a modern user experience. Something reminiscent of an overseas software product experience.',
    },
    {
      title: 'Digital Studio',
      url: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
      description:
        'We built an innovative design and a modern user experience. Something reminiscent of an overseas software product experience.',
    },
    {
      title: 'Get In',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Get It is not a leading application in the field of events. The company hired us to enter the American and international market, and produce a system that can support a large number of users.',
    },
  ];
};

const generateBannerData = (): BannerItem[] => {
  return [
    {
      text: 'View Offers',
      image: require('../assets/banner-bg-1.png'),
      action: 'highlightAction',
      buttonText: '',
    },
    {
      text: 'View Offers',
      image: require('../assets/banner-bg-2.png'),
      action: 'highlightAction',
      buttonText: '',
    },
    {
      text: 'View Offers',
      image: require('../assets/unsplash-banner.jpg'),
      action: 'highlightAction',
      buttonText: '',
    },
  ];
};

const generateDataComponent = (): DataComponentItem[] => {
  return [
    {
      username: 'Denis Onsare',
      image: require('../assets/client-2.png'),
      action: 'highlightAction',
      excerpt:
        "Productive's story begins with a great love for technology. Just as a sculptor loves to sculpt, as a poet loves to write songs - We love creating technological solutions that make people's lives better. Productives story begins with a great love for technology. Just as a sculptor loves to sculpt, as a poet loves to write songs - We love creating technological solutions that make people's lives better.",
    },
  ];
};

interface CarouselItem {
  title: string;
  url: string;
  description: string;
}

interface BannerItem {
  image: string;
  text: string;
  buttonText: string;
  action: string;
}

interface DataComponentItem {
  image: string;
  username: string;
  action: string;
  excerpt: string;
}

interface HomepageData {
  components: {
    type: string;
    data: CarouselItem[] | BannerItem[] | DataComponentItem[];
  }[];
}
