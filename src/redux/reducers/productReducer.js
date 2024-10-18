import pickListData from '../../utils/data.json';
import {UPDATE_PRODUCT_COUNT} from '../actions';

const initialState = {
  pickList: pickListData,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_COUNT: {
      const {pickId, customerId, productId, newCount} = action.payload;

      return {
        ...state,
        pickList: state.pickList
          .map(pick => {
            if (pick.id === pickId) {
              return {
                ...pick,
                customers: pick.customers.map(customer => {
                  if (customer.id === customerId) {
                    const updatedProducts = customer.products.map(product => {
                      if (product.id === productId) {
                        product.quantity = newCount;

                        if (
                          Number(product.quantity) ===
                            Number(product.total) - 1 ||
                          Number(product.quantity) === Number(product.total) - 2
                        ) {
                          product.status = 'partially';
                        } else if (
                          Number(product.quantity) === Number(product.total)
                        ) {
                          product.status = 'completed';
                        } else {
                          product.status = 'open';
                        }

                        return product; 
                      }
                      return product; 
                    });

                    let customerStatus = 'open'; 
                    let totalCompleted = updatedProducts.filter(item => item.status === 'completed') || [];
                    customer.completed = totalCompleted.length || 0;

                    for (let prod of updatedProducts) {
                      if (prod.status === 'completed') {
                        customerStatus = 'completed';
                        break;
                      }
                      if (prod.status === 'partially') {
                        customerStatus = 'partially';
                        break;
                      }
                    }

                    customer.products = updatedProducts;
                    customer.status = customerStatus;

                    return customer;
                  }
                  return customer; 
                }),
              };
            }
            return pick;
          })
          .map(pick => {
            let picklistStatus = 'completed';
            for (let customer of pick.customers) {
              if (customer.status === 'partially') {
                picklistStatus = 'partially';
                break;
              }
              if (customer.status === 'open') {
                picklistStatus = 'open';
                break;
              }
            }

            return {
              ...pick,
              status: picklistStatus,
            };
          }),
      };
    }

    default:
      return state;
  }
};

export default productReducer;
