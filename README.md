## MOSER

**MOSER** is a simple web app for Hacktiv8's bootcamp weekly assignment. MOSER features CRUD data for movies and tv series. Users can also add their favorite movie or tv series. The system is built by applying the concept of microservices.

**Demo: https://bit.ly/39sbt6y**



## Front-End

**Features:**

- **Create React App** to build a single page app
- **Apollo Client**  as a GraphQL management for fetch and state management

## Back-End

**Features**:

- **Microservices**. 
  - http://localhost:5000/ is API Orchestration
  - http://localhost:5001/movies is a microservice for CRUD movies
  - http://localhost:5002/series is a microservice for CRUD tv series
- **Apollo Server** as GraphQL server for API Orchestration
- **Express** as microservice server
- **MongoDB** as a database program for data movies and series
- **Redis** as a database cache

## Deployment

**Front-End**: Amazon S3

**Back-End**: Amazon EC2