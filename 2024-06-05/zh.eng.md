# Web Programming Exam

## Important information

- You have **210 minutes** to complete the exam. Filling in the included `README.eng.md` template, reading the tasks, downloading the materials, compressing and uploading your solution is **included** in the time limit.
- Solutions must be uploaded to exam system. **The system closes at deadline and there will be not be able to submit your solution after the aforementioned time**.
- You can use your pre-uploaded materials in the Exam System to solve the problems, and the [JavaScript](https://developer.mozilla.org/en-US/) and [PHP documentation](https://www.php.net/) enabled in test mode. **Human assistance** (synchronous, asynchronous, chat, forum, etc.) **and artificial intelligence** (ChatGPT, Bing AI, GitHub Copilot, etc.) **are not allowed during the duration of the exam!** You agree to accept them in the `README.eng.md` file in the starter pack, in which you also acknowledge the possible consequences.
- The tasks are independent and can be solved **in any order**.
- To begin your work you should first [download the starting package we have prepared](???). Each task is stored in a separate library. In each directory we have prepared the HTML, CSS, JavaScript, PHP files. Work in those directories! In the client-side tasks, you usually only need to edit the `.js` file, but you can modify the HTML if you need to, and you can even split your solution into several `.js` files, but this is not expected.
- The starting package contains a template called `README.eng.md` where you should fill in your name and Neptun code (the <> characters must be removed). **Submissions without a properly filled `README.eng.md` file will not be graded!**
- Each directory contains a file named `TASKS.md`. Replace the space in `[ ]` with an `x` where you have (even partially) succeeded to complete the task. This will make us easier to find your solution when we grade your exam.
- To install PHP, download the [`PhpComposerInstaller.exe`](???) file and execute it!

## JavaScript tasks

### 1. Planets (js-1-planets, 10 points)

 SG-1 has already explored multiple planets and is familiar with their inhabitants. They have compiled each planet's essential attributes into a single dataset. General Hammond tasked you with creating a report to address his inquiries. The `planets.js` file, already embedded in the initial HTML document, defines a `planets` array whose elements describe the planets that already discovered by SG-1 (name, designation, description, inhabitants, minimum temperature in celsius, maximum temperature in celsius, connection with earth). Look at the data structure, then use this array to solve **programmatically** the following problems. _(Help: the attached image shows the correct answers.)_ Since `index.js` is embedded in the document after the `planets.js` script, the latter can use the array in the former without any problems, as shown by the `console.log()` you have entered.

- a. (1 point) In the element with ID `task1`, write the total number of planets in the array.
- b. (2 points) In the element with ID `task2`, write the number of planets in the array which could be accessed from Earth.
- c. (2 points) In the element with ID `task3`, write the average mean temperature of the planets. (Rounding is not necessary.)
- d. (2 points) In the element with ID `task4`, write the coldest planet with the corresponding temperature.
- e. (3 points) In the element with ID `task5`, list all the different species inhabit the planets! Please consider that not only one species inhabits each planet, but more could live alongside each other.


### 2. Dialer (js-2-dialer, 14 points)

The program used to dial the Stargate is quite outdated, and we need a much more modern version. The dialer needs to accept 7 glyphs. Each glyph represents a unique coordinate in space, allowing the Stargate to establish a connection to another Stargate at a specific location in the galaxy. Glyphs are part of the address system for dialling other planets. The seventh glyph, also known as the Point of Origin, is unique to each Stargate and serves as a reference point for the gate network. Unlike the other glyphs, representing spatial coordinates, the Point of Origin is specific to the individual Stargate's location in space.

- a. (1 point) Based on the `planets` array of the `addresses.js` file, generate the dialer into the `signs` object. You can find the value of each cell in the `src` folder with the image of the corresponding wedge sign.
- b. (1 point) For each click, add the `selected` class to the cell of the table with a sign.
- c. (2 points) Store the selected signs and solve that one sign could be selected once. 
- d. (1 point) Display the `message` div with any message after seven selected sign.
- e. (2 points) Solve the contents of points b-c and f-g using the delegate function.
- f. (3 points) After selecting the 7th wedge, examine the `glyphs` array of each stored planet, and depending on the match, display a message in the `message` div.
- g. (2 points) When selecting individual wedge locks, place the selected wedge sign in the corresponding cell of the ``address'' object above the table.
- h. (2 points) By clicking on individual cells of the `address` object, remove the given sign from the address, and the next time you click, the selected lock will be placed. This ensures the possibility of correction.

### 3. Starmap (js-3-starmap, 12 points)

Over the years, the Stargate project outgrew SG-1's resources, so they set up several SG teams. To easily follow the movements of each team, you will be entrusted with the development of a star map. To easily implement the star map, we use the following simplification. Each mission stays on the given planet for 15 seconds, and since the length of the Stargate passage does not depend on the distance, the passage should be a uniform 5 seconds. Take these into account and solve the tasks below.

- the. (1 point) In place of the coordinates of the Earth, draw a red circle with a radius of 8px.
- b. (2 points) Display a light green circle with a radius of 5px at each user click and connect the earth and the planet with a 2px thick line.
- c. (3 points) When you click, create a team in the background whose initial coordinate is the ground and whose initial speed corresponds to 5 seconds of travel. At the same time, the team should start towards the target.
- d. (3 points) When the team reaches the planet, stop it for 15 seconds, then start it back towards Earth.
- e. (3 points) When the team returns to the ground, eliminate the team.


## PHP tasks

### 4. Tribute (php-4-tribute, 10 points)

The creators of the series decided to create a page to commemorate the end of the series. Help them to display the games on the new main page!


- a. (1 point) Within the element with the identifier `#content`, list a `div` of the `char` style class for each element of the `characters` array in the `data.php` file! A `div` can contain any attribute of that element
- b. (2 points) Place an image in each `div.char` element, the source of which can be generated from the `image` attribute of the given character. Each image's path is an element of the `src/` folder with the given name.
- c. (1 point) Set each image's `alt` attribute to the `name` attribute of the game!
- d. In each `div.char` element, place an `info` style class element with the following content:
    - 1 point: The real name of the film actor.
    - 2 points: If the character is still alive, then his age; if he has already passed away, then the year of his death.
- e. (1 point) If the given actor is no longer alive, use the `died' style class on his picture.
- f. (2 points) Create a `div' above the `#content` element, which adopts the `.celebrate` style and contains the name and birthday of the living character whose birthday is closest to today.


### 5. Registration (php-5-registration, 12 points)

Hopefully, we have completed the memorial page, but it may be noticeable that the list of loved ones needs to be completed. Uploading such a database is a challenging feat, so you need to create a registration interface that can be used to upload additional elements.

- a. (2 points) All fields are mandatory except for the time of death.
- b. (1 point) The real name of the character in the film must consist of at least three characters.
- c. (1 point) The e-mail address must be formally correct.
- d. (2 points) Dates must be in the correct format.
- e. (2 point) The film must be one of the values ​​in the list below:
 - `['Stargate', 'ArkOfTruth', 'Continuum', 'SG-1', 'Infinity', 'Atlantis', 'Universe', 'Origins']`
- f. (1 point) The form's text fields must be state-retaining, i.e., the entered values ​​must remain even after sending!
- g. (2 point) The drop-down menu should also maintain state!
- h. (1 point) In case of correct filling (and only then), the element with the identification `confirmation' should appear!


### 6. Warehouse (php-6-warehouse, 14 points)

During its travels, CSK-1 has returned with a large number of different objects. You were asked to build a suitable warehouse management system for them.

- the. (2 points) Using the form on the left at the top of the page, it should be possible to create a new category by specifying its name and classification!
- b. (2 points) In the right-hand form at the top of the page, fill in the drop-down menu with the names of the created categories!
- c. (2 points) When submitting the form on the right, save the name of the object to which category and which site we assigned it.
- d. (3 points) Display the names of the categories and the objects in them as shown in the sample, three-level!
- e. (3 points) Next to each item, there should be a link labelled `Modify` which can be clicked to modify the subject's data!
- f. (2 points) Next to each item, there should be a link labelled `Delete`, which can be clicked to remove the item from the warehouse!