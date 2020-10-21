export const getResellers = `
query listMasqomats($id: ID!) {
  listMasqomats(filter: {id: {eq: $id}}) {
    items {
      id
      easyId
      description
      position {
        latitude
        longitude
      }
      products {
        items {
          id
          stock
          profitShare
          priceNetto
          name
        }
      }
      reseller {
        companyName
      }
    }
  }
}
`;
export const getMasqomatUser = `
query getMasqomatUser($id: ID!) {
  getMasqomatUser(user_id: $id) {
    email
    masqomats
    userName
    user_id
  }
}`;
export const listOrders = `
query listorders{
  listOrders{
    items{
      id
      sumPrice
        masqomat{
        id
        products{
          items{
            priceNetto
            profitShare
          }
        }
        reseller{
          name
        }
        }
    }
  }
}`;
