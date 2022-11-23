export type CryptoNewsResponseItem = {
  name: string;
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  description: string;
  provider: [
    {
      name: string;
      image: {
        thumbnail: {
          _type: string;
          contentUrl: string;
        };
      };
    },
  ];
  datePublished: Date;
};
