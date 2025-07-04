
import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
	return (
		<section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
			

	
		  <article className="flex  flex-col mx-2">
			<Card
			  title="Cozy Apartment"
			  description="A beautiful apartment in the city center."
			  imageUrl="/assets/image 16.png"
			  price={120}
			/>
			<Button
			  label="Book Now"
			  onClick={() => alert("Booked!")}
			/>
		  </article>
	
		  <article className="flex  flex-col mx-2">
			<Card
			  title="Cozy Apartment"
			  description="A beautiful apartment in the city center."
			  imageUrl="/assets/image 16.png"
			  price={120}
			/>
			<Button
			  label="Book Now"
			  onClick={() => alert("Booked!")}
			/>
		  </article>
		  <article className="flex  flex-col mx-2">
			<Card
			  title="Cozy Apartment"
			  description="A beautiful apartment in the city center."
			  imageUrl="/assets/image 16.png"
			  price={120}
			/>
			<Button
			  label="Book Now"
			  onClick={() => alert("Booked!")}
			/>
		  </article>
		  <article className="flex  flex-col mx-2">
			<Card
			  title="Cozy Apartment"
			  description="A beautiful apartment in the city center."
			  imageUrl="/assets/image 16.png"
			  price={120}
			/>
			<Button
			  label="Book Now"
			  onClick={() => alert("Booked!")}
			/>
		  </article>


		 
		</section>
	  );
	  
}