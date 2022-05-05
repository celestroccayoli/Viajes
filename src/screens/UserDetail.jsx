import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Markdown from '@flowchase/react-native-markdown-display';
import Picture from '../Components/Picture';


const UserDetail = ({ route, navigation }) => {
    const { nombre, apellido, email, imagen , imagen64, cargo, institucion, bio } = route.params.detail;
    return (
        <View style={styles.container} size="large">
            <View style={styles.header}>
                <Picture img={imagen64 ? `data:image/jpg;base64,${imagen64}` : imagen} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{nombre} {apellido}</Text>
                    <Text style={styles.subtitle}>{cargo} en {institucion}</Text>
                </View>
            </View>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{height: '100%'}}>
                <View style={styles.bio}>
                    <Markdown style={ stylesMarkdown }>
                        {bio}
                    </Markdown>
                    <Text style={styles.contact}>{email}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserDetail

const stylesMarkdown = {
    body: {
        color: "#616161",
        fontFamily: "foco-regular",
        fontSize: 15
    },
    strong: {
        fontFamily: "foco-bold",
    },
    paragraph: {
        marginTop: 2,
        marginBottom:5
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingVertical: 5,
    },
    content: {
        width: "65%",
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    title: {
        fontFamily: "foco-bold",
        textAlign: "left",
        color: "#032D77",
        fontSize: 20,
    },
    subtitle: {
        fontFamily: "foco-regular",
        color: "#616161",
        textAlign: "left",
        fontSize: 18
    },
    bio: {
        padding: 12,
        color: "#616161",
        marginTop: 20,
        justifyContent:"space-between",
        minHeight: "55%"
    },
    description: {
        color: "#616161",
    },
    contact: {
        color: "#CB082D",
        fontSize: 12,
        fontWeight: "bold",
        textAlign:"right",
        marginVertical: 20
    },
    box: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 2,
        alignItems: "center",
        position: "absolute",
        bottom: 60,
        left: 50,
    }
})