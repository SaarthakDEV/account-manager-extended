const ACCOUNTS = {
    addNewAccount: (userId: string) => `/accounts/${userId}`,
    deleteAccount: (userId: string, accountId: string) => `/accounts/${userId}/${accountId}`,
    renameAccount: (userId: string, accountId: string) => `accounts/${userId}/${accountId}`,
}

export default ACCOUNTS;