import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  currentPrice: {
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 15,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    fontSize: 17,
    fontWeight: "500",
  },
  chartContainer: {
    backgroundColor: "#ffbaba",
    padding: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    pading: 10,
    fontSize: 16,
  },
});

export default styles;
