export default (state,action)=>{
    switch(action.type){
        case 'INITAL_RENDER':
            return{
                ...state,
                loading:false,
                rooms:action.payload,
                featuredRooms:action.payload.filter(room=>room.featured),
                sortedRooms:action.payload,
                maxPrice:Math.max(...action.payload.map(room=>room.price)),
                maxSize:Math.max(...action.payload.map(room=>room.size)),
                price:Math.max(...action.payload.map(room=>room.price)),
            };
            case 'UPDATE_STATE':
                const {name,value,filtered}=action.payload
                return{
                    ...state,
                    [name]:value,
                    sortedRooms:filtered,
                };   
        default:
            return state
    }
}