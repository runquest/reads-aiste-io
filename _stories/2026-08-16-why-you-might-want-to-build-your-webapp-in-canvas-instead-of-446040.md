---
layout: "story"
title: "Why you might want to build your WebApp in Canvas instead of HTML"
date: "2026-08-16"
permalink: "/2026/08/16/stories/why-you-might-want-to-build-your-webapp-in-canvas-instead-of-446040/"
slug: "why-you-might-want-to-build-your-webapp-in-canvas-instead-of-446040"
source: "aiste.ulozaite@gmail.com"
unsubscribe_url: "https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fa.tldrnewsletter.com%2Funsubscribe%3Fep=1%26l=cfa2d55a-b7be-11e8-a3c9-06b79b628af2%26lc=e09eb435-7667-11ec-96e5-06b4694bee2a%26p=f6b93b62-9498-11f1-b407-617d207c3f6a%26pt=campaign%26pv=4%26spa=1786356070%26t=1786359902%26s=74af2209c230a330bc89fc8a8548c43ac279017a75ea47abb8646f99d405931b/1/0100019feb58f02b-b9cd628c-a490-43d3-8cb6-db5f7e5b0340-000000/psYd67HjVJrQUzip8J0z9-_IyH9_mJ4GMRMtx76jGhI=452"
original_url: "https://hivekit.io/blog/why-you-might-want-to-build-your-webapp-in-canvas-instead-of-html/"
category: "Programming"
excerpt_separator: ""
---

{% raw %}
Canvas is a low-level rendering tool that gives users more control than HTML.

---

Why you might want to build your WebApp in Canvas instead of HTML              

menu close

[hivekit](/)

[hivekit](/)

Solutions

[landscape

#### Surface & Open Pit Mining

Peak efficiency for surface metals and coal.



](/solutions/surface-open-pit-mining/)[front\_loader

#### Underground Mining

Efficient operations for underground mining.



](/solutions/underground-mining)[local\_shipping

#### Logistics

Visibility, Tracking & Optimization for logistics.



](/solutions/logistics/)[flowchart

#### Processing

Mill & Plant visibility and alerting.



](/solutions/processing/)[code

#### API & Development

Spatial Realtime Feeds, Geofencing & Rules



](/developers/)

Support

[support\_agent

#### Consultancy

Planning, Integration & Development



](/#consultancy)[menu\_book

#### Documentation

Hivekit User Guides & Tutorials



](/user-guides/scheduling/schedule-panel-and-controls)

Developers

[![Hivekit API](/img/developers/hivekit-api.svg)](/developers/)

