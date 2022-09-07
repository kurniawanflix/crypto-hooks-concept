import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addCrypto, getCryptoById, editCrypto } from "../services/localstorage";
import { useForm } from "./../hooks/useForm";
import { useState, useEffect } from "react";

export const CryptoForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    no: "",
    name: "",
    simbol: "",
    price: "",
  });

  useEffect(() => {
    if (id) {
      const crypto = getCryptoById(id);
      setForm(crypto);
    }
  }, [id]);

  const handleSubmit = (c) => {
    c.preventDefault();
    id ? editCrypto(id, inputValues) : addCrypto(inputValues);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div>
      {/* Header */}
      <div className="d-flex my-5 justify-content-between">
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1>{id ? "Edit" : "Create"} Crypto</h1>
        <div />
      </div>

      {/* Form */}
      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="no">
              No
            </label>
            <input
              type="text"
              id="no"
              name="no"
              value={inputValues.no}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter No ..."
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Crypto Name ..."
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="simbol">
              Simbol
            </label>
            <input
              type="text"
              id="simbol"
              name="simbol"
              value={inputValues.simbol}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Crypto Simbol ..."
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={inputValues.price}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Cypto Price ..."
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary ">
              Add Crypto
            </button>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success" role="alert">
            <strong>Well done!</strong> added a new Crypto.
          </div>
        </div>
      )}
    </div>
  );
};
