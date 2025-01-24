import { View, Text} from "react-native";

export default function ProductListItem({ product }: any) {

    return (
        <View>
            <Text  style={{fontSize : 30}} >{product.name}</Text>
        </View>
    );
}