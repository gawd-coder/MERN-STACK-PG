# MERN-STACK-PG
A Full Stack Shopping List built with MERN Stack

Backend server built with Express, MongoDB Atlas and mongoose.Added the MongoDB Atlas URI key in config/keys.js. Running the script with nodemon to connect to MongoDB:

![image](https://user-images.githubusercontent.com/57283161/82746452-9c92f080-9dad-11ea-8028-a0364d0d96cb.png)

Defined the database model in models/Item.js. Then defined the API calls(GET,POST and DELETE) in routes/api/items.js. Testing the requests with Postman: 

1.POST Request
![image](https://user-images.githubusercontent.com/57283161/82746542-8cc7dc00-9dae-11ea-9239-9324bad5059c.png)

2.GET Request
![image](https://user-images.githubusercontent.com/57283161/82746552-b8e35d00-9dae-11ea-85eb-8bcf97c91851.png)

3.DELETE Request
![image](https://user-images.githubusercontent.com/57283161/82746566-e92afb80-9dae-11ea-8857-0b3046380f78.png)
![image](https://user-images.githubusercontent.com/57283161/82746571-f942db00-9dae-11ea-9bed-59f0b634552b.png)

Client Setup => 
1.Setup client side usign create-react-app npm package

2.Added proxy under client/package.json so as to avoid typing whole web address each time.

3.Added properties under scripts of backend package.json file so as to run client and backend server simultaneously with a single command using concurrently dependency
![image](https://user-images.githubusercontent.com/57283161/82748472-c2c18c00-9dbf-11ea-8bab-b4008e746432.png)

![image](https://user-images.githubusercontent.com/57283161/82748494-eab0ef80-9dbf-11ea-8b2c-f93bc1cf7ee4.png)

Used Reactstrap to implement bootstrap in React and then added Components

1. After adding AppNavbar component
![image](https://user-images.githubusercontent.com/57283161/82750004-de7e5f80-9dca-11ea-8f67-c260bf1cc456.png)

2.After adding ShoppingList component
![image](https://user-images.githubusercontent.com/57283161/82750026-11285800-9dcb-11ea-93ac-fd6f3834435c.png)
![image](https://user-images.githubusercontent.com/57283161/82750028-15ed0c00-9dcb-11ea-958b-fdd80123a04c.png)
