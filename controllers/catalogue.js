const { catalogueList } = require('../data/catalogue.json');

exports.getCatalogues = async (req, res, next) => {
	try {
		return res.status(200).json({
			message: 'All catalogues fetched Successfully',
			catalogueList: catalogueList,
		});
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
	}
};
