<h1 align='center'>Ukraine War News API</h1>

![image](https://wallpaperaccess.com/full/1330359.jpg)

## About
A simple api that scraps a number of major news journals for articles related to the ongoing war in Ukraine

## Documentation
The endpoint **_/news_** returns all articles that contain news about Ukranie from the sources listed below :

- The Guardian
- The New York Times
- The Economist
- The Telegraph
- Der Spiegl
- Le Figaro
- The Bulletin
- The Washington Post
- Bulletin of the Atomic Scientists
- The New York Post
- El Pais (english version)

The endpoint **_/news/:newspaperId_** returns all articles that contain news about Ukrania from the specified source
Example : **_/news/the guardian_** will return all articles that contain news about Ukrania from The Guardian<br>
List of specific newspaper Id’s :

- /the guardian
- /nyt
- /the economist
- /the telegraph
- /der spiegel
- /le figaro
- /the bulletin
- /wsj
- /nyp
- /el pais

## Deployment links
Heroku link:
https://ukrainewarnews.herokuapp.com/ <br>
Rapid API link:
https://rapidapi.com/AngelRafaelGO/api/ukraine-war-live1/

## Build with
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px"></a>
<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/tomchen/stack-icons/blob/master/logos/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>
