import axiosUtil from "../utils/fetch";
//공지사항 등록
export const regNoticeApi = async (param) => {
    return await axiosUtil.fileUpload("/api/notice/save",param);
}

//공지사항 목록
export const loadNoticeListApi = async ()=>{
    return await axiosUtil.post("/api/notice/list");
}