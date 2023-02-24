# &lt;/salt&gt;

## Salt Shopping Wish list

In this exercise your task is to create a simple shopping wish list app - no backend required.
Exactly how you implement and design this is up to you - but your solution should be implemented in the files `index.html`, `wishlist.ts` (that gets transpiled to `/dist/wishlist.js`) and `style/wishlist.css` in the `src` folder. You may use the screenshot at the bottom of this page as inspiration.

There is a script already set up for you to get started developing quickly. Get going with `npm run dev`. Read the scripts to understand what it's doing and which dependencies it's using in order for you to get up and running this quickly.

Take care reading the UI and Technical specifications below as they are in a different format to before, they follow the [RFC2119](<https://www.ietf.org/rfc/rfc2119.txt>) specification.

### UI specifications

- There MUST be a form input where the user can add a new card.
- When the user submits a new card from the form the card MUST appear in the list.
- Each card MUST be toggle-able between 'done' and 'not done'.
- There MUST be a remove-button on cards that are 'done' and when the user clicks the button it will be removed from the list completely.
- Cards which are set to 'done' MUST appear on the bottom of the list, and they SHOULD be easy to visually separate.
- The original order of the cards MUST be maintained if you toggle a card to 'done' and then back again.
- It SHOULD be easy to add, toggle and remove cards. For example adding a new card by hitting the 'Enter'-button

>Feel free to take inspiration from examples which are abundant online. But make sure to not copy-paste solutions as that would be considered cheating.

### Technical requirements

- You MUST keep the shopping wish list in a state object and _NOT_ in the DOM, and render the view based on the state.
- You MUST use Semantic html elements.
- You MUST use a clear naming strategy for your css and class names.
- You SHOULD use BEM.
- You SHOULD have a mobile first approach.
- You SHOULD persist the state in [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). (This is actually really simple once you have a state object. If doing this, when the app is closed and then opened again the state in the application MUST be restored)

### Tech specification for test correction

You have been equipped with a `cypress` test folder. Cypress is a framework used for testing user interfaces.
These are end-to-end-test suite (e2e test) that we will also use to automate correcting your tests. In order for the automated correction to run properly you will need to follow the rule set below.

- to add a new card we will type in an input field with  `data-testid="txtCardTitle` and then click an element with id `data-testid="btnAddCard"`
- to see how many items the list have we will look for an element with  `data-testid="cardList"` and count children
- to find out if a card is complete we will look for a class `list__item--completed`
- to find out if a card is NOT completed we will check if the `list__item--completed` class is not present
- to toggle if a card is completed, we will click an element with  `data-testid="cardItem"`
- to remove a card we will click an element with `data-testid="btnDeleteCard"`

Running the tests locally makes sure that you are following these rules.
We will only run tests that enforce these rules, but we may run _more_ tests than we have supplied you with.

### A few tips on the way

- Check the console, make sure it's clean before sending in the code (cypress will help you with this too!)
- Keep your code modular (build small functions, think that each function should have one single responsibility)
- Use modern JavaScript
- Think about naming your variables and functions in a way that make the code self-documenting
- Use consistent naming (in other words, use BEM)
- Use semantic html (e.g use the form element)
- Use a css reset or normalize (or sensible defaults for elements)

Have fun!!

|   ![Shopping wish list](shopping-wish-list.png)   |
| :-------------------: |
| Example of a shopping wish list app |

## Handing in the solution

Upload all the files of your app (_no node modules please, as usual_) in a folder called `shoppingWishList`.

## FAQ

Do we need to make the mobile view fully responsive?

> This is a good project to put in your own portfolio for later usage, i.e. make it good. But no, it's not one of the requirements.

When we hand it in - do we only upload the 3 files `index.html`, `wishlist.ts` and `wishlist.css`?

> No, you should upload all the files of your app (_except for any node modules_).

Since the design is up to us, do we need to make sure our CSS works in good old Internet Explorer or can we skip that nightmare this time?

> No, it's not one of the requirements.

Does the type of the button matter? Like, is it expected to be "submit" since it's in a form, or is "button" fine as well?

> This test isn’t about details like that, but rather to create a well-functioning application and to show us some good, readable and consistent code. But what we can say is that it’s always a good idea to use semantic HTML.
