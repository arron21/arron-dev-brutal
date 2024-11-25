---
draft: false
date: "2024-05-31"
title: Angular event instanceof NavigationEnd
featured: true
author: Arron
categories: 
  - Programming
  - Angular
tags: 
  - Angular
  - Navigation
  - Router
summary: A detailed explanation of handling Angular NavigationEnd events and the importance of using `urlAfterRedirects` instead of `url`.

---

I had a line of code that looked like <code>let last = event.url.split("/").pop();</code>

I usually use <code>event.url</code> whenever I subscribe to <code>this.router.events.subscribe((event)</code>

but I realized that I should be using <code>event.urlAfterRedirects</code>

Here is the full story.

When I was testing my code it worked whenver I went directly to the URL in question. <code>event.url</code> would get the 'model-home' that I was expecting.
However it would not work if I navigated to the page in question. The route I would navigate to is <code>/vehicle/:id</code> , and this is due to redirects...

My Route file looks like this
<code>
          { path: "", redirectTo: "model-home", pathMatch: "full" },
          {
            path: "model-home",
            component: VehicleHomeComponent,
          },
</code>

By having a redirect in my Router the event now has the urlAfterRedirects property
<code>
url: "/list/098f1ebd9f35/vehicle/22839"
urlAfterRedirects: "/list/098f1ebd9f35/vehicle/22839/model-home"
</code>

