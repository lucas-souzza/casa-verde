import { useSetRecoilState } from "recoil";
import { filterValue } from "../states/atoms";

function useFilter() {
    const setFilter = useSetRecoilState(filterValue);

    return setFilter;
}

export default useFilter;