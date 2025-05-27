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

// /domains
const domains = () => `domain`;
// /domain/[:domain]
const domain = (domain) => `domain/${domain}`;
// /domain/[:domain]/[:subdomain]
const subdomain = (domain, subdomain) => `domain/${domain}/${subdomain}/`;
domain.subdomain = subdomain;

const api = { domain };

const getDomains = async () => {
	return request.GET(api.domains());
};

const getSubdomains = async (domain) => {
	return request.GET(api.domain(domain));
};

const addSubdomain = async (domain, subdomain) => {
	return request.POST(api.domain.subdomain(domain, subdomain));
};

const deleteSubdomain = async (domain, subdomain) => {
	return request.DELETE(api.domain.subdomain(domain, subdomain));
};

console.log(await addSubdomain('bret.site', 'sub'));
console.log(await deleteSubdomain('bret.site', 'sub'));











// Styling

