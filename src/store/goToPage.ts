// This could be used to connect to any component and go to any page
export type Page = 'TX' | 'HOME';
export function goToPage(page: Page, payload: any, dispatch: any) {
	return dispatch({ type: page, payload: { ...payload } });
}
