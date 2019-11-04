'use strict';

const {
	china: {ENVS, ...mirrors}
} = require('binary-mirror-config');

function toArray(io) {
	return Array.isArray(io) ? io : [io];
}

const replaceMaps = Object.entries(
	Object.values(mirrors)
		.filter(
			({replaceHostMap, replaceHost, host}) =>
				replaceHostMap || (replaceHost && host)
		)
		.map(
			({replaceHostMap, replaceHost = [], host}) =>
				replaceHostMap ||
				toArray(replaceHost).reduce((io, key) => ({...io, [key]: host}), {})
		)
		.reduce((io, object) => ({...io, ...object}), {})
);

module.exports = function urlReplacer(url) {
	const [match, target] =
		replaceMaps.find(([host]) => url.startsWith(host)) || [];

	return match ? url.replace(match, target) : url;
};
