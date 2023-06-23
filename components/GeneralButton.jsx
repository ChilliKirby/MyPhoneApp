import { View, Button, Pressable, Text } from 'react-native';
import { styles } from '../styles';

const GeneralButton = ({ title, onpress }) => {
    return (

        <View
            style={styles.generalButtonView}
        >
            <Pressable>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </Pressable>
        </View>
    )

}

export default GeneralButton;