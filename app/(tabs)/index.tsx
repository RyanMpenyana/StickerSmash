import { Text, View,  StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const placeHolder = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolder}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='choose photo'/>
        <Button  label='use this photo'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer : {
    flex : 1
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
