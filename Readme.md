## RaViOle - service for online reservation restaurants

#### The user can get acquainted with the list of restaurants in his city (so far two cities are available - Minsk and Kazan), see the location of restaurants on the map. On the restaurant page, you can find general information about the restaurant (opening hours, cuisine, menu, interior photos), book a table on the website, write a review.
#### For each review or booking, the user earns points.
#### Registration and authorization of users is implemented on the site, in your personal account you can see reservations, reviews, favorite restaurants

### **Test account:**

- Login: TestUser

- Password: 123456


## Total points: 620

General site features		|	100
----------------------------|-------
SPA		|	10
Routing		|	10
Loaders on images		|	10
The app works on phone, tablet, PC		|	10
The application is made in the same style		|	10
Saving and loading info using Local storage		|	10
Application theme changing to dark or light		|	10
Application language changing to english or russian		|	10
Login icon changing to user icon when user is logged in		|	10
City selection, all data updating according to the selected city		|	10

			
Header		|	10
----------------------------|-------
Burger-menu		|	10

Home Page		|	20
----------------------------|-------
Infinity Slider with autoplay		|	8
Slider with restaurants recommendations according to the selected city		|	8
Displaying user login when user is logged in		|	1
Responsive layout		|	3

Restaurants Catalog Page		|	95
----------------------------|-------
Map with all restaurants according to the selected city (map with zoom, centered according selected City)		|	25
Restaurants selection on the map, dispalying restaurants info on map tag		|	13
Section with all restaurants list according to the selected city		|	10
Custom scroll bar		|	2
Responsive layout		|	20
**Restaurant card:**	|	**25**
*Displaying all information about restaurant: work time, is restaurant open right now or not, reviews count, average mark, cuisine type, etc.*		|	*10*
*Button to add / delete a restaurant to favorites*		|	*5*
*Slider with restaurants photos*	|	*10*
			
Restaurant Page		|	145
----------------------------|-------
Section with information about restaurant: name, description, work time, is restaurant open now or not, reviews count, average mark, cuisine type, etc.		|	10
Button to add / delete a restaurant to favorites (only authorized user can add restaurant to favorites)		|	3
Slider with menu		|	10
Map with restaurant location		|	10
Section with users reviews		|	5
Slider with restaurants photo		|	10
Responsive layout		|	20
**Modal window for booking a table (only authorized user can book a table):**		|	**55**
*Selecting a date from the custom calendar*		|	*10*
*Selecting a time for reservation*		|	*10*
*Selecting a table on the cheme*		|	*15*
*Input guests data*		|	*5*
*Displaying all booking steps*		|	*10*
*Validate booking form* (guest phone: should start with "+" and contain minimum 9 characters, guest name: first letter capitalize and 2 or more letters )*		|	*5*
**Modal window for leaving a review (only authorized user can leave a review):**		|	**22**
*Stars for selecting a mark*		|	*10*
*Input guests review*		|	*5*
*Validate review form*		|	*5*
*Spinner*		|	*2*

Registration / Login Page		|	25
----------------------------|-------
Validate login (login should contain minimum 3 characters)		|	5
Validate email (email should looks like an email adress)		|	5
Validate phone (phone should start with "+" and contain minimum 9 characters)		|	5
Validate password (password should contains minimum 6 characters)		|	5
Dispalay errors		|	3
Spinner on buttons		|	2

User Page		|	45
----------------------------|-------
Displaying user information got from server		|	4
Displaying user bonus level according information got from server (different color and range according to bonuses)		|	5
**Modal window for changing user info**		|	**10**
*Validate email (should looks like an email address)* |	*6*
*Validate phone (should start with "+" and contain minimum 9 characters)*  |	*2*
*Validate password (should contains minimum 6 characters)*	|	*2*
*Check prev and current password*		|	*4*
**Section with user bookings**		|	**8**
*Information about restaurant (name, adress)*		|	*2*
*Information about booking time and date (day, mounth, week day, time)*		|	*2*
*Information about user, table number and booking duration*		|	*2*
*Button for cancel booking*		|	*2*
**Section with user reviews**		|	**7**
*Restaurant name*		|	*1*
*Stars count according to user mark*		|	*2*
*Modal window for changing user review*		|	*2*
*Button to delete review*		|	*1*
*Spinner*		|	*1*
**Section with user favourites restaurants**		|	**4**
*User can delete restaurant from favourites*		|	*2*
*User can go to restaurants page*		|	*2*
Button for log out, redirect to home page		|	2
Responsive layout		|	5

