import axiosExport from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";
import { Iuser } from "./user.type";
const getUserList = async () => {
  return await axiosExport.get<Iuser[]>(ApiConfig.user);
};
export const setuser = async (form: Iuser) => {
  return await axiosExport.post<Iuser>(ApiConfig.user, form);
};
export default getUserList;
