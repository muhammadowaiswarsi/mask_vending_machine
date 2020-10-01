export const onCreateReseller = `
subscription Reseller{
    onCreateReseller{
        id
        masqomats{
          items{
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
    }
  }`;
