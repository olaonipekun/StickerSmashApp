import { StyleSheet, Image } from "react-native";


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
});


const ImageViewer = ({placeholderImageSource}) => {
  return (
    <Image source={placeholderImageSource} style={styles.Image} />
  )
}

export default ImageViewer