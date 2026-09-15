const SLICE = {
    ACCOUNTS: 'accounts',
    USER: 'user',
} as const;

export type SliceType = typeof SLICE[keyof typeof SLICE];

export default SLICE;