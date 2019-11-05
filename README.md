TESTS LIST

1.1. Source open in a new tab
-----------------------------
I've developped a test who clicked the first news of the list to see if it opens on a new tab, I then add a line who scan the href attribute to see if it has the right value. File name is open-new-tab.spec.js.
No problems faced


2.1. 5 news category : Top, New, Show, Ask, Job
-----------------------------------------------
This test analyze all the href attribute of the navbar to see if they match the category name. It matches. File name is 5-category.spec.js. No problems faced



3.1. Categories can be accessed everywhere
------------------------------------------
The aim of this test is to see if you can access and change categories nevermind where you are. I've made this test possible by changing page automatically and scan if all the categories are there and accessible. File name is menu-acces-everywhere.spec.js. No problems faced



4.1. Current category is visually different from others



5.1. Each category has its own page
-----------------------------------
I already did this one in 2.1


6.1. Each list must not contain more than 500 news and must be regrouped by 20's pack



7.1. Current page id, total page amount and browsing with previous and next arrow must be visible on each page



8.1. The current page id must be seen inside the url except for the page number one



9.1. Each news must have a title, a source, a grade from the community, news sharer's username, date of sharing, 
commentary number



10.1. Clicking on the sharing username under each news display his username, number of days between his profile's 
creation and today




11.1. Each user's profile have its own page with its onw url shaped like this : /user/<username>



12.1. Each news must have its own commentary thread showing their total number, each commentary must show the 
username of the user who posts it, a link to his profile and how old is the commentary


13.1. Commentary thread can be accessed through a link on the news


14.1. Commentary threads have their own pages with a recall of the news info


15.1. Commentary threads can be shrinked and only shows the number of answers or expanded and shows each answers


16.1. Each news title from Show category must start with Show HN


17.1. News from Ask category are ony commentary thread, they doesn't open in a new tab



18.1. The aggregator must be responsive


19.1. News feed must refresh automatically


20.1. Implementation must be HTTPS secured


21.1. The aggregator must be fast and show each list the shortest time it can
