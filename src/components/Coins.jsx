import { connect } from "react-redux";
import { fetchCoinData } from "../redux/action";
import { useEffect } from "react";
import CoinInfo from "./CoinInfo";
import Error from "./Error";

function Coin({ coinData, error, fetchCoinData }) {
  useEffect(() => {
    // Call the wrapper API function with the desired parameters
    fetchCoinData({
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    });
  }, []);
  console.log(coinData);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="">
      <div className=" w-full ">
        <p className="heading">Crypto Coin Data</p>
      </div>
      <div className="flex  w-full overflow-x-scroll">
        {coinData.map((coin) => (
          <>
            <CoinInfo coin={coin} />
          </>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coinData: state.coinData,
    error: state.error,
  };
};

const mapDispatchToProps = {
  fetchCoinData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
