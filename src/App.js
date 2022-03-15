import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [btcChange, setBtcChange] = useState(0);
  const onChange = (e) => {
    setBtcChange(e.target.value);
  };

  return (
    <div>
      <h1>Coins {loading ? "" : `${coins.length}💸`}</h1>
      {loading ? (
        <strong>Loading..</strong>
      ) : (
        <>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <br />
          <br />
          <form>
            <label htmlFor="btc">
              얼만큼의 BTC를 살 수 있을까요?{" "}
              {btcChange !== 0
                ? `${btcChange / coins[0].quotes.USD.price} BTC`
                : "🤔"}
            </label>
            <br />
            <input
              onChange={onChange}
              value={btcChange}
              id="btc"
              type="number"
            />
          </form>
        </>
      )}
    </div>
  );
}

export default App;
