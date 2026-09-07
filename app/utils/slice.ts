const SLICE = {
    ACCOUNTS: 'accounts'

} as const;

export type SliceType = typeof SLICE[keyof typeof SLICE];

export default SLICE;