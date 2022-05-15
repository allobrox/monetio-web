create table financial_group
(
    id          varchar(50),
    dcc         varchar(5),
    modified_at bigint     not null,
    primary key (id)
);

create table users
(
    id           varchar(50),
    email        varchar(255)  not null unique,
    group_id     varchar(50)   not null,
    otp          varchar(1000),
    password     varchar(1000) not null,
    created_at   bigint        not null,
    modified_at  bigint        not null,
    v_sent       boolean       not null default false,
    verified     boolean       not null default false,
    primary key (id)
);

create unique index user_by_email on users (email);

create table wallet
(
    id          varchar(50),
    name        varchar(50) not null,
    group_id    varchar(50) not null,
    is_active   boolean     not null default true,
    issuer      varchar(50) not null,
    created_at  bigint      not null,
    modified_at bigint      not null,
    primary key (id)
);

create table wallet_role
(
    id        varchar(50),
    user_id   varchar(50) not null,
    wallet_id varchar(50) not null,
    user_role smallint    not null,
    primary key (id)
);

create index role_by_id on wallet_role (user_id);