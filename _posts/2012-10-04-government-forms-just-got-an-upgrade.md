---
title: "Government Forms just got an Upgrade"
description: "Today Project MyGov is pleased to announce the release of a small, open source tool to improve the experience of completing government (or other) PDF-based forms"
author: "Benjamin Balter and Greg Gershman"
layout: post
comments: true
sharing: true
category: announcements
tags: code, pdf, forms
published: false

---

![Government Form](http://presidential-innovation-fellows.github.com/mygov/images/content/form.jpg){.alignright} As we sat down to re-imagine the way citizens interact with government, we quickly realized, that at their most basic level, many citizen services are transacted using standardized forms contained within a file known as a [PDF File](http://en.wikipedia.org/wiki/Portable_Document_Format). PDFs are a popular file format used to represent traditional, paper documents in the digital world, while preserving their original, off-line formatting. PDFs ensure others cannot make changes to the underlying document, and as such, serve as a logical container for forms and other legal documents for which fidelity is vital.

Despite their widespread use, however, PDFs have some limitations, especially as we begin to look to the future. For one, because such files are traditionally downloaded to a user's desktop computer before they are viewed, and thus live outside the user's web browser, it's hard to build new, web-based tools to improve the experience of completing the forms they contain. Second, because PDFs are digital representations of real-world paper documents, submitting PDF forms to agencies often requires printing the document itself and physically mailing it in. In a world where an increasing number of day-to-day tasks are now being completed online — from paying bills to staying in touch with classmates — clearly, such a paper-based process deserves a critical look.

Today we are pleased to announce the release of [a small, open source tool](https://github.com/GSA-OCSIT/pdf-filler) to improve the experience of completing government (or other) PDF-based forms. The tool, which we've creatively named "[PDF Filler](https://github.com/GSA-OCSIT/pdf-filler)", provides web developers with a standardized ([RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer) in geek speak), interface that, when passed a user's responses and the URL to a public-facing PDF, returns the completed form.

So why is this useful? For one, agencies can use this tool to begin embedding existing forms within their website and other applications, rather than requiring users to download and complete the PDF offline. Second, because the tool is built using a common standard, third-party developers can begin to build apps on top of the form, such as, for example, a tool to aggregate and complete common fields like name and address across multiple documents. We envision that, in the very near future, as government entities transition to use web-based (rather than PDF-based) forms to collect information, we will move to a more future-proof system of information collection whereby data (the information you submit) can remain distinct from its presentation (the form itself) and allow government agencies to provide citizen services more transparently, more conveniently, and more efficiently. Citizens will reap the benefits, not having to fill in the same information on multiple forms, enjoying improved user experiences when transacting with government.

If you're a developer, we encourage you to "[fork the repo on GitHub](https://github.com/GSA-OCSIT/pdf-filler)" and either incorporate it into your own project, or help us improve PDF Filler by taking some time to [contribute](https://github.com/GSA-OCSIT/pdf-filler#contributing). If you're not a developer, we'd love to hear your thoughts on the tool's potential in the comment section below, and encourage you to be on the look out for a more evolved experience next time you interact with a government agency. And stay tuned...we're not finished with forms.  Not by a long shot. ;)

[Photo Credit](http://www.flickr.com/photos/9731367@N02/6988157282/)