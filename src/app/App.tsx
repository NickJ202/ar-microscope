import { DOM } from 'helpers/config';
import { Microscope } from 'views/microscope';

export default function App() {
	return (
		<>
			<div id={DOM.loader} />
			<div id={DOM.modal} />
			<div id={DOM.notification} />
			<Microscope />
		</>
	);
}
