/* eslint-disable no-unused-vars */
// import { useLoadingAction } from '@stores/actions';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import config from 'src/environments/config';

// const usePushPage = (link) => {
//     const history = useHistory();
//     // const dispatch = useDispatch();
//     // dispatch(useLoadingAction().showLoader());
//     setTimeout(() => {
//         history.push(link);
//         // dispatch(useLoadingAction().hideLoader());
//     }, 500);
// }

// export default usePushPage

export class RouteService {
    static history;
    static init(history) {
        this.history = history;
    }
    static redirectByRole = (role) => {
        switch (role) {
            case config.useRoleName.customer: this.history.push("/core/home_page"); break;
        }
    }

}