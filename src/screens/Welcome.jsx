import { SignIn } from 'aws-amplify-react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';

class Welcome extends SignIn {
    constructor(props) {
        super(props);

        this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
        this.state = {
            username: null,
            password: null,
            error: null,
            hasPendingSignIn: false,
        };

        this.gotoSignIn = this.gotoSignIn.bind(this);
        this.checkContact = this.checkContact.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    gotoSignIn() {
        console.log(this.props);
        this.props.onStateChange('forgotPassword',{});
    }
    render() {

        if(this.props.authState==='signIn') return null;

        return (
        <View>
            <View>
                <Text>Usuario</Text>
            </View>

            <View>
                <Text>Clave</Text>
            </View>
            <View>
                <Pressable onPress={this.gotoSignIn}>
                    <Text>Recuperar clave</Text>
                </Pressable>
            </View>
        </View>
        )
    }
}

export default Welcome;