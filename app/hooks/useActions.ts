import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActions} from "../store/cart/cart.slice";


const AllActions = {
    ...CartActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActions, dispatch)
}
