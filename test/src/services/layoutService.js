export const layoutService = (route) => {
	return route.meta.layout
		? `the-${route.meta.layout}-layout`
		: 'the-main-layout';
};
