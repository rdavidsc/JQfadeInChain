# JQfadeInChain

A jQuery function to make elements of a HTML page Fade In consecutively without write a lot of JS.

## Install:

* Copy jquery.fadein.chain.js file to your JS directory of your app.
* Include the JS file to your HTML as usual

```
<script src="/js/jquery.fadein.chain.js"></script>
```

## Usage:

For each element you whan to FadeIn in Chain use the following class on it adding the secuence number:
```
fadeIn1, fadeIn2, fadeIn3, and so on...
```

## Make sure:

* **That always start with number _1_** - Very important!
* The element has **"display: none;"** before render. In the following example [Bootstrap](http://blog.getbootstrap.com/) is used, so there is added the class **"hide"** to the element.

## Example:

```
<div class="hide fadeIn1">
    Element 1
</div>
<div class="hide fadeIn2">
    Element 2
</div>
<div class="hide fadeIn3">
    Element 3
</div>
<div class="hide fadeIn4">
    Element 4
</div>
```

