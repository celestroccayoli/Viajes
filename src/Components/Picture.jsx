import { StyleSheet, Image, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as FileSystem from "expo-file-system";
import { Storage } from 'aws-amplify';


const Picture = ({img, style}) => {
    const [imagen, setImagen] = useState(false)
    useEffect(() => {
        const loadData = async () => {
            try {
                const file = await Storage.get(`images/${img}`, {
                    level: "public",
                    expires: 60 * 24  
                });
                setImagen(file)
            } catch (error) {
                console.log("Error retrieving posts", error);
            }
        }
        if (img !==null && img !=='' && !img.includes('http') && !img.includes('base64')) {
          loadData();
        } else if (img !=='') {
          setImagen(img)
        }
        return () => {
          //second
        }
    }, [img])

    if(!imagen) return <View style={{...styles.image, ...style}}></View>

  return (
    <Image source={{uri: imagen}} style={{...style}} />
  )
}

export default Picture

const styles = StyleSheet.create({
  image:{
    backgroundColor: "#EAEAEA",
  }
})