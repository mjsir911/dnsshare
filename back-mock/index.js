import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.json({ foo: 'bar' });
});

const domainMap = new Map();
domainMap.set('wizard.gay', ['a', 'b']);
domainMap.set('what.lol', ['is']);
domainMap.set('bret.site', ['the']);

const domains = express.Router({ mergeParams: true });
app.use('/domains', domains);
domains.get('', (req, res) => {
	res.json({
		domains: [...domainMap.keys()]
	});
});

const domain = express.Router({ mergeParams: true });
app.use('/domain/:domain', domain);
domain.get('', (req, res) => {
	const { domain } = req.params;
	res.json({ subdomains: domainMap.get(domain) });
});

const subdomain = express.Router({ mergeParams: true });
domain.use('/:subdomain', subdomain);
subdomain.post('/', (req, res) => {
	const { domain, subdomain } = req.params;
	const d = domainMap.get(domain);
	if (!d) {
		res.status(500).json({ error: 'oh no' });
		return;
	}
	if (!d.includes(subdomain)) {
		console.log('added', subdomain, 'to', domain);
		d.push(subdomain);
	} else {
		console.log('already exists');
	}
	res.json({ success: true });
});

subdomain.delete('/', (req, res) => {
	const { domain, subdomain } = req.params;
	const d = domainMap.get(domain);
	if (!d) {
		res.status(500).json({ error: 'oh no' });
		return;
	}
	if (d.includes(subdomain)) {
		console.log('removed', subdomain, 'from', domain);
		d.splice(d.indexOf(subdomain), 1);
	} else {
		console.log('does not exists');
	}
	res.json({ success: true });
});

app.use((req, res) => {
	res.status(404).json({err:404});
});

app.listen(port, () => {
	console.log(`Mock server listening on port ${port}`)
});