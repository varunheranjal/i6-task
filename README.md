# i6-task
Automation task for i6 for validating the Contact Us form and the respective error messages seen.

In order to run this project in your local system, please ensure you have Visual Studio Code (IDE) set up
Create a New Project in Visual studio
Clone this repository by running the command "git clone https://github.com/varunheranjal/i6-task.git" in a New Terminal window in Visual Studio

Things to note:
When i wrote these tests to input the parameters into the 'Contact us' form, I used both Page Object Pattern/Model approach And also used a Cypress "Custom Command". The reason i did this is because, a 'customised' one time scenario.. and also the entire actions can be squeezed into One Single Row as shown below after the commented code ... From a performance perspective, both approaches take exactly 10 seconds to run so doesn't matter much really but this is one way i wanted to showcase the different ways of writing the code.
Finally, the Verification of the Form Validation Messages was the Tricky part as these messages are not generated via the DOM and instead these are inbuilt HTML form validations which are displayed by the "Browser" itself, so in order to validate these messages, I had to utilise the CSS " :invalid " pseudo class on each of the respective input element.

I hope this looks OK? :-) Thanks a lot! Cheers!
