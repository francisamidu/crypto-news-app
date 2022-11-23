import {
  StyledImage as Image,
  StyledView as View,
  StyledText as Text,
} from '../styles/theme';
import React from 'react';
import {News as INews} from '../interfaces';
import {Grid, Row, Col} from 'react-native-easy-grid';

type NewsProps = {
  news: INews;
};
const NewsCard = ({
  news: {id, image, title, source, publishedAt},
}: NewsProps) => {
  return (
    <View className="py-2 border-b-[1px] border-gray-50">
      <Grid>
        <Row size={80}>
          <Col size={70}>
            <Text textType="bold" className="text-slate-800">
              {title}
            </Text>
          </Col>
          <Col size={30}>
            <Image source={{uri: image}} className="rounded w-full h-full" />
          </Col>
        </Row>
        <Row size={20}>
          <View className="flex-row items-center justify-between my-1 w-1/2">
            <Text className="text-gray-500 text-sm">{source}</Text>
            <Text className="text-gray-500 text-sm -mt-2">.</Text>
            <Text className="text-gray-500">{String(publishedAt)}</Text>
          </View>
        </Row>
      </Grid>
    </View>
  );
};

export default NewsCard;
