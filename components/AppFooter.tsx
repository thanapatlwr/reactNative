import React from 'react';
import { View, Text } from 'react-native';
import { stylesPractice} from '../styles/styles';

interface AppFooterProps {
  footerMessage: string;
}

const AppFooter = ({ footerMessage }:AppFooterProps):React.JSX.Element => {
  return (
    <View style={stylesPractice.footer}>
      <Text style={stylesPractice.footerText}>{footerMessage}</Text>
    </View>
  );
};

//
export default AppFooter;