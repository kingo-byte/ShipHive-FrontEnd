interface SignInDto {
    userName?: string;
    email?: string;
    password: string;
}

interface SignUpDto {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export { SignInDto, SignUpDto };