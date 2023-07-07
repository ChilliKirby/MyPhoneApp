import { ScrollView, Text, View } from 'react-native'
import { styles } from '../../styles';
import GeneralButton from "../../components/GeneralButton.jsx"

const ToDoItem = ({}) => {

    return (
        <ScrollView>
        <View >
        <Text style={styles.bigText    
    }

            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={2}

    //}
    >
            hi
        </Text>
        <Text style={styles.regularText}>
            description
        </Text>
        </View>
        <GeneralButton title="Delete List Item" handleClick={()=>{}
    }>

        </GeneralButton>
        </ScrollView>
    )
}

export default ToDoItem;