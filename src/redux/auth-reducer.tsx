const SET_USER_DATE = 'SET_USER_DATE';


let initialState = {
   userId:null,
    login: null,
   email: null
};
export type InitialAuthState = typeof initialState

const authReducer = (state: InitialAuthState = initialState, action: ActionsType) => {

    switch (action.type) {

        case SET_USER_DATE:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}


export const setAuthUserDate = (userId: number, login: string, email: string) => ({type: SET_USER_DATE, data:{userId, login, email} } as const)

type ActionsType = ReturnType<typeof setAuthUserDate>

export default authReducer