import API from "../axiosInstance";

const adminLogin = async (formData) => {
    return await API.post("/admin/login", formData);
};

export { adminLogin }