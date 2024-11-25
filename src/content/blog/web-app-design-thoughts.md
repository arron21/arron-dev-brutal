---
date: "2020-05-17"
title: Web App Design, Thoughts
tag: post

---
Websites, and moreso relevant to my daily work, Webapps tend to follow some basic tried and true principles to their design. It may be the classic F pattern, or a top nav, or a side nav. It might be master details. What I am pondering tonight is how and why we design web apps the way we do. Do web app take their design inspiration from web sites, or from native desktop programs. What about operating systems? The operating system itself is just a container program that runs smaller programs.

There has been talk of "micro frontends". It's the concept of housing multiple web apps inside 1 unified container. Each app could be built with an entirely different codebase and all interacted with in the same parent web app. Kind of like running different programs on an operating system.

The main difference would be that in a web app there is generally 1 goal that is trying to be accomplished, where in an operating system that hosts many programs each goal could be quite different.

Something that intrigues me though is that an operating system has a specific ui/ux for interacting with it. All programs are started the same way, and most are ended the same way. Program state is generally self contained, and it is easy to switch between programs without losing your place in whatever workflow you happen to be in. Also on a operating system the program tends to take up most of the screen. The navigation/task bar tends to stay out of the way.

Web apps have some striking differences. Most navigations/task bars take up a great deal of real estate. For a website this makes sense, but for a web app that is to be used to accomplish a specific goal repeatedly it doesn't make as much sense. 

Shouldn't the goal of a web app take up most of the screen similar to how a desktop program would?

What about users who like to resize their desktop windows, and put windows side by side. Why don't web apps allow for this type of "window freedom"?. 

We force our users to use our predetermined sizes, our various rectangles, and generally only 1 rectangle at a time; And only 1 type of rectangle at a time.

What if we allowed for 2 detail views to be open at the same time. Or what if we had a detail view, and then another window that has a workflow that would then cause the State in the detail view window to update.

I think that in the future we will start to see more web apps that mimic operating system style user interfaces.