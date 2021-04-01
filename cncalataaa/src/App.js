import "./App.css";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedSampleId, setSelectedSampleId] = useState(0);
  const [orderDetails, setOrderDetails] = useState([]);
  const [rowToEditIndex, setRowToEditIndex] = useState(-1);

  let doorDelete = (index) => {
    let x = [...orderDetails];
    x.splice(index, 1);
    setOrderDetails(x);
  }

  let doorEdit = (index, e) => {
    setRowToEditIndex(index);
    if(index == rowToEditIndex) {
      setRowToEditIndex(-1);
    }
    
    let x = [...orderDetails];
    x[index] = e;
    setOrderDetails(x);
  }

  return (
    <div className="App">
      <div className="logo"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          var newOrderDetails = {};
          newOrderDetails["selectedSampleId"] = selectedSampleId;
          e.target.querySelectorAll(".doorDetails").forEach((element) => {
            newOrderDetails[element.id] = element.value;
            setOrderDetails([...orderDetails, newOrderDetails]);
          });
        }}

      >
        <div className="inputsContainer">
          <label>width : </label>
          <input className="doorDetails" id="width" type="number" min="0" placeholder="width" required></input>
          <label>height : </label>
          <input className="doorDetails" id="height" placeholder="height" type="number" min="0" required></input>
          <label>quantity : </label>
          <input className="doorDetails" onChange={(e) => e.target.value = Math.round(e.target.value)} id="quantity" placeholder="quantity" type="number" min="0" required></input>
          <label>sample types : </label>

          <ImagePicker
            images={[
              {
                url:
                  "https://bagongkia.github.io/react-image-picker/0e1abaf656c3367fc89f628f0d52ad11.jpg",
                id: 123,
              },
              {
                url:
                  "https://bagongkia.github.io/react-image-picker/0759b6e526e3c6d72569894e58329d89.jpg",
                id: 345,
              },
              {
                url:
                  "https://bagongkia.github.io/react-image-picker/eb0659e2eebacafff0601e1b93797d7c.jpg",
                id: 678,
              },
              {
                url:
                  "https://bagongkia.github.io/react-image-picker/eb0659e2eebacafff0601e1b93797d7c.jpg",
                id: 8,
              },
              {
                url:
                  "https://bagongkia.github.io/react-image-picker/eb0659e2eebacafff0601e1b93797d7c.jpg",
                id: 78,
              },
            ].map((image, i) => ({
              src: image.url,
              value: image.id,
              isSelected: i % 2 === 0,
              size: { height: 200, width: 200 },
            }))}

            onPick={(selectedImage) => {
              setSelectedSampleId(selectedImage.value);
            }}
          />

          <button type="submit">add to list</button>

          <table onChange={() => setOrderDetails(orderDetails)} id="ordersMeasurements" className="ordersMeasurements">
            <tr className="doorMeasurements">
              <th>Door number</th>
              <th>Door style</th>
              <th>Widh</th>
              <th>Height</th>
              <th>Quantity</th>
              <th>Save</th>
              <th>Delete</th>
            </tr>

            {orderDetails.map((e, index) => {
              return (
                <tr className="doorRow">
                  <td>{index + 1}</td>
                  <td>{rowToEditIndex === index? <input type="number" min="0" className="doorDetailsEdit" onChange={(newValue) => e.selectedSampleId = newValue.target.value} defaultValue={e.selectedSampleId}></input>:e.selectedSampleId}</td>
                  <td>{rowToEditIndex === index? <input type="number" min="0" className="doorDetailsEdit" onChange={(newValue) => e.width = newValue.target.value} defaultValue={e.width}></input>:e.width}</td>
                  <td>{rowToEditIndex === index? <input type="number" min="0" className="doorDetailsEdit" onChange={(newValue) => e.height = newValue.target.value} defaultValue={e.height}></input>:e.height}</td>
                  <td>{rowToEditIndex === index? <input type="number" min="0" className="doorDetailsEdit" onChange={(newValue) => e.quantity = newValue.target.value} defaultValue={e.quantity}></input>:e.quantity}</td>
                  <td>
                    <button onClick={() => doorEdit(index, e)} type="button" className="editBut">{rowToEditIndex === index?"Save":"Edit"}</button>
                  </td>
                  <td>
                    <button onClick={() => doorDelete(index)} type="button" className="delBut">Delete</button>
                  </td>
                </tr>

              )
            })
            }
          </table>


          <label>name : </label>
          <input placeholder="name" required></input>
          <label>phone number : </label>
          <input placeholder="phone number" type="phone" minLength="9" maxLength="10" required></input>
          <label>user id : </label>
          <input placeholder="userId" type="phone" minLength="9" maxLength="9" required></input>

          <label>Other details:</label>
          <textarea className="otherDetails" rows="5" cols="50"></textarea>
        </div>
      </form>
    </div>
  );
}

export default App;
