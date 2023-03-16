import React from "react";
import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 16px;
//   max-width: 600px;
//   margin: 16px;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   font-weight: 600;
//   margin: 0;
// `;

// const Subtitle = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
//   margin: 8px 0 16px;
// `;

// const List = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 16px;
//   font-weight: 400;
//   margin-bottom: 8px;
// `;

// const Label = styled.span`
//   font-weight: 500;
//   margin-right: 8px;
// `;

// const Value = styled.span`
//   font-weight: 400;
// `;

// const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 16px;
// `;

const CoinInfo = ({ coin }) => {
  const {
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    market_cap,
    circulating_supply,
    max_supply,
    image,
  } = coin;

  // display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   font-size: 16px;
  //   font-weight: 400;
  //   margin-bottom: 8px;
  return (
    <div className="flex flex-col items-center bg-[#fff] rounded-lg shadow-3xl p-4 m-4 max-w-3xl border">
      <img src={image} alt={name} className="max-w-full h-auto mb-4" />
      <h2 className="text-base font-semibold m-0">
        {name} ({symbol.toUpperCase()})
      </h2>
      <h3 className="text-lg font-medium mt-2 mx-0 mb-4">
        Current Price: ${current_price.toLocaleString()}
      </h3>
      <ul className="list-none m-0 p-0">
        <li className="flex justify-between items-center text-base font-normal mb-2">
          <span className="font-medium mr-2">24h Price Change:</span>
          <span className="font-normal">
            {price_change_percentage_24h.toFixed(2)}%
          </span>
        </li>
        <li className="flex justify-between items-center text-base font-normal mb-2">
          <span className="font-medium mr-2 whitespace-nowrap">
            Total Volume:
          </span>
          <span className="font-normal">${total_volume.toLocaleString()}</span>
        </li>
        <li className="flex justify-between items-center text-base font-normal mb-2">
          <span className="font-medium mr-2 whitespace-nowrap">
            Market Cap:
          </span>
          <span className="font-normal">${market_cap.toLocaleString()}</span>
        </li>
        <li className="flex justify-between items-center text-base font-normal mb-2">
          <span className="font-medium mr-2 whitespace-nowrap">
            Circulating Supply:
          </span>
          <span className="font-normal">
            {circulating_supply.toLocaleString()}
          </span>
        </li>
        <li className="flex justify-between items-center text-base font-normal mb-2">
          <span className="font-medium mr-2 whitespace-nowrap">
            Max Supply:
          </span>
          <span className="font-normal">
            {max_supply ? max_supply.toLocaleString() : "N/A"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CoinInfo;
