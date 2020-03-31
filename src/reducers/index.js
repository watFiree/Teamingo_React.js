const initialState = {
    username: 'Karol Piotrowicz',
    profilephoto: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    teams : [
        {
            team: 'Facebook',
            admin: 'Zucerberg',
            img:'https://www.webpartner.co.za/images/fb_icon.png',
            items:[
                    {
                        id: 0,
                        title:'Hello',
                        author: 'You',
                        content:'Manage your items in items',
                    }
            ]
        },
        {
            team: 'Team 2',
            admin: 'Someone',
            img:'https://i.ytimg.com/vi/1dEXYegJyAw/hqdefault.jpg',
            items:[
                    {
                        id: 1,
                        title:'Cast',
                        author: 'Susan',
                        content:'Example',
                    }
                ]
        }      
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ('REMOVE_ITEM'):
            return {
                ...state,
                ...state.teams,
                ...state.teams[action.payload.teamIndex].items = [
                        ...state.teams[action.payload.teamIndex].items.filter(item => item.id !== action.payload.id)
                ]
            };
        case ('ADD_ITEM'):
            return {
                ...state,
                ...state.teams[action.payload.teamIndex].items.push(action.payload.itemContent)
            }    
        default :
            return state;
    }
};

export default rootReducer;
