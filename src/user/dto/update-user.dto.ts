export class UpdateUserDto {
    name?: string
    email?: string
}

export class UpdateUserPassDto {
    oldPass: string
    newPass: string
}
