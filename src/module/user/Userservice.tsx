import axiosExport from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";
import { Iuser } from "./user.type";
const getUserList = async () => {
  return await axiosExport.get<Iuser[]>(ApiConfig.user);
};
export default getUserList;
