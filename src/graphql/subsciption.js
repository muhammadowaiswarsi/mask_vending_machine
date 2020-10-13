export const onUpdateProduct = `
subscription Product{
  onUpdateProduct{
        id
        priceNetto
        description
        name
        taxes
        profitShare
        stock
        masqomat{
          id
          easyId
          description
          position{
            latitude
            longitude
          }
            products{
            items{
              stock
            }
          }
          reseller{
            companyName
          }
        }
    }
  }`;
