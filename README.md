# DB structure

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =========================
-- USERS
-- =========================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- =========================
-- ACCOUNTS
-- =========================

CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,

    name VARCHAR(100) NOT NULL,
    currency CHAR(3) NOT NULL DEFAULT 'INR',

    credit DECIMAL(19, 4) NOT NULL DEFAULT 0,
    debit DECIMAL(19, 4) NOT NULL DEFAULT 0,
    balance DECIMAL(19, 4) NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_accounts_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


-- =========================
-- TRANSACTIONS
-- =========================

CREATE TYPE transaction_type AS ENUM (
    'CREDIT',
    'DEBIT'
);

CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    account_id UUID NOT NULL,

    transaction_at TIMESTAMPTZ NOT NULL,
    type transaction_type NOT NULL,

    amount DECIMAL(19, 4) NOT NULL,
    balance_after DECIMAL(19, 4) NOT NULL,

    particular TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_transactions_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,

    CONSTRAINT check_transaction_amount
        CHECK (amount > 0)
);


-- =========================
-- STATEMENTS
-- =========================

CREATE TYPE statement_period_type AS ENUM (
    'MONTH'
);

CREATE TABLE statements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL,
    account_id UUID NOT NULL,

    period_type statement_period_type NOT NULL DEFAULT 'MONTH',

    period_start DATE NOT NULL,
    period_end DATE NOT NULL,

    opening_balance DECIMAL(19, 4) NOT NULL,
    total_credit DECIMAL(19, 4) NOT NULL DEFAULT 0,
    total_debit DECIMAL(19, 4) NOT NULL DEFAULT 0,
    closing_balance DECIMAL(19, 4) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_statements_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_statements_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE,

    CONSTRAINT check_statement_period
        CHECK (period_end >= period_start)
);


-- =========================
-- STATEMENT PDF EXPORTS
-- =========================

CREATE TABLE statement_exports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    statement_id UUID NOT NULL,
    user_id UUID NOT NULL,
    account_id UUID NOT NULL,

    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size BIGINT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_exports_statement
        FOREIGN KEY (statement_id)
        REFERENCES statements(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_exports_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_exports_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE
);


-- =========================
-- INDEXES
-- =========================

CREATE INDEX idx_accounts_user_id
    ON accounts(user_id);

CREATE INDEX idx_transactions_account_date
    ON transactions(account_id, transaction_at);

CREATE INDEX idx_statements_user_id
    ON statements(user_id);

CREATE INDEX idx_statements_account_period
    ON statements(account_id, period_start, period_end);

CREATE INDEX idx_statement_exports_user_id
    ON statement_exports(user_id);

CREATE INDEX idx_statement_exports_account_id
    ON statement_exports(account_id);


## Docker commands
- Lists all tables in database
    >
        \dt