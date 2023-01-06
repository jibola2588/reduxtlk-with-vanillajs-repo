const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions
const fetchUser = require("./features/user/userSlice").fetchUsers


console.log(store.getState());
const unSubscribe = store.subscribe(() => { 
    // console.log(store.getState());
})
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.decrementCake());
// store.dispatch(cakeActions.decrementCake());
// store.dispatch(cakeActions.decrementCake());
// store.dispatch(iceCreamActions.addIceCream());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.addMoreIceCream(20));
store.dispatch(fetchUser())

unSubscribe()