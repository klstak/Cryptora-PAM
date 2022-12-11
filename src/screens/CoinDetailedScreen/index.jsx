import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ActivityIndicator } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getDetailedCoinData } from "../../services/requests";

const CoinDetailedScreen = () => {
  /**
  const [coin, setCoin] = useState(null);
  const route = useRoute();
  const {
    params: { coinId },
  } = route;
  const [loading, setLoading] = useState(false);

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchedCoinData = await getDetailedCoinData(coinId);
    setCoin(fetchedCoinData);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin) {
    return <ActivityIndicator size="large" />;
  }
   */

  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price, price_change_percentage_24h },
  } = Coin;

  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());

  useEffect(() => {
    const floatValue = parseFloat(coinValue) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  }, [coinValue]);

  useEffect(() => {
    const floatValue = parseFloat(usdValue) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  }, [coinValue]);

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailedHeader image={small} symbol={symbol} marketCapRank={market_cap_rank} />

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View style={{ backgroundColor: percentageColor, paddingHorizontal: 3, paddingVertical: 8, borderRadius: 5, flexDirection: "row" }}>
          <AntDesign name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"} size={13} color={"white"} style={{ alignSelf: "center", marginRight: 3 }} />
          <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Text></Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ alignSelf: "center" }}>{symbol.toUpperCase()}</Text>
          <TextInput style={styles.input} value={coinValue} keyboardType="numeric" onChangeText={setCoinValue} />
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ alignSelf: "center" }}>USD</Text>
          <TextInput style={styles.input} value={usdValue} keyboardType="numeric" onChangeText={setUsdValue} />
        </View>
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
