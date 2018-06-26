const parser = require('./../../parser');

const response = `
<?xml version="1.0" encoding="UTF-8"?>
<account_balance href="https://your-subdomain.recurly.com/v2/accounts/1/balance">
  <account href="https://your-subdomain.recurly.com/v2/accounts/1"/>
  <past_due type="boolean">false</past_due>
  <balance_in_cents>
    <USD type="integer">3000</USD>
    <EUR type="integer">0</EUR>
  </balance_in_cents>
</account_balance>
`;

module.exports = {
  response,
  parsedResponse: parser.success(response),
};
