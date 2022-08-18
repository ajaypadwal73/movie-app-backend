# Steps to start the server up and running on your local:
- Clone the repository
- npm install
- Use the example.env as a sample env and fill the 
- npm run start 

# Curl requests you can import and use to test the routes
- Add a movie
```sh
curl --location --request POST 'http://localhost:2000/api/addMovie' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Infinity War",
    "photoUrl": "https://movie-app-rti.s3.us-east-2.amazonaws.com/4.jpg",
    "storyOutline": "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU).",
    "rating": 7,
    "duration": 180,
    "trailers": [
        "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
        "https://www.youtube.com/watch?v=QwievZ1Tx-8"
    ]
```

- Get movies
```sh
curl --location --request GET 'http://localhost:2000/api/getMoviesList'
```

- Get Movies by offset and limit
```sh
http://localhost:3000/api/getMoviesList?offset=10&limit=10
```

- Get movie details by id
```sh
curl --location --request GET 'http://localhost:2000/api/getMovieData/62fd67457c7140c7ebe7ae87'
```


