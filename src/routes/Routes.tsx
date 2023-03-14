import { Route, Routes } from 'react-router-dom';

import * as urls from 'helpers/urls';
import { Landing } from 'views/landing';
import { Tx } from 'views/tx';

export default function _Routes() {
	return (
		<Routes>
			<Route path={urls.base} element={<Landing />} />
			<Route path={`${urls.tx}:id`} element={<Tx />} />
		</Routes>
	);
}
