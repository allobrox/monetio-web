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