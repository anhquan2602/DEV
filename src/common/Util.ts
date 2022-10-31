import CONSTANT from "../const/constant";

class Util {
    static buildEndpoint(subEndpoint : string) {
        return CONSTANT.BASE_URL + subEndpoint;
    }

}

export default Util;