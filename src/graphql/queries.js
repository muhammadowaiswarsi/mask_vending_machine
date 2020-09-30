export const getResellers = `
query Reseller{
    listResellers{
      items{
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
    }
  }`;
