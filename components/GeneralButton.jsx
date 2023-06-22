import { View, Button, Pressable, Text } from 'react-native';
import { styles } from '../styles';

const GeneralButton = ({title}) => {
return (

    <View
        style={styles.generalButton}
        
        
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