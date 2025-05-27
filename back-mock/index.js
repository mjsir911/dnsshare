import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.json({ foo: 'bar' });
});
app.get('/:slug', (req, res) => {
	console.log(req.params.slug);
	res.json({ foo: 'bar' });
});

const domain = express.Router({ mergeParams: true });
app.use('/domain/:domain', domain);
domain.get('', (req, res) => {
	console.log('hi there');
	res.json({domain:'got'});
});

const subdomain = express.Router({ mergeParams: true });
domain.use('/:subdomain', subdomain);
subdomain.get('/', (req, res) => {
	const { domain, subdomain } = req.params;
	console.log({
		domain,
		subdomain
	});
	console.log('d', req.params.domain);
	console.log('s', req.params.subdomain);
	res.json({ got: 'it' });
});

app.use((req, res) => {
	res.status(404).json({});
});

app.listen(port, () => {
	console.log(`Mock server listening on port ${port}`)
});