import React, { Component } from 'react';

export default function createIconSet(glyphMap, fontFamily) {
  class Icon extends Component {

    render() {
      const props = this.props;

      let glyph = props.name ? glyphMap[props.name] || '?' : '';
      if (typeof glyph === 'number') {
        glyph = String.fromCharCode(glyph);
      }

      let style = _([
        style = {
          fontSize: props.size ? props.size : 30,
          color: props.color ? props.color : 'grey',
        },
        props.style,
        {
          fontFamily: fontFamily,
          fontWeight: 'normal',
          fontStyle: 'normal',
        }
      ]);

      return (
        <i style={style}>
          {glyph}
        </i>
      );
    }
  }

  return Icon;
}

const _ = styles => {
  if(!styles) return {};
  if(styles.length){
    let temp = {};
    styles.map(i => Object.assign(temp, i));
    return temp;
  }
  return styles;
};