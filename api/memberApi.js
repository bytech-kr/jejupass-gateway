import axiosUtil from "../utils/fetch";

// 회원 목록
export const loadMemberListApi = async () => {
    return await axiosUtil.post("/api/member/userList");
}