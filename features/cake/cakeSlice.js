const {createSlice } = require("@reduxjs/toolkit");

const initialState = { 
    num_of_cakes : 10
}

const cakeSlice = createSlice({ 
    name:'cake',
    initialState,
    reducers:{ 
        ordered:state => { 
            state.num_of_cakes ++;
        },
        restocked:(state,action) => { 
            state.num_of_cakes += action.payload;
        },
        decrementCake:state => { 
            state.num_of_cakes --
        }
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
