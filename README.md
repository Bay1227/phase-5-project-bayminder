# phase-5-project-bayminder


In this project I want to create a reminder application that can be used by family members or team members. They write to do lists and  assign them to team members and when they are done they click it to remove it from the dashboard. 

User Stories

•	As a user, I want to be able to create an account, so I can log in and use the app.

•	As a user, I want to be able to add reminder lists, remove lists, set reminder and assign them to members 



## Models and Relationships

- A `User` has many `Userlists`, and has many `List`s through `Userlist`s
- A `List` has many `Userlists`, and has many `User`s through `Userlist`s
- A `Userlist` belongs to a `User` and belongs to a `List`




API 

5 RESTful routes [index, show, create, destroy, update]



Wireframe/ Mockup

<img width="752" alt="Screen Shot 2021-10-12 at 3 11 29 PM" src="https://user-images.githubusercontent.com/85143169/137035941-2449e797-ae29-4f52-8550-4a58ef897aa0.png">

