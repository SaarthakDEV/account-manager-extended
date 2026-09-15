

const USER = {
    getUserProfile: (userId: string) => `/users/${userId}`,
}

export default {
    ...USER,
}