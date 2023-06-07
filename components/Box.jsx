import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import { styles } from "../styles.js";


const Box = ({ children }) => {
    return(
        <View style={styles.gridBox}>
            <Text style={styles.gridText}>{children}</Text>
        </View>
    )
};

Box.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Box;