const {createSlice} = require("@reduxjs/toolkit")
const cakeActions = require('../cake/cakeSlice').cakeActions

const initialState = { 
    num_of_iceCream : 5
}


const iceCreamSlice = createSlice({ 
    name:'ice cream',
    initialState,
    reducers:{ 
        addIceCream: state => {
             state.num_of_iceCream++;
        },
        addMoreIceCream: (state,action) => {
             state.num_of_iceCream += action.payload
        }
    },
    // extra reducers is use if you want to reduce cake and icream the same time
    // extraReducers:{ 
    //     ['cake/decrementCake'] :state => { 
    //         state.num_of_iceCream--
    //     }
    // }
     
    extraReducers:(base) => { 
     base.addCase(cakeActions.decrementCake(), state => {
        state.num_of_iceCream --;
     })
    } 

})


module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions