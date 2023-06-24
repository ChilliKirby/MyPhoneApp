import { View, Button, Pressable, Text } from 'react-native';
import { styles } from '../styles';

const GeneralButton = ({ title, handleClick }) => {
    return (

        <View
            style={styles.generalButtonView}
        >
            <Pressable
                // onPress={() => handleClick()}
                onPress={handleClick}
            >
                <Text 
                    style={styles.buttonText}
                    
                >
                    {title}
                </Text>
            </Pressable>
        </View>
    )

}

export default GeneralButton;