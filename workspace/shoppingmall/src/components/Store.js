import { configureStore, createSlice } from "@redux.js/toolkit";

//{name : 'state Name', initialState : 'state Value'}
let user = createSlice({ // useState() 역할임
    name: 'user',
    initialState : 'yuna', //user = 'yuna'
    reducers: {
        changeName(state){ //changeName(){}
            return 'dayeong' + state
        }
    }

})

export let {changeName} = user.actions // user.actions : state 변경 함수

let stock = createSlice({
    name: 'stock',
    initialState : [7,, 13, 20] //stock=[7, 13, 20]
})

let cart = createSlice({
    name: 'cart',
    initialState:
    [
        
    ]
})