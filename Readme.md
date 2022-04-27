# My Piggy Bank || Ruby on Rails Backend + JS ES6, React, Redux Frontend

This Ruby Backend + React/Redux/JSES6 Application was created in the GitHub link below:

https://github.com/daliayan/My_Piggy_Bank.git

There was an error that created a disconnection in the application so I created a new repository, and brought the bones of the old application over to this githome. Thankfully, if you're still reading this I was able to transfer my application over to its new home.

I created the backend of my application using the command:
```bash
rails new backend --api database=postgresql.
```
The front end of this project was created with [Create React App](https://github.com/facebook/create-react-app).

## Description of the Application

I was inspired by the Netflix Hit TV show Squid Games when creating this project. In short, there's a piggy bank that increases in value within the show, and I was inspired to create my own piggy bank. The application allows the user to create their own piggy bank complete with a: name, gender, and monetary value of your choosing.

## Installation

Use this link to clone my GitHub repository:
```bash
gh repo clone daliayan/NewPiggyBank
```

From there in the terminal cd into the backend folder of the application. Once in the correct folder run the following command in your terminal to ensure you have the required gems to run the application:
```bash
bundle install
```

Following this step, you can run the following command to start up the backend server:
```bash
rails s
```

Now that you have the backend server retrieving data in your webpage, you cd back into the PiggyBank folder. Here you navigate into the frontend folder using the command: cd frontend. Now that you're in the correct folder, you can enter the following command into the terminal to start up the application.
```bash
npm install
npm start
```
You now have access to create your own Piggy Banks.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/daliayan/NewPiggyBank. This project is intended to be a safe, welcoming space for collaboration, and contributors.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Read & Watch More About My Experience Making This Application
- My Blog Link: https://daliayan.medium.com/making-piggy-banks-using-react-and-redux-d99007c86772
- Coding Walk Through: https://www.youtube.com/watch?v=qMwGWgAyqg8
- Application Walk Through: https://www.youtube.com/watch?v=sQjwll8Flq4
