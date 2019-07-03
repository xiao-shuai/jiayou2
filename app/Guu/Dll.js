export function resetRobotResponseState() {
    return dispatch => {
        dispatch({
            type: types.ACTION_CHART_ROBOT_PRE_FETCH,
            isUser: false,
            data: undefined,
        });
    };
}