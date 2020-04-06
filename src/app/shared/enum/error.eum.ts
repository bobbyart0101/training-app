export enum errorEum {
    LOGINFAILED = 401,
    GENERAL = 400
}

export function errorMessage(error: errorEum): string {
    let message = '';
    switch (error) {
        case 401:
            message = 'Login failed. Please try another username or password.';
            console.log(message);
            break;
        case 400:
            message = 'There is something wrong in our server.';
            console.log(message);
            break;
        default:
            console.log('No such error exists!');
            break;
    }

    return message;
}
