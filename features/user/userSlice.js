const {createSlice, isPending} = require('@reduxjs/toolkit')
const{ createAsyncThunk} = require('@reduxjs/toolkit')
const axios = require('axios')

const initialState = { 
    loading:false,
    user:null,
    error:''
}

// this generates Pending,fulfilled and rejected

const fetchUsers = createAsyncThunk(['user/fetchUser'],() => { 
  return axios
             .get('https://jsonplaceholder.typicode.com/users')
             .then(res => res.data.map(user => user.name))
})

const userSlice = createSlice({ 
    name:'user',
    initialState,
    extraReducers: builder => { 
       builder.addCase(fetchUsers.pending, state => { 
        state.loading = true;
        state.user = null;
        state.error = ''
       });
      builder.addCase(fetchUsers.fulfilled, (state,action) => { 
        state.loading = false;
        state.user = action.payload;
        state.error = ''
      })
      builder.addCase(fetchUsers.rejected, (state,action) => { 
        state.loading = false;
        state.user = null;
        state.error = action.error.message
      })
    }
})


module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;