https://stackoverflow.com/questions/42264248/inserting-a-records-using-the-powerdns-rest-api

curl --json '{"name": "test.wizard.gay.", "kind": "Native", "masters": [], "nameservers": ["ns1.example.org.", "ns2.example.org."]}' -H 'X-API-Key: hacktheplanet!' https://dns.sirabella.org/api/v1/servers/localhost/zones; echo


curl -X PATCH --data '{"rrsets": [{"name": "gay.test.wizard.gay.", "type": "CNAME", "ttl": 3600, "changetype": "REPLACE", "records": [{"content": "mjsir911.github.io.", "disabled": false}]}]}' -H 'X-API-Key: hacktheplanet!' https://dns.sirabella.org/api/v1/servers/localhost/zones/test.wizard.gay.
