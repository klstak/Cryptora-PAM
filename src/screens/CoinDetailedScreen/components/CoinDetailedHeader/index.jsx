import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinDetailedHeader = (props) => {
  const { image, symbol, marketCapRank } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={24} color="black" onPress={() => navigation.navigate("Home")} />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 30, height: 30 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>#{marketCapRank}</Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="black" />
    </View>
  );
};

export default CoinDetailedHeader;
