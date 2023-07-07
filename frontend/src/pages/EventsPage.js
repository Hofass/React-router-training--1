import { Link } from "react-router-dom";
const DUMMY_DATA = [
	{
		id: "el1",
		title: "First event",
	},
	{
		id: "el2",
		title: "Another event",
	},
];

function EventsPage() {
	return (
		<>
			<ul>
				{DUMMY_DATA.map(event => (
					<li key={event.id}>
						<Link to={event.id}>{event.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default EventsPage;
