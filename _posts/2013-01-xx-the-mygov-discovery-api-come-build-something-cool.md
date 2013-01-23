---
title: Introducing the MyGov Discovery API: Come Build Something Cool
description:
author: Benjamin J. Balter
layout: post
comments: true
sharing: true
category: Announcements
tags:
	- Open Source
	- Developers
	- Community
	- Code
	- API
published: false
---

Last week we announced the [MyGov Discovery Bar](http://presidential-innovation-fellows.github.com/mygov/2013/01/15/Introducing-MyGov-Discovery-Bar/), but this week we'd like to dive a bit deeper by taking a look at the API that powers it in hopes that developers within the broader open-government community can use it to help improve the citizen experience.

Thy MyGov Discovery API exposed all the information that's normally available via the MyGov Discovery Bar in a open, machine-readable format. In fact, the Discovery Bar itself consumes the API in a process jokingly referred to as *eating your own dog food*. Why would we do this? Two reasons: First, exposing an API to collect and retrieve information at the onsent, and then going back to build the a layer to display it forces us to separate data from presentation, and allows the system to be more flexible. The Discovery Bar may be how the information is used today, but that doesn't mean it's always going to be that way, and we encourage members of the community to build apps using it. Second, by using the API to power the MyGov Bar, we can see the data from the perspective of an outside developer, and can hopefully, in the end, produce a better, more useful API.

### Using the API

So what can the Discovery API do? Currently, the federal .gov footprint is organized around the beurocuracy. If a citizen wants to complete a given task, they'd have to know what agency to go to, and often times, what beureau within that agency. The Discovery API layers a [folksonomy](wikipedia link) on top of the entire .gov landscape allowing developers to query pages by keyword, or more importantly, to find content related to a given page. 

Think about it this way: If you're changing your name, say, if you're getting married, you're probably going to want a new passport, but if we knew that task was also closely related to getting a new social security card or drivers license, at least we could point you in the right direction. But that's not the only way the Discovery API can be used. What if you want a listing of the top government content aboout space, or a timely subject? Just query the Discovery API by tag.


### Under the Hood

The Discovery API breaks the .gov space into **pages**, each represented by a uniqiue URL. Pages can have **tags** which in turn provide **related pages**. Each pages is organized by **domain** (the part before the `.gov` in the URL), and domains can be queried  tby reverse domain name (e.g., `gov.whitehouse.`). This way, if you want all the subdomains of a given agency, you can get that list in a machine readable format.

The Discovery API launched with some core seed data, namely each federal executive .gov, and those pages available within one click of the home page, but over time, as people use the API, it can grow to become a comprehensive index of the most popular government pages.

Interested in giving it a try? Kick the tires in our [API Sandbox]() or take a look at the [code powering it]().