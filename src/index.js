export default (router, { database }) => {
	router.get('/hello', (req, res) => {
		database.raw('select * from TemporaryRanksTable').then((results) => res.json(results));
	});
};
