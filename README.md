# StoQuotes
Hi, welcome to StoQuotes. StoQuotes is a Javascript frontend app with a Ruby on Rails API backbend where users have the ability to get quotes from a rich variety of methods, and write a story for any given quote. StoQuotes is my fourth milestone project at the Flatiron School software engineering program. StoQuotes is a revamp of my very first app (a CLI ruby app), with many more functionalities added. For reference, the backend repo for StoQuotes can be found [here](https://github.com/mmartinezluis/stoquotes-backend). You can find also a Medium article for StoQuotes [here](https://luis-mmartinez.medium.com/javascript-event-listeners-f733052ab0c0). 

## Functionality
StoQuotes consists of two main components: a Quote rendering and Story writing component, and a Story reading and editing component. I call the first component the "Black Box", as the box supports more than ten different functionalities. In Stoquotes users have the ability to:
* Get a description of the functionalities of the app on the app's landing tab, the Home tab.
* Get a random quote upon clicking the Quote tab, and continue to get a new random quote for each click on the Quote tab.
* Get a list of ten random authors upon clicking the Authors tab, and continue to get a new set of ten random authors upon each click on the Authors tab (the new set replaces the previous set upon each click).
* Get a list of ten categories upon clicking the Categories tab.
* Get an author-search form upon clicking the Search Author tab.
* Write a story within the Quute tab upon clicking on the "Wrtie a Story" button after the quote is rendered.
* Get a quote from any given author in the Authors tab upon clicking on an author's name, and continue to get a new quote from the author for each click on the author's name.
* Write a story for any quote rendered in the Authors tab.
* Get a quote upon clicking on any category name in the Categories tab, and continue to get a new quote from the clicked category for each click.
* Write a story for any quote rendered in the Categories tab. 
* Write the name of an author in the form rendered by the Author Search tab. The name of the author will show up as an option if the author is in the database. Upon clicking on the "Get Quote" button, a quote from the selected author will be rendered; in addition, a new quote from the selected author will be renderd for each click on the "Get Quote" button. 
* Write a story for any quote rendered in the Search Author tab. 
* Some more functionalities...

Video walkthrough on YouTube: https://www.youtube.com/watch?v=XCZ_UWmuG4Y&t=63s

## Installation
To run the app in your local machine follow the next steps:
1. Clone this repository to your local machine:
``` ruby
$ git clone https://github.com/mmartinezluis/stoquotes-fronend.git
```

2. Clone the [backend API repository](https://github.com/mmartinezluis/stoquotes-backend) for this app to your local machine:
``` ruby
$ git clone https://github.com/mmartinezluis/stoquotes-backend.git
```

3. In the backend respository, run `bundle install` to install lthe required gems. Then run `rails db:migrate` to crreate the migrations.

4. Again, in the backend repository, run 
```ruby
$ rails db:seed
```
(caution: once you run `rails db:seed`, the API will create more than 700 authors and more than 23,000 quotes with associations; it can take up to 7 minutes for this process to run; do not close the app or run other commands while the seeding process is in progress)

5. Finally, for the backend, run
```ruby 
$ rails server
```

6. Last, for the frontend repository, open the file `index.html` using a live server (either right click on the file and click on 'Open with live server' or click on 'Go Live' on the blue bottom bar if using VS code). And now you are ready to go.

## Contributing
Contributions and pull requests are welcomed. You can also create an issue to report a bug or make a request. For pull requests, you may follow these steps:
1. Fork and clone this repository.
2. Create a branch name denoting the feature or bug. For example: `git checkout -b feature/new-feature` or `git checkout -b bug/bug-fix`.
3. Write your code and submit changes with a clear commit message.
4. Push to the branch with `git push origin feature/new-feature`. 
5. Create a pull request, and explain the reason for the requested change (why the written code should be implemented).

## License
StoQuotes is available as open source under the terms of the [MIT License](https://github.com/mmartinezluis/stoquotes-frontend/blob/main/LICENSE.md). 