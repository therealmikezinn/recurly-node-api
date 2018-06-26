const parser = require('./../../parser');

const getReponse = `
<?xml version="1.0" encoding="UTF-8"?>
<account href="https://your-subdomain.recurly.com/v2/accounts/1">
  <adjustments href="https://your-subdomain.recurly.com/v2/accounts/1/adjustments"/>
  <account_acquisition href="https://your-subdomain.recurly.com/v2/accounts/1/acquisition"/>
  <account_balance href="https://your-subdomain.recurly.com/v2/accounts/1/balance"/>
  <billing_info href="https://your-subdomain.recurly.com/v2/accounts/1/billing_info"/>
  <invoices href="https://your-subdomain.recurly.com/v2/accounts/1/invoices"/>
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
  <company_name>New Company Name</company_name>
  <vat_number nil="nil"/>
  <tax_exempt type="boolean">false</tax_exempt>
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
  <hosted_login_token>71c122cb16fc90252ff845eacf5d7814</hosted_login_token>
  <created_at type="datetime">2016-08-03T15:44:05Z</created_at>
  <updated_at type="datetime">2017-03-15T21:22:18Z</updated_at>
  <closed_at nil="nil"/>
  <has_live_subscription type="boolean">false</has_live_subscription>
  <has_active_subscription type="boolean">false</has_active_subscription>
  <has_future_subscription type="boolean">false</has_future_subscription>
  <has_canceled_subscription type="boolean">false</has_canceled_subscription>
  <has_past_due_invoice type="boolean">false</has_past_due_invoice>
</account>
`;

module.exports = {
  response: getReponse,
  parsedResponse: parser.success(getReponse),
};
