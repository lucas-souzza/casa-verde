import { useRecoilState } from "recoil";
import { orderingValue } from "../states/atoms";

function useOrdering() {
    const [ordering, setOrdering] = useRecoilState(orderingValue);

    return { 
        ordering,
        setOrdering
    };
}

export default useOrdering;