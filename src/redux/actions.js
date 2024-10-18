export const UPDATE_PRODUCT_COUNT = 'UPDATE_PRODUCT_COUNT';

export const updateProductCount = (
  pickId,
  customerId,
  productId,
  newCount,
) => ({
  type: UPDATE_PRODUCT_COUNT,
  payload: {
    pickId,
    customerId,
    productId,
    newCount,
  },
});
