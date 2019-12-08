import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress, imageSource }) => {

return (
    <TouchableOpacity onPress={onPress} style={styles.viewSty}>
      <Image
        style={styles.imgSty}
        source={imageSource}
      />
    </TouchableOpacity>
  );
};

const styles = {
    imgSty: {
        width: 30,
        height: 30
    },   
    viewSty: {
        marginTop:60,
        marginLeft: 20
    }
};

export { ImageButton };
