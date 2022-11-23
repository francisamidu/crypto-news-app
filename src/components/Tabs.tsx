import {
  StyledTouchable as Touchable,
  StyledScrollView as ScrollView,
  StyledView as View,
  StyledText as Text,
} from '../styles/theme';
import React, {useState} from 'react';
import {uid} from '../helpers';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    {
      active: true,
      id: uid(),
      text: 'Bitcoin',
    },
    {
      active: false,
      id: uid(),
      text: 'Crypto',
    },
    {
      active: false,
      id: uid(),
      text: 'Crypto Prices',
    },
    {
      active: false,
      id: uid(),
      text: 'Technology',
    },
  ]);
  const handlePress = (id: string) => {
    const newTabs = tabs.map(tab => {
      if (tab.id === id) {
        return {
          ...tab,
          active: true,
        };
      }
      return {
        ...tab,
        active: false,
      };
    });
    setTabs(newTabs);
  };
  return (
    <View className="w-full rounded-t-md bg-white border-b-[1px] border-gray-300">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{
          paddingHorizontal: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginHorizontal: 2,
          borderRadius: 20,
        }}>
        {tabs.map(tab => (
          <View
            key={tab.id}
            className={`capitalize p-2 ${
              tab.active
                ? 'transition-all duration-200 text-[#0762A7] border-b-[1px] border-[#0762A7]'
                : ''
            }`}
            onTouchEnd={() => handlePress(tab.id)}>
            <Text className={`text-sm ${tab.active ? 'text-[#0762A7]' : ''}`}>
              {tab.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tabs;
