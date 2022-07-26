---
title: Database Design - ERDs
date: '2022-07-26'
tags: ['ERD', 'databases']
images: ['/static/images/postImages/atwena-goodman-PB4dNSELi_E-unsplash.jpg']
draft: false
summary: Creating ERDs, principles of architecting data, and many-to-many relationships. All software needs some form of data in order to contain state and behavior.
---

Data modeling has two main goals:

1. Organize our data
2. Avoid duplication or inconsistencies

We can use **Entity Relationship Diagrams** (ERD) to help us organize and model our data.

Data duplication benefits:

- geographic copies of data in servers around the world to increase performance
- caching of data to reduce the number of times we need to access the database
  > However, we wont be duplicating our data here.

## ERDs

### Components

- Entities: nouns representing things in our data
- Relationships: how these entities are related to each other
- Attributes: properties or fields for each entity

Optional: ERDs can be 'zoomed out' and not include any attributes.

## Database Properties

### Tables

- [W3 Table column options](https://www.w3schools.com/sql/sql_datatypes.asp)

## Keys

### Primary Keys

Are a way to identify a particular record in a table.

- must be **unique**
- cannot contain **NULL** values

We often use the `SERIAL` keyword to create a primary key that is **auto-incremented**. The data type is still integer.

We reference the primary key in other tables to **link data together**. This relationship is called a **foreign key**.

### Foreign Keys

Is an attribute that references a PRIMARY KEY in another table.

![PK and FK](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)

> The Foreign Key is on the many side.

## Naming Conventions

- use **snake_case** for table or column names
- In ERD, tables names can be singular or plural (be consistent)
- in DB pluralize tables names (e.g. `users`)
- Name primary keys as `id`
- Most foreign keys use singular `<table>_id`

- PK should called id for ALL of our tables.
- FK should be be singular table name of the parent table, followed by id (Eg: `customer_id`).
- Example: o`rders.customer_id` pointing to customers.id (I'm using the syntax table. `column_name` here).

```
+----------------+
| students | <-- Plural
+----------------+
| PK | id | <-- Primary Key
| | name | <-- Singular
| FK | cohort_id | <-- <table>_id
+----------------+
```

## Data Types

Every attribute must have a data type.

![data types](https://i.stack.imgur.com/tuRiZ.png)

## Denormalized Database

- denormalized data is data that is not stored in the primary table.
- it contains data that is repeated
- in order to avoid this, we need two separate tables. (one for each entity)

## Normalized Database

- no data is duplicated
- we have one table for each entity

> It is _normal_ to create more tables when normalizing a database.

See article for more on normalized databases: [here](https://blog.udemy.com/normalization-in-database-with-example/)

## Why do we normalize databases?

To enforce data integrity reduce duplication, and make it easier to manage our data.

First Normal Form (NF):

- each column has a single value
  - we do NOT want repeating groups (e.g., `computer1, computer2, computer3...`)

We can take this data and put in it's OWN table.

- We use the `FOREIGN KEY` constraint to link the data together.

## Relationship Types

The relationships between tables are based on primary keys and foreign keys.

![simple ERD](https://www.guru99.com/images/1/100518_0621_ERDiagramTu1.png)

![more complex ERD example](https://landing.moqups.com/img/content/diagrams/erd/database-diagram/database-diagram-1600.png)

### One to many

- Most common
- think 'parent-child' relationship.
- in relational databases
  - add a foreign key to the child table
    - we add a column to the child table to store this foreign key
- "X has **many** Y" and "Y's **belong to** X"
- use crows feet to draw this in ERDs.
- One record in the parent table can have many records in the child table.
  - example: one customer can have many orders. One order can only have one customer.

> The Foreign Key is on the many side.

### One-to-one

- not as common
- can still be thought as a 'parent-child' relationship (one parent => one child)
- in relational db:
  - still uses two tables
  - still adds key to child
- 'X has **one** Y' and 'Y's **belong to** X'
- Example: a person has one passport.
- You usually end up realizing it should be a one-to-many relationship.

### Many-to-many

- common
- "X **has many** Y" and "Y **also has many** X"
- Example: a tweet has many hashtags, and a hashtag has many tweets.
- In relational databases:

  - **can't** support many-to-many _directly_ with two tables.
  - Instead, create **two one-to-many relationships**. (i.e., 3 tables)
  - Introduce a middle table ('join' or 'glue' table) between two tables
  - X has many M and Y has many M (each M belongs to both X and Y)
  - The 3rd table will have **2 foreign keys** to X and Y

Take a look at the following table:

```
+----------------------+
| assistance_requests |
+----------------------+
| PK | id |
| | name |
| FK | student_id | A student has many assistance requests.
| FK | teacher_id | A teacher accepts many assistance requests.
| FK | assignment_id |
| | created_at |
| | started_at |
| | completed_at |
| | student_rating |
| | teacher_rating |
+----------------------+
```

This is a join table that represents the _many-to-many_ relationship between students and teachers.

- A `teacher` can help many `students`.
- A `student` can be helped by many `teachers`.

This join table has more purpose. It holds lots of information relevant to the relationship

> There are no direct many-to-many relationships, only multiple one-to-many relationships using a join table.

![ERD crows feet](https://res.cloudinary.com/practicaldev/image/fetch/s--aMHSzLpu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/gjzq00ltrbmxqjx7i1wp.PNG)