[menu\_book API Docs](/guides/core/core-concepts) [Js/Node SDK](/docs/js-client-sdk/installation) [iOS SDK coming soon](#) [Android SDK coming soon](#) [HTTP API](/docs/http-api/usage) [HiveScript](/guides/hivescript/introduction) [Raw Protocol](/docs/api-protocol/structure)

[school Guides](/guides/core/core-concepts/) [science Tutorials](/tutorials-and-examples/usage-with/google-maps) [apartment Enterprise](/enterprise-docs/guides/getting-started)

[Browse our code on Github](https://github.com/hivekit)

About us

[group

#### Company

Learn more about Hivekit Inc. and its founder.



](/about/company/)[visibility

#### Our Vision for Hivekit

Creating Artificial Intelligence for the Physical World.



](/about/our-vision/)[newsmode

#### Press Section

Press Releases, Images and background info



](/press/)[menu\_book

#### Blog

Our blog on geospace, AI and computing.



](/blog/)[chat

#### Contact Us

Book a demo, contact sales or get support.



](/contact)

#### My Organizations

*   account\_circle My Personal Account
*   communities   ()

[map

#### My Realms

Edit realms and see live views of your data



](/account/#/realms)[account\_circle

#### My Account

Account, Access Management & Billing



](/account/#/account)[logout

#### Log Out

End your current session



](#)

[Contact](/contact) [Login](/login)

# Why you might want to build your WebApp in Canvas instead of HTML

I’m always curious how Google, Microsoft and Co. build their web apps - given that they need to work well on any computer, from a top-shelf speed machine to a potato with wires.

Of course, there are many answers to this question - but one that I find particularly interesting is their use of the Canvas element for functionality that’s usually implemented in HTML.

The document in Google Docs is a Canvas. So is the sheet in Google Sheets or in the web version of Excel. Unsurprisingly, Canva is a Canvas - but so is the board in Miro. Our own scheduling interface in Hivekit is also a Canvas.

 

Hivekit's scheduler can be zoomed (changes displayed timespan), panned in x and y direction and has lots of interactive aspects that needed managing.

I helped build it, and in this post, I want to explain why we chose Canvas over DOM elements, what we learned along the way, when I think that Canvas is or isn’t a good choice for web apps, and why I think Canvas is used by all these big companies for performance-critical apps.

## What was Canvas again?

Canvas has been around for more than 20 years now. It provides a blank space within an HTML document that can be drawn on. To do that, you use a JavaScript API with higher-level methods like `fillRect()` to fill a rectangle and lower-level methods like `getImageData()` to access the raw RGBA values of your pixels.

Whatever approach you take, you end up with what’s basically a static image. For Web Developers, that feels a bit odd. After all, they’re used to a complex Document Object Model, HTML parsed into element trees, click handlers and event bubbling, dynamic rendering and reflows - all managed for you and perfectly tuned for the user’s device.

With Canvas, all of this is gone now.

## So - why on earth would you use Canvas?

There are some things only Canvas can do. Pixel image manipulation is the obvious one. But why would you choose Canvas to build a web app that could also be built in HTML?

A few reasons:

*   **Speed:** Parsing HTML, creating a DOM, applying CSS styles, and handling the myriad of features related to user interaction all take time. If your web app becomes complex, the browser can end up doing some seriously heavy lifting. A “dumb” drawing API means less work. Less work means more speed.
    
*   **Control:** If you’re building a whiteboarding app with an infinite workspace, a grid with countless rows, or a planning tool with a zoomable workspace, you need to take control of rendering anyway. You can (kind of) do that in HTML - for example, through “virtual scrolling,” where you swap the content of grid rows instead of using the browser’s native scrolling, or by cleverly adding and removing elements from the DOM as the user zooms and pans. But at that point, you might be better off owning the rendering altogether.
    
*   **Consistency:** With canvas, you output exactly what you specify across devices. This used to be more of an issue when browser implementations differed, but even now, responsive designs, CSS gradients, and transition effects can look quite different across operating systems and screens. With canvas, you get the same result - for better or worse.
    
*   **Portability:** Canvas is used to render output from other visual frameworks. Flutter Web and certain WebAssembly implementations output their screen buffers to canvas. But this also works the other way around: tools such as Ejecta and NativeScript wrap C++ drawing APIs in Canvas calls that let you output your graphics on other systems.
    

## And why wouldn’t you use Canvas?

There are far more reasons not to use Canvas than to use it. And for most web apps, you’re much better off with good old DOM elements. Take the humble `<input type="text">` element, for example. With it, you get crispy rendering at any resolution, support for tab, focus, selection, mouse interactions and arrow key navigation, internationalization for right-to-left text and Asian compound characters, accessibility for screen readers… the list goes on.

Browsers give you a lot of functionality out of the box and there are plenty of great frameworks that make it easy to use, scale and work on in an organized and standardized way across teams.

## When is Canvas the better choice?

There’s a certain set of use cases where Canvas can be the better choice.

*   **When you have a lot of absolutely positioned elements, irregular shapes or complex render order/z-index requirements.** Whether you’re building a vision board app or a 2D platformer, if your app is outside the usual HTML layout flow, Canvas might make your life easier.
    
*   **When you only need to render specific things.** If your app can be zoomed, panned, uses camera transforms, clipping, tiling, level-of-detail rendering, or virtualisation, Canvas makes it easy to make sure you only render what you need to.
    
*   **If your application already has a strong internal model.** If your app already has a strong concept of state, geometry, focus and interaction and all you need is a way to visualize it, Canvas makes it easier than HTML.
    

But if you do decide on a Canvas implementation, here are some of the key things you want to look out for:

*   **Manage when to Render:** The pattern that worked best for us is to have one central renderer that calls other classes that render specific aspects, such as `backgroundRenderer`, `rowRenderer`, `taskRenderer`. Each of the other classes can call `scheduleRender` on the renderer. This schedules a single render pass for the next animation frame. Note that we clear the entire Canvas for every frame and render everything from scratch. This is wasteful and more sophisticated implementations might only clear and rerender specific regions. But - doing that also adds complexity - and rerendering the entire Canvas for every frame really never caused issues for us.

```javascript
class Renderer{
    constructor(canvas){
        this.renderScheduled = false;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.backgroundRenderer = new BackgroundRenderer(this);
        this.rowRenderer = new RowRenderer(this);
    }

    scheduleRender(){
        if(this.renderScheduled) return;
        this.renderScheduled = true;
        requestAnimationFrame(this.render.bind(this));
    }

    render() {
        this.renderScheduled = false;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render the individual layers in order
        this.backgroundRenderer.render(this.context);
        this.rowRenderer.render(this.context);
    }
}
```

*   **Layer Multiple Canvas Elements:** For our planning interface, the fundamental plan stays fairly static while the user interacts with the mouse. But there are a lot of highlight and hover effects. For these, we utilize a second Canvas element with the same dimensions as the original Canvas. This `InteractionRenderer` refreshes much more frequently than the actual Canvas, but only renders a few bounding frames, which is much more lightweight.
    
*   **Keep styles separate.** Keeping CSS separate from HTML makes your life easier - so why not do this with Canvas? Keep a separate file for styles, e.g.
    

```javascript
gapDiagonalLineSpacing: 10,
textColor: '#ecf0f5', 
textColorSecondary: '#4d6585',
fontStyle: "13px 'Lato', sans-serif",
fontStyleBold: "bold 13px 'Lato', sans-serif"
...
```

*   **Manage device resolution and pixel density** To get crisp render results, make sure your Canvas element is scaled to the device’s pixel ratio. Then, counterintuitively, set the context’s scale to offset the element’s scale. This way, you get crisp render output without your code having to be conscious of scale and pixel density all the time.

```javascript
getPixelScale() {
    return Math.max(window.devicePixelRatio, 1);
}
scaleCanvas(canvas, ctx) {
    const pixelScale = this.getPixelScale();
    canvas.width = canvas.offsetWidth * pixelScale;
    canvas.height = canvas.offsetHeight * pixelScale;
    ctx.scale(pixelScale, pixelScale);
}
```

*   **Have central functions that translate domain coordinates to pixels:** If you are building an infinite-workspace-type app, elements on this workspace likely have X and Y coordinates. If you are building a spreadsheet, you’ll have row and column indices. These will be different from the actual pixel coordinates, based on the user’s resolution, zoom and pan position, and a host of other factors. You’ll make your life a lot easier by having simple functions like `getXForColumn(colIndex)` or `getPositionForDomainCoordinates(x,y)`.
    
*   **Maintain a simple box model:** As the user hovers over or clicks elements, you’ll want to know what they interacted with. To do this fast, build up an index of bounding boxes in screen space beforehand. For each, store its x1, x2, y1, and y2 coordinates, along with its z-index and some identifier that tells your implementation what element it belongs to. If you manage a lot of bounding boxes, you might also want to create simple indices based on x and y coordinates for faster lookups or even consider an R-Tree for spatial indexing.
    
*   **Manage Event Handler Life Cycles** Have a global listener for mouse and keyboard events and a simple way to register and deregister callbacks for specific events and elements.
    

## So, should you use Canvas?

Canvas isn’t a faster replacement for HTML. It’s a lower-level rendering tool that gives you more control—and makes you responsible for much more of the browser’s work.

For most web apps, the DOM remains the better choice. It gives you accessibility, responsive layouts, text selection, input handling, and countless other features for free. But if the heart of your application is a large, spatial workspace with complex positioning, zooming, panning, or thousands of visual elements, Canvas may be a better fit.

That was the case for us. Owning the rendering pipeline made the planning interface easier to reason about and gave us predictable performance across a wide range of devices. It also meant building our own systems for interaction, hit testing, scaling, and rendering—work that shouldn’t be underestimated.

So don’t choose Canvas simply because it sounds fast. Choose it when your interface no longer behaves like a document and starts behaving more like a scene.

© Hivekit Inc

Hivekit, Inc 651 N Broad St Suite 201 Middletown, New Castle 19709 Delaware, USA

[@hivekit\_io](https://twitter.com/hivekit_io) [team@hivekit.io](mailto:team@hivekit.io)

[user agreement](/legal/user-agreement/) [privacy policy](/legal/privacy-policy/) [cookie policy](/legal/cookie-policy/)

By continuing to use this website, you consent to the use of cookies in accordance with our [cookie policy](/legal/cookie-policy/).

{% endraw %}
