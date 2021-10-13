# phase-5-project-bayminder


In this project I want to create a reminder application that can be used by family members or team members. They write to do lists and  assign them to team members and when they are done they click it to remove it from the dashboard. 

User Stories

•	As a user, I want to be able to create an account, so I can log in and use the app.

•	As a user, I want to be able to add reminder lists, remove lists, set reminder and assign them to members 



## Models and Relationships

- A `User` has many `Userlists`, and has many `List`s through `Userlist`s
- A `List` has many `Userlists`, and has many `User`s through `Userlist`s
- A `Userlist` belongs to a `User` and belongs to a `List`


<img width="716" alt="Screen Shot 2021-10-13 at 4 14 20 PM" src="https://user-images.githubusercontent.com/85143169/137225279-f355af79-eb34-4a23-8f12-0e4f32e8f1b9.png">



## Routes

## GET/users/lists

Return JSON data in the format below.

```json

[
  {
  "id": 1,
  "name": "Bay"
  },
  {
  "id": 2,
  "name": "Amgaa"
  }
 ]
 ```
 
 ## GET/users/:id
 ## POST/users/lists
 ## DELETE/lists/:id



## Wireframe/ Mockup

<img width="752" alt="Screen Shot 2021-10-12 at 3 11 29 PM" src="https://user-images.githubusercontent.com/85143169/137035941-2449e797-ae29-4f52-8550-4a58ef897aa0.png">

