import pickListData from '../../utils/data.json'

const initialState = {
    pickList: pickListData
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};


export default productReducer