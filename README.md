# Bat Url Shortener
Live Application Link: <https://baturls.netlify.app/>

Client Repository: <https://github.com/shamimferdous/bat-url-shortener-client__reactjs>

Server Repository: <https://github.com/shamimferdous/bat-url-shortener-server__java-spring-boot-postgresql-hibernate-jpa>

Bat Url Shortener is a url shortening service. The server is written in `Java` using the `Spring Boot` framework. For database layer `Postgresql` is used with `Hibernate` and `Spring Data JPA`. 
The frontend is built with `ReactJS`.

# APIs
```sh
/url
```
  - HTTP Method - Post
  - Parameter(s) - "mainUrl": String 
  - Takes the mainUrl as input then generates a unique short string "shortUrl" and "timestamp". Then inserts the record in database and returns it as response in JSON format. 

```sh
/urls
```
  - HTTP Method - Get
  - Parameter(s) - None
  - Sorts all url recordes in descending order based on the "timestamp" field and returns them as response in JSON format


```sh
/:shortUrl
```
  - HTTP Method - Get
  - Parameter(s) - "shortUrl": String
  - This is the main redirection api. It grabbes the shortUrl param from the url and searches the database to find a match. If a matched document is found it redirects the request to the mainUrl of that document. 
  https://baturls.herokuapp.com/ytevpygcgi visiting this link will redirect you to https://youtube.com

# Note
This is just a random coding and fun app. Just wanted to mess around with Java Spring Boot and Hibernate. I don't think i'll ever use this as a real life application. I mean for a real life url shortener I wouldn't even use Java in the first place. xD

# License

MIT

**Free Software, Hell Yeah!**
