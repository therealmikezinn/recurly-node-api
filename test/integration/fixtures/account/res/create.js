const parser = require('./../../parser');

const postResponse = `
<?xml version="1.0" encoding="UTF-8"?>
<account href="https://your-subdomain.recurly.com/v2/accounts/1">
  <adjustments href="https://your-subdomain.recurly.com/v2/accounts/1/adjustments"/>
  <billing_info href="https://your-subdomain.recurly.com/v2/accounts/1/billing_info"/>
  <invoices href="https://your-subdomain.recurly.com/v2/accounts/1/invoices"/>
  <redemption href="https://your-subdomain.recurly.com/v2/accounts/1/redemption"/>
  <shipping_addresses href="https://your-subdomain.recurly.com/v2/accounts/1/shipping_addresses"/>
  <subscriptions href="https://your-subdomain.recurly.com/v2/accounts/1/subscriptions"/>
  <transactions href="https://your-subdomain.recurly.com/v2/accounts/1/transactions"/>
  <account_code>1</account_code>
  <state>active</state>
  <username>verena1234</username>
  <email>verena@example.com</email>
  <cc_emails>bob@example.com,susan@example.com</cc_emails>
  <first_name>Verena</first_name>
  <last_name>Example</last_name>
  <company_name>Recurly Inc</company_name>
  <vat_number nil="nil"/>
  <address>
    <address1>123 Main St.</address1>
    <address2 nil="nil"/>
    <city>San Francisco</city>
    <state>CA</state>
    <zip>94105</zip>
    <country>US</country>
    <phone nil="nil"/>
  </address>
  <accept_language nil="nil"/>
  <hosted_login_token>3ed66441313a90bd7e8039b31985dee8</hosted_login_token>
  <created_at type="datetime">2016-06-14T16:08:41Z</created_at>
  <closed_at nil="nil"/>
</account>
`;

module.exports = {
  response: postResponse,
  parsedResponse: parser.success(postResponse),
};
