import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')

export const theme={
    sc_w:width,
    sc_h:height,   
    theme_Color:"#8360c3",
    theme_bg:'#E0EAFC',
    theme_hui:'#bdc3c7',
    themehui2:'#808080',
}

export function fetchNewsListByPage(key) {
    return dispatch => {
        dispatch({
            type: types.ACTION_ONLINE_NEWS_PRE_FETCH,
            state: 'pre_fetch',
            categoryKey: key
        });
        NetUtils.get(URL_ONLINE_NEWS+'?key='+APP_KEY_ONLINE_NEWS+'&type='+key)
        .then(function (result) {
            if (result.error_code == 0) {
                dispatch({
                    type: types.ACTION_ONLINE_NEWS_FETCH_OK,
                    newsList: result.result.data,
                    state: 'fetch_ok',
                    categoryKey: key
                });
            } else {
                dispatch({
                type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
                state: 'fetch_error',
                categoryKey: key
            });
            }
        }, function () {
            dispatch({
                type: types.ACTION_ONLINE_NEWS_FETCH_ERROR,
                state: 'fetch_error',
                categoryKey: key
            });
        })
    };
}