---
title: "Building MyGov as an Open Platform: Part 1"
description: "This post discusses how MyGov is an open platform that can integrate with other applications and thus leverage outside innovation"
author: "Philip Ashlock"
layout: post
comments: true
sharing: true
category: 
tags: 
published: true

---

In an [earlier post](http://presidential-innovation-fellows.github.com/mygov/2012/09/18/your-filename/) we provided an overview of the the different MyGov components that form a complete suite of personalized services. Now we'd like to share some perspective on the technical architecture we've been developing and show you how we see MyGov acting as an open platform that existing government websites (as well as outside applications) can hook into. Providing an open platform allows agencies to incorporate MyGov features in their own ways and allows us to leverage the ingenuity of civic hackers and the broader innovation of the American people. 

Before diving into the technical architecture or looking at any one single component, it's worth reviewing a few core principles that govern our approach. This will be part one of a two part post and part two will detail technical architecture piece by piece. At a fundamental level our approach has been open, open, open, open. We’re creating an open platform with a foundation built on open architecture, open source, open data, and open standards. 


## Open Architecture

A small-pieces-loosely-joined service-oriented architecture allows us to build many modular components separately. These components can interconnect when they need to but can also be autonomous and fully functional on their own. Not only does this give us more flexibility, it also encourages government to build internal tools the same way we would expect outside parties who want to integrate with the platform. This kind of [dog-fooding](http://en.wikipedia.org/wiki/Eating_your_own_dog_food) and open architecture way of doing things has driven the success of many ventures from Amazon, to Twitter, to GNU/Linux, to the web itself. In fact, there may even be some parallels between the recent [Digital Strategy guidelines](http://www.whitehouse.gov/sites/default/files/omb/egov/digital-government/digital-government.html) for exposing APIs and similar enterprise-wide policies that have transformed [the companies that thrive as open SOA platforms](http://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/).

## Open Source

There's no reason to build everything from scratch, so we've been building on existing open source stacks and components wherever possible including [Ruby on Rails](http://rubyonrails.org/) and a common [LAMP architecture](http://en.wikipedia.org/wiki/LAMP_%28software_bundle%29) on the backend as well as [Foundation](http://foundation.zurb.com/), [JQuery](http://jquery.com/), and [Backbone](http://backbonejs.org/) on the frontend. Likewise, we've been [sharing our code](http://presidential-innovation-fellows.github.com/mygov/developer/) and we invite pull requests, bug reports, and feature requests. The value and potential of civic software is multiplied when it's truly treated as a public good. As the original description of the project states, MyGov will be "developed not just for the people, but also by the people." We also recognize the potential for other governments both local and international to reuse components of the MyGov platform. 

## Open Data 

One of the most critical tenets of MyGov has been to give people more complete access and control of their own private data and this introduces an important new dimension to the traditional discourse on open data.

Arguably, we’ve been focusing on transactions and personal information more than the kinds of content where typical open data practices are applicable, but by giving people more control of their own data we're enabling open data on an individual basis where privacy matters. In some ways, the data crunching behind MyGov is what many are starting to call “small data” which is meant to convey personalization and contextual relevance in contrast to more abstract analytics often associated with the trendy world of “big data.”  There are secure authenticated APIs that allow you to share your data within the platform, but we’ve also been creating and leveraging traditional open data resources to surface contextual and personally relevant content. For example, with the context provided by a city or zipcode people can start to be more connected to their local services and representatives.

Public facing open data efforts have also been expanding more broadly across the government. In fact, MyGov’s Chief Open Data Hacker, Ben Balter, has been a critical contributor to [Project Open Data](http://project-open-data.github.com/) and some general purpose open data tools like [DataBeam](https://github.com/philipashlock/DataBeam) have already been developed to help support some of the MyGov infrastructure.

## Open Standards

No open platform can truly sustain or scale an ecosystem without a healthy relationship with open standards and MyGov is no different. Open standards help facilitate modular interchangeable parts and they encourage the development of compatible components by third parties including federal agencies, local government, and independent developers. From the beginning we looked at existing initiatives such as the [federal government’s standardization effort around identity](http://blog.idmanagement.gov/2012/10/what-are-ficam-technical-profiles-and.html) or [Open311](http://open311.org/) for a custom forms API and have worked to integrate or otherwise align them with the platform. At it’s core MyGov will standardize the process and refine the control people have around transacting with government. In some ways this will be more of a standardization of process and user experience in terms of how people authorize government agencies and third party applications to access their information, but it also leverages technology standards like [OAuth](http://oauth.net/). You may be familiar with this process if you’ve ever connected a separate application to your Twitter or Facebook account.  Over time, a set of standardized APIs for government interactions will lay the foundation for a whole new ecosystem of applications that can innovate government just like the iPhone App Store or the marketplace of Android apps has radically transformed the way we use our phones. 

## Open for Feedback

We’ve been trying to follow these principles ([and many others](http://presidential-innovation-fellows.github.com/mygov/2012/12/27/We-believe-Project-MyGov-principles/)) as best as we can while navigating the challenges of innovating within government, but we know we can always do better. Please let us know if you have any questions or feedback on our approach and please stay tuned for part two which will examine the suite of MyGov apps piece by piece in more technical detail.