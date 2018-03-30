# JQfadeInChain

A jQuery function to make elements of a HTML page Fade In sequentially without write a lot of JS.

## Getting started

### Prerequisites

This code works using [jQuery](https://jquery.com/)

### Install:

* Copy jquery.fadein.chain.js file to your JS directory of your app.
* Include the JS file to your HTML as usual

```
<script src="/js/jquery.fadein.chain.js"></script>
```

## Regular Use:

For each element you whan to FadeIn in Chain use the following class on it adding the secuence number:
```
fadeIn1, fadeIn2, fadeIn3, and so on...
```

### Make sure:

* **That always start with number _1_** - Very important!
* Each element has **"display: none;"** before render. In the following example [Bootstrap](http://blog.getbootstrap.com/) is used, so there is added the class **"hide"** to the element.

### Example:

In the following example all the elements will be fadein in chain:

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

## Advanced: _Use the JS function itself_

You can call the function fadeChain() any time for advanced uses like limiting the number of elements to show or to start with a diferent number.

```
fadeChain(id = 1, limit = null);
```

* **id**: Is the start element
* **limit**: The max number of elements to show

### Example

In the following example, when clicking the button, all the elements will disappear and then only elements from 2 to 4 will be shown:

#### HTML:
```
<a id="button1" href="#" class="btn btn-primary">Click me</a>
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
<div class="hide fadeIn5">
    Element 5
</div>
```

#### JS
```
$('#button1').on('click', function () {
    $('.hide').hide();
    fadeChain(2,4);
});
```   

## Enjoy it!

