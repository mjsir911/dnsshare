const sendRequest = async (path, method = 'GET') => {
	// TODO(bret): Use browser's URL API
	const _path = ('/' + path).replace('//', '/');
	const host = location.host.includes('localhost') ? 'http://localhost:3000' : '';
	const url = [host, _path].join('');
	return fetch(url, { method }).then((res) => res.json());
};

const request = {
	GET: (path) => sendRequest(path, 'GET'),
	POST: (path, body) => sendRequest(path, 'POST', body),
	PUT: (path, body) => sendRequest(path, 'PUT', body),
	DELETE: (path) => sendRequest(path, 'DELETE'),
}

// /domain/:domain
const domain = (domain) => `domain/${domain}`;
// /domain/:domain/:subdomain
const subdomain = (domain, subdomain) => `domain/${domain}/${subdomain}/`;
domain.subdomain = subdomain;

const api = { domain };

request.GET(api.domain('bret.com'));
request.GET(api.domain.subdomain('bret.com', 'sub'));