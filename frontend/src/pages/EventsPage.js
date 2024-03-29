import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";
function EventsPage() {
	const data = useLoaderData();
	// if(data.isError){
	// 	return <p>{data.message}</p>
	// }

	const events = data.events;

	return (
		<>
			<EventsList events={events} />
		</>
	);
}

export default EventsPage;
export async function loader() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		throw new Response(JSON.stringify({message:"Could not fetch events"}),{status:500})
		// return {isError:true, message:"Could not fetch events"}
	} else {
		const resData = await response.json();
		return resData.events;
	}
}
