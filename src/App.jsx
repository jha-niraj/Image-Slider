import { useState } from "react";
import "./App.css";
// Importing all the images from the files:
import Image1 from './assets/image-1.jpg';
import Image2 from './assets/image-2.jpg';
import Image3 from './assets/image-3.jpg';
import Image4 from './assets/image-4.jpg';
import Image5 from './assets/image-5.jpg';
import ImageSlider from "./ImageSlider";

const Images = [Image1, Image2, Image3, Image4, Image5];

function App() {

	return ( 
		<div style={
			{
				maxWidth: "1200px",
				width: "100%",
				height: "500px",
				margin:"0 auto"
			}}>
			<ImageSlider imageUrls={Images} />
		</div>
	)
}

export default App;
