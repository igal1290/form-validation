# form-validation 
**View Project =>** https://form-validation-noden.netlify.app/
# About the Project
Very simple, yet very important when it comes to frontend development.
Frontend developers build and validate forms on a daily basis. 
Therefore, it is very crucial to understand how to build one from start to finish using frontend technologies like React, HTML5 and CSS3.
# Technologies Used
**React** <br/>
**CSS3**
# Screenshots
This is how the project looks without any validation <br/>
![form1](https://user-images.githubusercontent.com/60958225/154352265-b9e0fdeb-d0a8-4958-9735-7ac1d37fe7a1.PNG)
<br/>
<br/>
As soon as the sign up button is clicked without any input, we get an error saying that the fields are required in order to sign up. <br/>
![form2](https://user-images.githubusercontent.com/60958225/154355907-0684e889-4fbe-4f55-9190-1e9fdb0cc35f.PNG)
<br/>
<br/>
Here it shows us new errors stating that username and password must be between a specific amount of characters and the email must be a valid email. <br/>
![form3](https://user-images.githubusercontent.com/60958225/154355963-8d4c9ccd-62b4-4266-89be-51f2dbad9ed7.PNG)
<br/>
<br/>
If the password does not match the password confirmation, it will show an error stating that it doesn't match. <br/>
![form4](https://user-images.githubusercontent.com/60958225/154355997-2d093529-2650-4683-8bda-9bd4d787e44a.PNG)
<br/>
<br/>
We can navigate into the sign in page either by clicking on the sign in link at the bottom of the form, or when we successfully create an account, it automatically navigates us to the sign in page. <br/>
![form5](https://user-images.githubusercontent.com/60958225/154356763-838708dc-ebc9-4b42-85b0-5ea6f98a2e4a.PNG)
# Approach
1. **React Router V6:** is used in order to navigate between two pages. The first page is the sign up page, which is also the homepage.
The second page is the sign in page.
2. **Custom Hooks:** I created a custom hook called **useForm** in order to keep all of the hooks and handle functions inside this file.
This keeps our code very neat, clean and reusable. <br/>
**The hooks and handle functions that were used**: <br/>
- **useState:**
There are 3 states that were used in this project. The first one is to manage our form values like the username, email and password.
The second one is for the errors to store all of our error values inside an object.
And the submitting state to toggle between submitting and not submitting when we submit the form on sign up.
- **useNavigate:**
The useNavigate hook was used inside the useEffect hook to navigate into the sign in page after the account is successfully created.
- **useEffect:**
The useEffect hook is a side effect to navigate into the sign in page if no errors were found and the account was successfully created.
- **Handle Change:**
The handleChange function lets us change the state of the value every time we type.
- **Handle Submit:**
The handleSubmit submits the form and checks if there are any errors.
3. **Validation:**
For the validation, I created a seperate JS file and inserted all of the logic inside a function called **formValidation**.
The function takes in the values from our custom hook and intializes a new object called errors. Each time the condition is false, the error values is being inserted into the errors object.
The function returns the errors as an object.
