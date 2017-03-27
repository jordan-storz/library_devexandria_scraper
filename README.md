# Web Scraper service for Library of Devexandria
## Node + Express server that uses Cheerio to scrape information for bookmarks.

### This application also leverages Ramda to create composed chains of functions. The Components folder houses pure functions that transform data. The IO folder contains functions which have side effects - they're all promise-based. The Missions folder contain functions that combine components and io services into micro-programs that execute a certain task. Missions are then glued together in main.js

The repo for the client and Rails servers are listed below:
Client : https://github.com/jordan-storz/library_devexandria_client
Rails  : https://github.com/jordan-storz/library_devexandria_api
