import React, {useEffect, useState} from 'react';
import {
  StyledSafeAreaView as SafeAreaView,
  StyledView as View,
} from '../styles/theme';
import {Header, Loader, NewsCard, Tabs} from '../components';
import {Grid, Row} from 'react-native-easy-grid';
import {StyledFlashList as FlashList} from '../styles/theme';
import {useNews} from '../contexts/NewsContextProvider';
import {ListRenderItem} from '@shopify/flash-list';
import {News as INews} from '../interfaces';
import {AllNews} from '../../types';

const Home = () => {
  const {news, param} = useNews();
  const [localNews, setLocalNews] = useState<AllNews>({
    airdrops: [],
    bitcoinNews: [],
    cryptoNews: [],
    cryptoPrices: [],
    techNews: [],
  });
  const [isSet, setIsSet] = useState(false);
  useEffect(() => {
    setLocalNews(news);
    const temp = Object.values(news).flat(Infinity).length;
    if (temp) setIsSet(true);
  }, [news]);
  const renderItem: ListRenderItem<INews> = ({item}) => (
    <NewsCard news={item} key={item.id} />
  );
  const renderSection = () => {
    switch (param) {
      case 'airdrop': {
      }
      case 'bitcoin': {
        return (
          <FlashList
            contentContainerStyle={{
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            estimatedItemSize={50}
            renderItem={renderItem}
            data={localNews.bitcoinNews}
          />
        );
      }
      case 'crypto-prices': {
      }
      case 'tech-news': {
        return (
          <FlashList
            contentContainerStyle={{
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            estimatedItemSize={50}
            renderItem={renderItem}
            data={localNews.techNews}
          />
        );
      }
      default: {
        return (
          <FlashList
            contentContainerStyle={{
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            estimatedItemSize={50}
            renderItem={renderItem}
            data={localNews.cryptoNews}
          />
        );
      }
    }
  };
  return (
    <SafeAreaView className="w-screen h-screen">
      <Grid>
        <Row size={25}>
          <Header />
        </Row>
        <Row size={75}>
          <View className="w-full">
            <Tabs />
            {isSet ? renderSection() : <Loader />}
          </View>
        </Row>
      </Grid>
    </SafeAreaView>
  );
};
export default Home;
