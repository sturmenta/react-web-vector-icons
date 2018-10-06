# react-web-vector-icons
An adaptation of react-native-vector-icons for react-web

## Installation
 - Install npm package

```sh
npm i -S react-web-vector-icons
```

## Usage

 1 - Add css font-face for all fonts in your index.html file

```html
 <style> @font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(fonts/AntDesign.ttf) format('truetype')}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(fonts/EvilIcons.ttf) format('truetype')}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(fonts/Feather.ttf) format('truetype')}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(fonts/FontAwesome.ttf) format('truetype')}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5.ttf) format('truetype')}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(fonts/Ionicons.ttf) format('truetype')}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialIcons.ttf) format('truetype')}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(fonts/SimpleLineIcons.ttf) format('truetype')}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(fonts/Zocial.ttf) format('truetype')}</style>
```

2 - Add require of fonts for webpack in your index.js file

```javascript
require('react-web-vector-icons/fonts');
```

3 - Use

```javascript
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

<Icon
  name='tools'
  font='Entypo'
  color='green'
  size={20}
  // style={{}}
/>

<FontAwesome
  name='bell'
  color='white'
  size={30}
  // style={{}}
/>

<Feather
  name='award'
  color='#007ACC'
  size={40}
  // style={{}}
/>
```

[Example of use](https://github.com/sturmenta/react-web-vector-icons/tree/master/test)

### Note

The fonts FontAwesome5 and FontAwesome5Brands are not yet implemented, you are invited to make a pr if you want to use this fonts.

## Special thanks to: https://github.com/oblador

#### Gallery of icons -- https://oblador.github.io/react-native-vector-icons/

## License

MIT.

## Author

Nicolas Sturm -- sturmenta
