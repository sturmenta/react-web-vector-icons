import React from 'react';

import glyphMap from '../glyphmaps/FontAwesome5Free.json';
import metadata from '../glyphmaps/FontAwesome5Free_meta.json';
import createIconSet from './create-icon-set';

const createFA5iconSet = () => {
  const metadataKeys = Object.keys(metadata);

  const fallbackFamily = (glyph) => {
    for (let i = 0; i < metadataKeys.length; i += 1) {
      const family = metadataKeys[i];
      if (metadata[family].indexOf(glyph) !== -1) {
        return family === 'brands' ? 'brand' : family;
      }
    }
    return 'regular';
  };

  const glyphValidator = (glyph, style) => {
    const family = style === 'brand' ? 'brands' : style;
    if (metadataKeys.indexOf(family) === -1) return false;
    return metadata[family].indexOf(glyph) !== -1;
  };

  const styleNames = ['regular', 'brand', 'solid'];

  const iconSets = {
    regular: createIconSet(glyphMap, 'FontAwesome5Regular'),
    brand: createIconSet(glyphMap, 'FontAwesome5Brands'),
    solid: createIconSet(glyphMap, 'FontAwesome5Solid'),
  };

  const styleFromProps = (props) =>
    Object.keys(props).reduce(
      (result, propName) =>
        styleNames.indexOf(propName) !== -1 && props[propName] === true
          ? propName
          : result,
      'regular'
    );

  const getIconSetForProps = (props) => {
    const { name } = props;
    const style = styleFromProps(props);
    if (glyphValidator(name, style)) return iconSets[style];
    const family = fallbackFamily(name);
    return iconSets[family];
  };

  const reduceProps = (props) =>
    Object.keys(props).reduce(
      (acc, prop) =>
        styleNames.indexOf(prop) === -1
          ? {
              ...acc,
              [prop]: props[prop],
            }
          : acc,
      {}
    );

  return (props) => {
    const SelectedIconSet = getIconSetForProps(props);
    return <SelectedIconSet {...reduceProps(props)} />;
  };
};

export default createFA5iconSet;
