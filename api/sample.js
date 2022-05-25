import axiosUtil from "../utils/fetch";

export const getSampleData = async () => {
    return await axiosUtil.get('https://jsonplaceholder.typicode.com/users');
}

export const getTestAPI = async () => {
    return await axiosUtil.get('/api/test');
}

export const getCarList = async () =>{
    return await axiosUtil.get('/api/carList?apiKey=AAA&apiCrtfcKey=AAA&resveBeginDe=2022-06-09&resveBeginTime=0900&resveEndDe=2022-06-10&resveEndTime=0900&vhctySeCode=01%2C02%2C03%2C04%2C05%2C06%2C07%2C08%2C09&insrncApplcCode=03&driverYearLmtYn=N&driverLicenseYear=2');
}