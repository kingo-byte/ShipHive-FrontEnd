interface BaseResponse {
    token: string;
}

interface LoginResponse {
    baseResponse?: BaseResponse;
}

export { LoginResponse }