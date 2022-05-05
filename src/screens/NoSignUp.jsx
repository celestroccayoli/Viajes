import { SignUp } from 'aws-amplify-react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';

class NoSignUp extends SignUp {
    constructor(props) {
        super(props);

        this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];

        this.gotoSignIn = this.gotoSignIn.bind(this);
    }

    gotoSignIn() {
        this.props.onStateChange('signIn',{});
    }
    render() {

        if(this.props.authState!=='signUp') return null;

        return (
        <View style={this.props.theme.container}>
            <View>
                <View style={styles.block}>
                    <Text>Para darse de alta como usuario comuníquese con Amcham Argentina.</Text>
                </View>
                <View style={styles.block}>
                    <Pressable onPress={this.gotoSignIn}>
                        <Text style={this.props.theme.sectionFooterLink}>iniciar Session</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        )
    }
}

export default NoSignUp;

const styles = StyleSheet.create({
    block : {
        padding: 10,
        marginBottom: 20
    }
})