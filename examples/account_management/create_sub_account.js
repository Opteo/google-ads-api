const { GoogleAdsApi/*, enums*/ } = require('google-ads-api')

// Make sure you pass in valid authentication details!
const client = new GoogleAdsApi({
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
    developer_token: '<DEVELOPER_TOKEN>',
})

async function main() {
    const master_customer_account_id = '<CUSTOMER_ACCOUNT_ID>';
    const master_customer = client.Customer({
        customer_account_id: master_customer_account_id,
        refresh_token: '<REFRESH_TOKEN>',
    })

    try {
        // Example 1: Create account, receive resource_name, update account properties
        const new_account = await master_customer.createCustomerClient({
            customer_id: master_customer_account_id,
            customer_client: {
                descriptive_name: 'Test Account ' + (new Date()).getTime(),
                currency_code: 'CAD',
                time_zone: 'America/Toronto',
            },
            /* If you need to invite a person to manage this account, uncomment both of the following lines
            email_address: 'personal@email.com',
            access_role: enums.AccessRole.ADMIN
            */
        });

        const sub_customer = client.Customer({
            customer_account_id: new_account.resource_name.split('/')[1],
            refresh_token: '<REFRESH_TOKEN>',
            login_customer_id: master_customer_account_id
        })

        await sub_customer.update(
          {
            resource_name: new_account.resource_name,
            // Below is a list of properties which you cannot set values while creating an account
            tracking_url_template: 'your value here',
            auto_tagging_enabled: true,
            call_reporting_setting: {
              call_reporting_enabled: true
            }
          }
        );

        // As alternative you can use customer.mutateResources
        // await sub_customer.mutateResources([
        //   {
        //     _resource: 'Customer',
        //     _operation: 'update',
        //     resource_name: new_account.resource_name,
        //     // Below is a list of properties which you cannot set values while creating an account
        //     tracking_url_template: 'your value here',
        //     auto_tagging_enabled: true,
        //     call_reporting_setting: {
        //       call_reporting_enabled: true
        //     }
        //   }
        // ]);

        // Example 2: Create account, receive CustomerInstance, use it to update account properties
        // const sub_customer = await master_customer.createCustomerClient({
        //         customer_id: master_customer_account_id,
        //         customer_client: {
        //             descriptive_name: 'Test Account ' + (new Date()).getTime(),
        //             currency_code: 'CAD',
        //             time_zone: 'America/Toronto',
        //         },
        //         /* If you need to invite a person to manage this account, uncomment both of the following lines
        //         email_address: 'personal@email.com',
        //         access_role: enums.AccessRole.ADMIN
        //         */
        //     },
        //     {
        //            return_customer: true,
        //            gads_api_client: client,
        //            customer_options: {
        //              refresh_token: '<REFRESH_TOKEN>',
        //              login_customer_id: master_customer_account_id
        //            }
        //        }
        //    );
        //
        // await sub_customer.update(
        //   {
        //     resource_name: new_account.resource_name,
        //     // Below is a list of properties which you cannot set values while creating an account
        //     tracking_url_template: 'your value here',
        //     auto_tagging_enabled: true,
        //     call_reporting_setting: {
        //       call_reporting_enabled: true
        //     }
        //   }
        // );

    } catch (err) {
        console.log(err)
    }
}

main()
