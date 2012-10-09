---
title: "Government Forms just got an Upgrade"
description: "Today Project MyGov is pleased to announce the release of a small, open source tool to improve the experience of completing government (or other) PDF-based forms"
author: "Benjamin Balter and Greg Gershman"
layout: post
comments: true
sharing: true
category: announcements
tags: code, pdf, forms
published: true

---

<div class="alignright" style="text-align:right; font-size: 12px;">

<img src="http://presidential-innovation-fellows.github.com/mygov/images/content/passport.jpg" alt="Government Form"><br />

Photo Credit: <a href="http://www.flickr.com/photos/blmurch/4262786267/">blmurch</a>

</div>

If you've ever had the pleasure of filling out a TPS report or any other form (in triplicate, by hand, with a pen), have we got news for you. We're happy to roll out a [a small, open source tool](https://github.com/GSA-OCSIT/pdf-filler) to improve the experience of completing government (or other) PDF-based forms. We've creatively named it "[PDF Filler](https://github.com/GSA-OCSIT/pdf-filler)" (seriously, hit us up in the comments with better names) and it gives web developers a standardized ([RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) in geek speak) interface that, when provided with a user's responses and the URL to a public-facing PDF, returns the filled out PDF form. No ink smears or smudges to be found.

This is one of the fundamental deliverables we talked about as we sat down to reimagine the way citizens interact with government. We quickly realized, that at their most basic level, many people interact with government using standardized forms contained within a [PDF File](http://en.wikipedia.org/wiki/Portable_Document_Format). In theory, PDFs are great because they preserve their paper, real-world counterpart's original, off-line formatting. Using PDF as a file format ensures others cannot make changes to the underlying document, which is great when dealing with forms and other legal documents for which fidelity is vital.

### PDF Limitations

Despite their widespread use, PDFs have some limitations, especially as we begin to look toward the future:

1. Because such files are traditionally downloaded to a user's desktop computer before they are viewed, they live outside the user's web browser. This makes it hard to build new, automatically updating web-based tools to improve the user experience of completing the forms they contain.

2. Since PDFs are digital representations of real-world paper documents, submitting PDF forms to agencies often requires printing the document itself and physically mailing it in. In a world where an increasing number of day-to-day tasks are now being completed online — from paying bills to staying in touch with classmates — such paper-based processes deserve a critical look.

3. From a usability perspective, a PDF is constrained by many of the same limitations of paper. This brings up challenges when considering accesibility (for blind people, as an example) or user interfaces that are responsive to different mobile devices and screens of any size. 

### So why is this PDF Filler useful?

We envision agencies using this tool in a variety of ways:

1. They can begin embedding existing forms within their website and other applications, rather than requiring users to download and complete the PDF offline. 

2. Because the tool is built using common standards, third-party developers can begin building apps on top of the form. One example would be a tool to aggregate and complete common fields like name and address across multiple documents.

3. In the very near future, as government entities transition to more web-based forms to collect information, we will move to a more future-proof system of information collection where by data (the information you submit) can remain distinct from its presentation (the form itself). This will allow government agencies to provide citizen services more transparently, more conveniently, and more efficiently.

4. Citizens will reap the benefits by not having to fill in the same information on multiple forms -- and will enjoy an improved user experience when interacting with government.

### How to help

If you're a developer, we encourage you to "[fork the repo on GitHub](https://github.com/GSA-OCSIT/pdf-filler)" and either incorporate it into your own project, or help us improve PDF Filler by taking some time to [contribute](https://github.com/GSA-OCSIT/pdf-filler#contributing).

If you're not a developer, we'd love to hear your thoughts on the tool's potential in the comment section below, and encourage you to be on the look out for a more evolved experience next time you interact with a government agency.

And stay tuned...we're not finished with forms. Not by a long shot. ;)