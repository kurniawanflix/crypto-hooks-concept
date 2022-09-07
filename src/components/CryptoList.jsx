import React from "react";
import { useEffect, useState } from "react";
import { getListCryptos } from "../services/localstorage";
import { CryptoItem } from "./CryptoItem";

export const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    setCryptos(getListCryptos());
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center">Manage Crypto</h1>

      {cryptos.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Simbol</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((crypto) => (
                <CryptoItem
                  crypto={crypto}
                  key={crypto.id}
                  setCryptos={setCryptos}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No Crypto</h3>
      )}
    </div>
  );
};
