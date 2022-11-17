import React from 'react';
import {StyledSafeAreaView as SafeAreaView} from '../styles/theme';
import {NewsCard} from '../components';
import {Grid, Row} from 'react-native-easy-grid';

const Home = () => {
  return (
    <SafeAreaView className="w-screen h-screen">
      <Grid>
        <Row size={100}>
          <NewsCard />
        </Row>
      </Grid>
    </SafeAreaView>
  );
};
export default Home;
