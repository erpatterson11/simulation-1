<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Live Example

<a href="https://shelfie.devmountain.com/">Shelfie</a>

# Project Summary

This project is designed to replicate what you might receive on the job. There won't be any guided instruction on what you'll need to do. We will only provide you with design specifications and technical requirements. Your mentors have also been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code. This project is a chance for you to combine and showcase the skills you've learned so far.

With this specification/requirement only structure, we believe this project will showcase what you can do as an individual and how you can work with a team at this point of the program. Because of this, we feel this project will be worth putting in your portfolio.

After completing the project, host your project on `https://zeit.co/` and provide your mentor with the link.

Good luck and work hard!

# Color Palette & Font

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/colors.png" />

<b><a href="https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans">Google Font - Open Sans</a></b>

# Application Design

## Homepage

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/home.png" />

## Shelf - Bin List

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/shelf.png" />

## Bin - Inventory Details / Edit Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/bin.png" />

<br />

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/edit.png" />

## Add to Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/create.png" />

# Technical Requirements - Front-end

## Homepage
* User can select Shelf A - D.
* When a user selects a shelf they should be navigated to a view that displays the bins in that shelf.

## Shelf - Bin List

* The header at the top should act as a breadcrumb. Clicking on the `div` that contains the company's logo should navigate the user back to the homepage.
* The front-end should call the back-end for the `bins`'s data.
* All five bins should be listed.
  * If a bin is empty it should display `+ Add inventory`.
    * A user should be able to click on this `div` and be navigated to the `Add to Bin` view.
  * If a bin is not empty empty it should display `Bin #` with `#` being the number of the bin.
    * A user should be able to click on this `div` and be navigated to the `Bin - Inventory Details` view.


## Bin - Inventory Details / Edit Bin 
* The header at the top should act as a breadcrumb.
  * The `div` for the company logo should navigate to the homepage.
  * The `div` for the `Shelf` should navigate back to the `Bin List` for that shelf.
    * Example: `Shelf A` should navigate to the `Bin List` for shelf A.
* The input fields should not be editable on load of the view.
* A user should be able to click on the `EDIT` button.
  * The input fields should become editable.
  * The edit button should become a save button.
* A user should be able to click on the `SAVE` button to save changes made to the inventory.
  * The input fields should become un-editable.
  * The save button should become an edit button.
  * This should update the inventory for that bin in the database.
* A user should be able to click on the `DELETE` button to delete inventory from a bin.
  * This should remove the inventory from the bin in the database.
  * This should navigate the user back to the `Bin List` for the shelf. 

## Add to Bin

* A user should be able to add a name and price for the inventory.
* If you want to use custom images, add a field to add an image.
  * However, you can use this website to generate placeholder images: `http://lorempixel.com/200/200/business/`
* A user should be able to click on `+ Add Inventory`.
  * This should add inventory to the bin in the database.
  * This should navigate the user back to the `Bin List` for the shelf.

# Technical Requirements - Back-end

* The back-end should be created using express. 
* Massive should be used to establish a connection to your database.
* Express.static should be used to server your front-end files.
  * HINT: Use `npm build` to get production ready front-end files.

## Endpoints

* Shelves
  * GET - `/api/shelf/:id` - Returns an array of bin objects. If there is no bin, returns `null`.
    * Example: `[ {}, {}, null, null, {} ]`.
    * `:id` is the shelf id. Which can be 'A', 'B', 'C', or 'D'.
* Bins
  * GET - `/api/bin/:id` - Returns a bin object. If there is no bin, returns `null`.
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
  * PUT - `/api/bin/:id` - Updates and returns a bin object. 
    * This endpoint should only be accessible if there is a bin object.
    * `:id` is the shelf and bin id combined. Examples: 'A5', 'B1', 'C3'.
  * DELETE - `/api/bin/:id` - Deletes a bin object. Returns nothing.
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
  * POST `/api/bin/:id` - Creates a new bin object. Returns nothing.
    * This endpoint should only be accessible if there is not a bin object already. 
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.