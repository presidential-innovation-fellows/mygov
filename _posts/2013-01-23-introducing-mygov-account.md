---
title: "Introducing the MyGov Account"
description: "The MyGov Account acts as a single place for the public to manage their interactions with the government. Anyone can create an account and use it as a central point for all of the vast array of services offered by federal, state and local government."
author: "Team MyGov"
layout: post
comments: true
sharing: true
category: 
tags: 
published: true

---

*(This is the second in a series of posts introducing each of the products we've been working on as part of Project MyGov.)*

In your life, you've probably filled in your name, address, and date of birth hundreds of times when renewing your passport, applying for financial aid, filing your taxes, or any other of the multitude of interactions with the government. We'd like to ask you to do that one more time -- and then never again.

In approaching the general challenge of improving the relationship between the government and the people, we look at two things:

1. How can we improve the user experience for the public?
2. How can we make the implementation of that experience easier, better, and less expensive for the government? 

With the growth of government's online presence, and the increase in online services offered, people currently have a separate account for each government agency they interact with. This means people could potentially have dozens of accounts for different government services, and the associated proliferation of logins, passwords and functionality leaves a lot to be desired. From the perspective of government as a whole, the duplication of effort required to implement the same account features over and over is wasteful.

As a solution, we'd like to introduce the MyGov Account. The MyGov Account acts as a single place for the public to manage their interactions with the government. Anyone can create an account and use it as a central point for the vast array of services offered by federal, state, and local government. Any agency can integrate the account and its features (available via an API) into their site or application.

In building the MyGov Account, we took a step back and tried to answer the question: how do governments interact with their citizens? We researched both current and historical examples, and built upon those best practices, which drove what features we built into the MyGov Account.

Let's take a look.

### Profile

The core of your MyGov Account is your profile, which contains the basic, important information about you, and the type of things that you're going to need when interacting with government. When you fill out just about any form, you need to put in your name, address, and date of birth. When visiting a government website, the types of services and content you are looking for will be dependent on your personal situation (such as whether you’re married, a student, retired or a veteran, to name a few use cases).

With your MyGov Profile, you can store this information securely in your MyGov Account. Then, when interacting with agencies, you can use this information to speed up filling out a form, or personalizing a website. Agencies have to request access to your Profile -- putting you in charge of who can access your MyGov profile information, and allowing you to revoke access at any time. We think that’s really important. After all, part of [our core principles](http://presidential-innovation-fellows.github.com/mygov/2012/12/27/We-believe-Project-MyGov-principles) is to put the public’s needs first, and we think this fulfills that.

### Tasks

In interacting with government, things can get a little complex. Sometimes you need to fill out a whole bunch of forms just to accomplish what is, from your perspective, a single simple task. We want to make your life easier, and at the same time provide tools that help agencies do their job better. So, we introduced the idea of Tasks into your MyGov Account.

With Tasks, an agency can create a dialogue that walks you through a complex set of steps to accomplish a goal. Let's say you need to renew your passport. It's a hairy process, but with a little information and the MyGov Tasks feature, you get personalized step-by-step instructions to follow to complete your transaction with the government. And, since this is part of your MyGov Account, you have control over which agencies can create tasks for you.

### Notifications

Every time you sign up for a website, you’re taking a gamble that the site isn't going to spam your inbox with emails that are only marginally relevant to you. You often have control over this, but managing email from hundreds of sites is a pain -- not to mention a horrible experience. While we can't fix this problem for the whole internet, we can do our best to address it within government.

With MyGov Notifications, agencies can send you a notification, but you control how you get notified and which agencies can contact you. You can enter multiple email addresses or phone numbers, and choose to get updates daily or weekly, via email or SMS. We view this as essential to moving beyond simple government/citizen interactions to creating a relationship between the government and its citizens, but with the latter setting the terms of that relationship.

As an example, let's say you use a MyGov-enabled website to figure out which federal benefits you qualify for. Six months later, a new benefit is made available that you're eligible for. Currently, there's no way for the government to let you know you could be taking advantage of this new program. With Notifications, the benefits app can update you with the new information and hopefully make your life better.

### Forms

Forms are the primary way by which a government interacts with its citizens: if you need some service from the government, you fill out a form. We think of forms as an API into government: provide some input, it gets processed, and returns a response. We'll go into detail later with more on the full scope of what we're working with forms (because it's big, trust us).

If you've ever had to fill out the same form twice, you know that most of the information is going to be the same. So it'd be great if you had a history of the forms you filled out, and could re-use any applicable information. And what if submitting a form was more than just "fill it out and send it in" (stay with us here). What if you received status updates to your MyGov Account when your form was received, or processed, or if more information was required. All these things will be possible with your MyGov Account and forms history.

### Apps

With the MyGov Citizen API, we envision a rich ecosystem of services available to users: what we're calling MyGov Apps. From within your MyGov Account, you'll be able to browse MyGov Apps (we'll also do our best to connect you with apps that are relevant to your needs), and manage the access those apps have to you through your account. If you decide that you don't want a particular app to have access to your Profile, or to be able to send you notifications, just revoke the app's access.

### Local, state, and federal Info

American democracy is complex, and your MyGov account gives you the information you need to navigate it. While most people are well acquainted with the basics of their national government and the Presidency, many are less aware of their governing bodies, services, or officials at the state, county, and municipal level. The MyGov account helps bring you all of that information in one place. It's essential to know who your representatives in government are. From the President of the United State (POTUS) to your local county and state representatives (in some cases even city mayors and council members), we've included this information for you in your MyGov account, and will continue to provide more valuable and personalized information as we grow the service.

### For Agencies: MyGov Citizen API

That's the MyGov Account from the citizen perspective. From the agency perspective, these features are available as the MyGov Citizen API, which is an API for government to interact with citizens. Agencies can create apps that, after authorization from a citizen, can access their profile, assign them tasks, send them notifications, and submit forms on their behalf.

### In closing

The above summarizes what we've built out in the context of our six month Presidential Innovation Fellows project. For the public, you can [sign up](https://my.usa.gov) and you’ll be set up with a new account once we've gone through all the legal requirements to allow access to the public. For developers, you can check out the source code on [Github](https://github.com/gsa-ocsit/mygov-account), and we'll be publishing details on how to get an API key and begin working with the MyGov Citizen API to create apps.