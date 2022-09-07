import React from "react";
import { useNavigate } from "react-router-dom";
import { getListCryptos, deleteCrypto } from "../services/localstorage";

export const CryptoItem = ({ crypto, setCryptos }) => {
  const { id, no, name, simbol, price } = crypto;
  const navigate = useNavigate();

  const removeCrypto = () => {
    deleteCrypto(id);
    setCryptos(getListCryptos());
  };

  return (
    <tr className="table-primasry">
      <th>{no}</th>
      <th>{name}</th>
      <th>{simbol}</th>
      <th>{price}</th>
      <th>
        <div className="d-flex gap-3">
          <span
            type="button"
            className="badge bg-success"
            onClick={() => navigate(`/edit-crypto/${id}`)}
          >
            Edit
          </span>
          <span
            type="button"
            className="badge bg-danger"
            onClick={() => removeCrypto()}
          >
            Delete
          </span>
        </div>
      </th>
    </tr>
  );
};
