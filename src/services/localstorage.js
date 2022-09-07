import uuid from "react-uuid";

export const getListCryptos = () => {
  if (!localStorage["cryptos"]) {
    localStorage["cryptos"] = "[]";
  }

  let cryptos = localStorage["cryptos"];
  cryptos = JSON.parse(cryptos);
  return cryptos;
};

export const getCryptoById = (id) => {
  const cryptos = getListCryptos();
  const crypto = cryptos.find((crypto) => crypto.id === id);
  return crypto;
};

export const addCrypto = (crypto) => {
  const cryptos = getListCryptos();
  cryptos.push({ id: uuid(), ...crypto });
  localStorage["cryptos"] = JSON.stringify(cryptos);
};

export const editCrypto = (id, newCrypto) => {
  let cryptos = getListCryptos();
  cryptos = cryptos.filter((crypto) => crypto.id !== id);
  cryptos.push(newCrypto);
  localStorage["cryptos"] = JSON.stringify(cryptos);
};

export const deleteCrypto = (id) => {
  let cryptos = getListCryptos();
  cryptos = cryptos.filter((crypto) => crypto.id !== id);
  localStorage["cryptos"] = JSON.stringify(cryptos);
};
