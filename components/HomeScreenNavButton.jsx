import { PropTypes } from "prop-types";
import { View, Text, Pressable } from "react-native";
import { styles } from "../styles.js";


const HomeScreenNavButton = ({ navigation, title }) => {
    return (
        <View style={styles.gridButtonView}>
            
            <Pressable
                onPress={() => { navigation.navigate(title) }}
                
            >
                <View>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
                </View>
            </Pressable>
            
        </View>
    )
};

HomeScreenNavButton.propTypes = {
    title: PropTypes.node.isRequired,
};

export default HomeScreenNavButton;