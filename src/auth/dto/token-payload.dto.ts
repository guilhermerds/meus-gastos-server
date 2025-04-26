export class TokenPayload {
    user: {
        id: string;
        email: string;
        iat?: number;
        exp?: number;
    }
}
