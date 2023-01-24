import React from 'react';
import ReactDOM from 'react-dom';

import Icon, {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
} from '../../src';
require('../../fonts');

const Index = () => {
  return (
    <div>
      <FontAwesome5 name="circle" size={32} />
      <FontAwesome5 name="circle" size={32} solid />
      <FontAwesome5 name="cog" color="blue" size={32} />
      <FontAwesome5 name="stripe" color="blue" size={32} />
      <AntDesign name="book" color="blue" size={50} />
      <Entypo name="baidu" color="brown" size={50} />
      <EvilIcons name="heart" color="red" size={50} />
      <Feather name="github" color="green" size={50} />
      <FontAwesome name="plane" color="cyan" size={50} />
      <Foundation name="skull" color="black" size={50} />
      <Ionicons name="ios-flash" color="yellow" size={50} />
      <MaterialCommunityIcons name="bullseye-arrow" color="red" size={50} />
      <MaterialIcons name="extension" color="orange" size={50} />
      <SimpleLineIcons name="trophy" color="yellow" size={50} />
      <Octicons name="beaker" color="green" size={50} />
      <Zocial name="stackoverflow" color="orange" size={50} />
      <Icon name="stackoverflow" font="Zocial" color="black" size={100} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
