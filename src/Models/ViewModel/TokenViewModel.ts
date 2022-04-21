class TokenViewModel {
    access_token: string;
    token_type?: string;
    expires_in?: number;
    exp?: number;
    refresh_token?: string;

    constructor(access_token?: string, token_type?: string, expires_in?: number, exp?: number, refresh_token?: string) {
        this.access_token = access_token ?? ""
        this.token_type = token_type ?? ""
        this.expires_in = expires_in ?? 0
        this.exp = expires_in ?? 0
        this.refresh_token = refresh_token ?? ""
    }
}
export default TokenViewModel