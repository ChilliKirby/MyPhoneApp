import { PropTypes } from "prop-types";
import { View, Text, Button, Pressable } from "react-native";
import { styles } from "../styles.js";


const HomeScreenNavButton = ({ navigation, title }) => {
    return (
        <View style={styles.gridBox}>
            <Button 
                title={title}
                onPress={() => {
                    navigation.navigate(title);
                }}
                color="#BF40BF"
                height="200px"
                >

            </Button>
        </View>
    )
};

// Box.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default HomeScreenNavButton;