import createIcon from './lib/create-icon-set';

export const AntDesign = createIcon(require('./glyphmaps/AntDesign.json'), 'AntDesign');
export const Entypo = createIcon(require('./glyphmaps/Entypo.json'), 'Entypo');
export const EvilIcons = createIcon(require('./glyphmaps/EvilIcons.json'), 'EvilIcons');
export const Feather = createIcon(require('./glyphmaps/Feather.json'), 'Feather');
export const FontAwesome = createIcon(require('./glyphmaps/FontAwesome.json'), 'FontAwesome');
export const Foundation = createIcon(require('./glyphmaps/Foundation.json'), 'Foundation');
export const Ionicons = createIcon(require('./glyphmaps/Ionicons.json'), 'Ionicons');
export const MaterialCommunityIcons = createIcon(require('./glyphmaps/MaterialCommunityIcons.json'), 'MaterialCommunityIcons');
export const MaterialIcons = createIcon(require('./glyphmaps/MaterialIcons.json'), 'MaterialIcons');
export const Octicons = createIcon(require('./glyphmaps/Octicons.json'), 'Octicons');
export const SimpleLineIcons = createIcon(require('./glyphmaps/SimpleLineIcons.json'), 'SimpleLineIcons');
export const Zocial = createIcon(require('./glyphmaps/Zocial.json'), 'Zocial');

// ────────────────────────────────────────────────────────────────────────────────

import React, { Component } from 'react';

class Icon extends Component{
  render(){
    let Icon = null;
    switch (this.props.font) {
      case 'AntDesign': Icon = AntDesign; break;
      case 'Entypo': Icon = Entypo; break;
      case 'EvilIcons': Icon = EvilIcons; break;
      case 'Feather': Icon = Feather; break;
      case 'FontAwesome': Icon = FontAwesome; break;
      case 'Foundation': Icon = Foundation; break;
      case 'Ionicons': Icon = Ionicons; break;
      case 'MaterialIcons': Icon = MaterialIcons; break;
      case 'MaterialCommunityIcons': Icon = MaterialCommunityIcons; break;
      case 'Octicons': Icon = Octicons; break;
      case 'Zocial': Icon = Zocial; break;
      case 'SimpleLineIcons': Icon = SimpleLineIcons; break;
      default: Icon = Ionicons; break;
    }
    return(
      <Icon
        name={this.props.name}
        color={this.props.color ? this.props.color : 'grey'}
        size={this.props.size ? this.props.size : 30}
        style={this.props.style}
      />
    );
  }
}

export default Icon;