const initialState = [];

const jobListReducer = (state=initialState,action) => {
    switch (action.type){
        case "UPDATE_JOB_LIST":
            return action.jobList;
        default :
            return state;
    }
}

export default jobListReducer;