About Us Page		|	5
----------------------------|-------
Responsive layout		|	

Error 404 Page		|	5
----------------------------|-------
Responsive layout		|	


Back-end		|	170
----------------------------|-------
Written by hand (from scratch) and has a history of commits.		|	30
The back-end is deployed and responds to POSTman requests (an example request should be specified in the PR or Readme file).		|	30
REST API used.		|	20
Used MVC pattern.		|	20
Connecting and working with the database.		|	20
The all application data is stored in database.		|	20
Registration.		|	10
Authorization.		|	10
The application displays any statistics/images/tables, data for which it receives from the backend.		|	10


### POSTman requests examples:

BASE URL: **https://restaurants-server-3.onrender.com**


### Create User:

- Example:
 [![image.jpg](https://i.postimg.cc/tCK3pQCw/image.jpg)](https://postimg.cc/9rBRYk9Y)

- URL : /register

- Method: POST

- Headers: 'Content-Type': 'application/json'

- URL Params: None

- Query Params: None

- Data Params

```
{
    login: string;
    email: string;
    phone: string;
    password: string;
}
```

- Success Response:

Code: 201 CREATED

Content:
```
{
    "id": 42,
    "login": "postman",
    "password": "111111",
    "email": "eeeee@eeee.ru",
    "phone": "+123456789",
    "bonusPoints": 0,
    "favourites": [],
    "reviews": [],
    "bookings": []
}
```



### Get All Restaurants

- Example:

https://restaurants-server-3.onrender.com/cafe/city/Minsk

(available two cities: Minsk and Kazan)

- URL: /cafe/city/

- Method: GET

- Headers: None

- URL Params: None

- Query Params: None

- Data Params: None

- Success Response: 

Code: 200 OK

<details>
<summary>Content:</summary>

```
[
    {
        "id": 5,
        "name": "Morella",
        "city": "Minsk",
        "coordinates": [
            53.90492754124381,
            27.53969105434474
        ],
        "phone": "+375296440464",
        "workTimeStart": 12,
        "workTimeEnd": 23,
        "rating": "3.9",
        "averageCheck": "30",
        "images": [
            "img/rest3/images/1.jpg",
            "img/rest3/images/2.jpg",
            "img/rest3/images/3.jpg",
            "img/rest3/images/4.jpg",
            "img/rest3/images/5.jpg"
        ],
        "menuImg": [
            "img/rest3/menu/1.jpg",
            "img/rest3/menu/2.jpg",
            "img/rest3/menu/3.jpg",
            "img/rest3/menu/4.jpg"
        ],
        "translation": "{\"en\":{\"name\":\"Morella\",\"city\":\"Minsk\",\"address\":\"2 Sukhaya str.\",\"description\":\"Morella is a cafe in the heart of the capital, where it is equally pleasant to enjoy a business brunch and a friendly dinner in the company of exquisite Spanish—Italian cuisine and a warm atmosphere.\",\"cuisineType\":[\"European\",\"Italian\"]},\"ru\":{\"name\":\"Morella\",\"city\":\"Минск\",\"address\":\"ул. Сухая, 2\",\"description\":\"Morella — это кафе в сердце столицы, где одинаково приятно насладиться деловым бранчем и дружеским ужином в компании изысканной испанско-итальянской кухни и душевной атмосферы.\",\"cuisineType\":[\"Европейская\",\"Итальянская\"]}}",
        "bookings": [
            {
                "id": 80,
                "cafeId": 5,
                "guestId": 5,
                "tableId": 2,
                "createdAt": "2023-02-26T11:36:12.312Z",
                "date": "2023-03-02T15:00:00.000Z",
                "duration": 1,
                "guestPhone": "+2345633355",
                "guestName": "Vitia",
                "guestAmount": 2,
                "status": "active",
                "guest": {
                    "id": 5,
                    "login": "oleg2",
                    "password": "111111",
                    "email": "oleg2@gmail.com",
                    "phone": "+12345678910",
                    "bonusPoints": 68
                }
            }
        ],
        "reviews": [
            {
                "id": 5,
                "cafeId": 5,
                "authorId": 30,
                "text": "Just had one of the most incredible meals of my life at Jungsik. I ate at the bar and had that selection. I expected it to be good but it far exceeded our expectations. The depth of flavours and selections played well with each other . The chef made sure to create food that fit in with some of my restrictions due to medical problems. The servers are very welcoming, spent the time to explain the menu and gave wonderful suggestions. Service impeccable. The desserts are works of art in looks and taste. Cocktail suggestions were spot on and a delight.",
                "rating": 3,
                "author": {
                    "id": 30,
                    "login": "ole",
                    "password": "111111",
                    "email": "g@h7.ty",
                    "phone": "+12377777777",
                    "bonusPoints": 25
                }
            },
            {
                "id": 27,
                "cafeId": 5,
                "authorId": 33,
                "text": "Bold statement and to be fair we didn’t really try anywhere else as this place was so good!! Try the garlic knots but if you are with your significant other make sure you both have them as the amount of garlic on them is obscene!!!  ",
                "rating": 5,
                "author": {
                    "id": 33,
                    "login": "Alex",
                    "password": "111111",
                    "email": "www@rrr.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 51,
                "cafeId": 5,
                "authorId": 34,
                "text": "High priced, overrated and disappointing overall. Had high expectations given the ratings. Service was mediocre except for our waitress. Busboys were eager to clear your plate before even finishing your entree. Vitello tasted like fried beef jerky. Last call at 10:20 PM meant not for drinks but for food. Really ??\nWon’t be coming back anytime soon… ",
                "rating": 3,
                "author": {
                    "id": 34,
                    "login": "JordanM",
                    "password": "111111",
                    "email": "etrfv@vfby.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 78,
                "cafeId": 5,
                "authorId": 36,
                "text": "We came here for our first night's dinner on a recent trip to NYC. While the food was good, the pasta was well cooked, and the service was adequate - there were just too many people crammed into this small restaurant. We sat a two-top right next to the large open window to the front patio, after sidling in between tightly crammed tables and encouraging the table next to us to remove their purses from our seats and hold them on their laps. The small space was made a bit more uncomfortable by having very large format menus. If the physical size of the menu is greater than the distance between tables - it makes things extra challenging. In addition, the poor staff had to try to get in and around the restaurant with essentially no extra space at the serving stations, making things rough to avoid a bit of jostling. ",
                "rating": 5,
                "author": {
                    "id": 36,
                    "login": "MatthewReynolds",
                    "password": "111111",
                    "email": "eeeee@eeee.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 94,
                "cafeId": 5,
                "authorId": 37,
                "text": "I'm continually surprised by the number of people (out-of-towners?) who rate this restaurant highly. The food is so-so (the watermelon-and-feta salad we had on this visit contained only microscopic crumbs of feta), and the service is chaotic. We had to order three items twice, including sugar for iced tea -- which a waiter brought but then returned a little while later to take back again (when we weren't finished using it yet). They're also eager to clear your plates as quickly as possible (even while you're still eating). We've been giving this place another shot every year or so since it opened, hoping it would get its act together, but no more ",
                "rating": 2,
                "author": {
                    "id": 37,
                    "login": "Christopher",
                    "password": "111111",
                    "email": "eee@hhh.ty",
                    "phone": "+123456789999",
                    "bonusPoints": 25
                }
            },
            {
                "id": 111,
                "cafeId": 5,
                "authorId": 38,
                "text": "We had the best filet mignon steaks we’ve ever eaten here. Mine was so tender I was half-way through before I realised I was cutting it with a normal knife.\nBruno and his staff were very friendly and welcoming.\nWould definitely recommend a visit. ",
                "rating": 5,
                "author": {
                    "id": 38,
                    "login": "Jeanne",
                    "password": "111111",
                    "email": "rtdc@fgvhj.ru",
                    "phone": "+1111111111",
                    "bonusPoints": 25
                }
            },
            {
                "id": 189,
                "cafeId": 5,
                "authorId": 5,
                "text": "charming from the outside, cute brasserie with a French atmosphere but clearly lacks warmth in the greetings. The food is average at best. Had the snails and were borderline “insipid”. best to avoid if you are French and do not want to be disappointed.",
                "rating": 4,
                "author": {
                    "id": 5,
                    "login": "oleg2",
                    "password": "111111",
                    "email": "oleg2@gmail.com",
                    "phone": "+12345678910",
                    "bonusPoints": 68
                }
            }
        ]
    },
    
    …
]
```
</details>


