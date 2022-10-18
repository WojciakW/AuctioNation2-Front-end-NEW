# AuctioNation2 **Front-End**
**Work in progress**

## About AuctioNation Project:
*To check out the first version's source go to:
https://github.com/WojciakW/Auctionation-WoW*

*All data is provided by Blizzard's WoW Classic API.
Item data thanks to **wow-classic-items** https://github.com/nexus-devs/wow-classic-items*

It is a social web app for World of Warcraft Classic live auction house statistics created using the following:
-   **First version (AuctioNation-WoW 1)**:
    - Python,
    - Django,
    - Django REST Framework,
    - PostgreSQL Database,
    - Bootstrap CSS,
    - Vanilla JS + Chart.js (graphs)
-   **Second version (AuctioNation-WoW 2)**:
    - Back-end:
        - Python,
        - PostgreSQL Database,
        - Custom reads/writes controller using *psycopg2*, *numpy* and *multiprocessing* ,
        - API request/response handling using FastAPI (**in progress**),
        - User-related ORM (**in progress**),
        - Linux cron job scheduler (**TODO**)
    - **Front-end**:
        - base HTML, CSS, JavaScript,
        - ReactJS (**in progress**),
        - React Router (**TODO**),
        - React Redux (**TODO**)

## Preview (landing page only for now)
![](https://github.com/WojciakW/AuctioNation2-Front-end-NEW/blob/master/preview/main.png?raw=true)

### AuctioNation project Key features:
- Automated 1-hour-cycle database handling:
  - fetching live World of Warcraft auctions data from official Blizzard API,
  - computing various statistics,
  - archiving data.
- Possibility to view every single item data on every official realm, faction side, that is:
  - auctions count,
  - lowest buyout,
  - mean buyout,
  - median buyout,
- Data presented in form of graphs,
- User account base,
- Support for comments on any item stats,
- Various UX, like:
    - one field for item OR auction search,
    - dynamic page rewriting,
    - user Observed items list,