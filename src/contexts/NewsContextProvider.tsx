import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {AirdropNewsResponse, AllNews} from '../../types';
import {
  formatDateSimple,
  formatCryptoNews,
  uid,
  formatCryptoPrice,
} from '../helpers';
import {fetchAirdrops, fetchNews, fetchCryptoPrices} from '../services/Api';

import imagePaths from '../shared/images';
const {image1, image2, image3, image4, image5, image6, image7, image8, image9} =
  imagePaths;

const NewsContext = createContext<{
  news: AllNews;
  setNews: Dispatch<SetStateAction<AllNews>>;
  fetchNews?: () => void;
  setParam: Dispatch<SetStateAction<string>>;
  param: string;
}>({
  news: {
    airdrops: [],
    bitcoinNews: [],
    cryptoNews: [],
    cryptoPrices: [],
    techNews: [],
  },
  param: '',
  setNews: () => {},
  fetchNews: () => {},
  setParam: () => {},
});

export const NewsContextProvider = ({
  children,
}: Partial<PropsWithChildren<ReactNode>>) => {
  const [news, setNews] = useState<AllNews>({
    airdrops: [],
    bitcoinNews: [],
    cryptoNews: [],
    cryptoPrices: [],
    techNews: [
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image1,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image2,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image3,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image4,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image5,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image6,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image7,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image8,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
      {
        id: uid(),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate libero adipisci, tempore illo quisquam qui itaque consequatur accusamus commodi a quo asperiores vero rerum animi tempora harum consequuntur esse.',
        image: image9,
        publishedAt: formatDateSimple(new Date()),
        source: 'CBS News',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore delectus amet esse ab aut commodi molestias',
        url: 'www.cbs.com/some-random-news-url',
      },
    ],
  });
  const [param, setParam] = useState('crypto');
  const queryNews = async () => {
    try {
      switch (param) {
        case 'airdrop': {
          const airdrops = await fetchAirdrops();
          setNews({
            ...news,
            airdrops,
          });
          break;
        }
        case 'bitcoin': {
          const bitcoinTempNews = await fetchNews(param);
          const bitcoinNews = bitcoinTempNews?.map(item =>
            formatCryptoNews(item),
          );
          setNews({
            ...news,
            bitcoinNews,
          });
          break;
        }
        case 'crypto-prices': {
          const temp = await fetchCryptoPrices();
          const cryptoPrices = temp?.map(item => formatCryptoPrice(item));
          setNews({
            ...news,
            cryptoPrices,
          });
          break;
        }
        case 'tech-news': {
          const techTempNews = await fetchNews(param);
          const techNews = techTempNews?.map(item => formatCryptoNews(item));
          setNews({
            ...news,
            techNews,
          });
          break;
        }
        default: {
          const techTempNews = await fetchNews(param);
          const techNews = techTempNews?.map(item => formatCryptoNews(item));
          setNews({
            ...news,
            techNews,
          });
          break;
        }
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log(Object.values(news).flat().length);
    // queryNews();
    return () => {
      setNews({
        airdrops: [],
        bitcoinNews: [],
        cryptoNews: [],
        cryptoPrices: [],
        techNews: [],
      });
    };
  }, [param]);

  return (
    <NewsContext.Provider value={{news, param, setNews, setParam}}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
