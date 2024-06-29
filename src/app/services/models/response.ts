interface BaseResponse {
    token: string;
}
interface LoginResponse extends BaseResponse {
    
}

interface RefreshTokenResponse extends BaseResponse {

}

export { LoginResponse, RefreshTokenResponse }