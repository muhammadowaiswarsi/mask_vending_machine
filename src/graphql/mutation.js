export const UpdateOrders = `
  mutation updateProduct(
      $input: UpdateProductInput!
  ) {
    updateProduct(input: $input) {
        id
        priceNetto
        name
        taxes
        profitShare
        masqomat {
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
              profitShare
              priceNetto
              name
            }
          }
          reseller{
            companyName
          }
        }

    }
  }
`;

export const CreateMaskUser = `
  mutation CreateMaskUser(
      $input: CreateMaskUser!
  ){
    createMaskUser(input: $input){
      user_id
      email
      userName
    }
  }`;
