const DefaultState = [
    {
        title:'zoom',
        price: 25,
        discount:2,
        id:1
    },
    {
        title:'team',
        price: 100,
        discount:5,
        id:2
    },
    {
        title:'Microsoft',
        price: 200,
        discount:15,
        id:3
    },
]


const ADD = 'PRODUCTS_ADD'
const DELETE = 'PRODUCTS_DELETE'



export const addProductAction = (title,price,discount) =>{
    return{
    type: ADD,
    payload: {
        id: Date.now(),
        title,price,discount
    }}
    }

export const deleteProductAction = (id) =>{
   return {type: DELETE, payload: id}
}

export const productReducer = (state=DefaultState,action) => {
    if (action.type === ADD) {
        return [...state, action.payload]
    } else if (action.type === DELETE){
        return state.filter(({id}) => id !== action.payload)
    } else {
        return state
    }
}