export interface UserLoginDTO {
    email: string;
    password: string;
}
export interface UserRegisterDTO {
    uid: number;
    email: string;
    password: string;
    emailVerification: boolean;
}