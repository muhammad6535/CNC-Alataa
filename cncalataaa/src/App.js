import "./App.css";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import React, { useState } from "react";

function App() {
  const [selectedSampleId, setSelectedSampleId] = useState(0);
  const [orderDetails, setOrderDetails] = useState([]);

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
          {JSON.stringify(orderDetails)}
          <label>width : </label>
          <input className="doorDetails" id="width" placeHolder="width"></input>
          <label>height : </label>
          <input
            className="doorDetails"
            id="height"
            placeHolder="height"
          ></input>
          <label>quantity : </label>
          <input
            className="doorDetails"
            id="quantity"
            placeHolder="quantity"
          ></input>
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
            //
            onPick={(selectedImage) => {
              setSelectedSampleId(selectedImage.value);
              console.log(selectedSampleId);
            }}
          />

          <button type="submit">add to list</button>

          <label>name : </label>
          <input placeHolder="name"></input>
          <label>phone number : </label>
          <input placeHolder="phone number" type="phone"></input>
          <label>user id : </label>
          <input placeHolder="userId" type="number"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
