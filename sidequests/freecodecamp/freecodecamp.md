# FreeCodeCamp

## Applied Accessibility
Depending on browser support, a date picker shows up in the input field when it's in focus, which makes filling in a form easier for all users.

For older browsers, the type will default to text, so it helps to show users the expected date format in the label or as placeholder text just in case.
```<input type="date" id="pickdate" name="date">```

HTML5 also introduced the time element along with a datetime attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the datetime attribute. This is the value accessed by assistive devices.
```<time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>.```
CSS's magic can also improve accessibility on your page when you want to visually hide content meant only for screen readers. This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. CSS is used to position the screen reader-only elements off the visual area of the browser window.

Here's an example of the CSS rules that accomplish this:
```
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```
Color is a large part of visual design, but its use introduces two accessibility issues. First, color alone should not be used as the only way to convey important information because screen reader users won't see it. Second, foreground and background colors need sufficient contrast so colorblind users can distinguish them.
CSS hsl() property (which stands for hue, saturation, lightness)

Close colors can be thought of as neighbors on the color wheel, and those combinations should be avoided when conveying important information.

you should use brief but descriptive text within the a tags to provide more meaning for these users.

HTML offers the accesskey attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users.
it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.

Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. 
This same functionality can be given to other elements, such as ```div```, ```span```, and ```p```, by placing a ```tabindex="0"``` attribute on them. 

A negative tabindex value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard. 
Bonus - using tabindex also enables the CSS pseudo-class :focus to work on the p tag.

## Introduction to the Responsive Web Design
Responsive Web Design is an approach to designing web content that responds to the constraints of different devices. The page structure and CSS rules should be flexible to accommodate these differences. In general, design the page's CSS to your target audience. If you expect most of your traffic to be from mobile users, take a 'mobile-first' approach. Then add conditional rules for larger screen sizes. If your visitors are desktop users, then design for larger screens with conditional rules for smaller sizes. CSS gives you the tools to write different style rules, then apply them depending on the device displaying the page.

Media Queries are a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user's visible area of a web page, and is different depending on the device used to access the site.

Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.

Here's an example of a media query that returns the content when the device's width is less than or equal to 100px:

```@media (max-width: 100px) { /* CSS Rules */ }```

and the following media query returns the content when the device's height is more than or equal to 350px:

```@media (min-height: 350px) { /* CSS Rules */ }```

Making images responsive with CSS is actually very simple. Instead of applying an absolute width to an element:
```
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

The max-width property of 100% scales the image to fit the width of its container, but the image won't stretch wider than its original width. Setting the display property to block changes the image from an inline element (its default), to a block element on its own line. The height property of auto keeps the original aspect ratio of the image

The simplest way to make your images appear "retina" (and optimize them for retina displays) is to define their width and height values as only half of what the original file is.

Here is an example of an image that is only using half of the original height and width:
```
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

Instead of using em or px to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.

The four different viewport units are:

vw: 10vw would be 10% of the viewport's width.
vh: 3vh would be 3% of the viewport's height.
vmin: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
vmax: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).
```
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>
```
## Introduction to the CSS Flexbox
A website's User Interface ("UI") has two components. First, there are the visual elements, such as colors, fonts, and images. Second, there is the placement or positioning of those elements. In Responsive Web Design, a UI layout must accommodate many different browsers and devices accessing the content.

CSS3 introduced Flexible Boxes, or flexbox, to create page layouts for a dynamic UI. It is a layout mode that arranges elements in a predictable way for different screen sizes and browsers. While somewhat new, all popular modern browsers support flexbox. 

Placing the CSS property ```display: flex;``` on an element allows you to use other flex properties to build a responsive page.

Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the flex-direction property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.

Other options for flex-direction are row-reverse and column-reverse.

Note
The default value for the flex-direction property is row.

Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the justify-content property has several options to do this.

Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the main axis. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.

There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is justify-content: center;, which aligns all the flex items to the center inside the flex container. Others options include:

flex-start: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container.

flex-end: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.

space-between: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the other items between them are spaced evenly.

space-around: similar to space-between but the first and last items are not locked to the edges of the container, the space is distributed around all the items

The align-items property is similar to justify-content. Recall that the justify-content property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.

Flex containers also have a cross axis which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

CSS offers the align-items property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.

The different values available for align-items include:

flex-start: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.

flex-end: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.

center: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
stretch: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.

baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.


CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.

However, using the flex-wrap property, it tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

CSS also has options for the direction of the wrap:

nowrap: this is the default setting, and does not wrap items.

wrap: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.

wrap-reverse: wraps items from bottom-to-top if they are in a row, or right-to-left if they are in a column.

there are several useful properties for the flex items.

The first is the flex-shrink property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

The flex-shrink property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a flex-shrink value of 1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times as much as the other.

The flex-grow property controls the size of items when the parent container expands.

Using a similar example from the last challenge, if one item has a flex-grow value of 1 and the other has a flex-grow value of 3, the one with the value of 3 will grow three times as much as the other.

The flex-basis property specifies the initial size of the item before CSS makes adjustments with flex-shrink or flex-grow.

The units used by the flex-basis property are the same as other size properties (px, em, %, etc.). The value auto sizes items based on the content.

There is a shortcut available to set several flex properties at once. The flex-grow, flex-shrink, and flex-basis properties can all be set together by using the flex property.

For example, flex: 1 0 10px; will set the item to flex-grow: 1;, flex-shrink: 0;, and flex-basis: 10px;.

The default property settings are flex: 0 1 auto;.

Add the CSS property flex to both #box-1 and #box-2. Give #box-1 the values so its flex-grow is 2, its flex-shrink is 2, and its flex-basis is 150px. Give #box-2 the values so its flex-grow is 1, its flex-shrink is 1, and its flex-basis is 150px.

These values will cause #box-1 to grow to fill the extra space at twice the rate of #box-2 when the container is greater than 300px and shrink at twice the rate of #box-2 when the container is less than 300px. 300px is the combined size of the flex-basis values of the two boxes.
```
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>
```

The order property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.

The final property for flex items is align-self. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties float, clear, and vertical-align do not work on flex items.

align-self accepts the same values as align-items and will override any value set by the align-items property.


## Introduction to the CSS Grid
CSS Grid helps you easily build complex web designs. It works by turning an HTML element into a grid container with rows and columns for you to place children elements where you want within the grid.

Turn any HTML element into a grid container by setting its display property to grid. This gives you the ability to use all the other properties associated with CSS Grid.

Note
In CSS Grid, the parent element is referred to as the container and its children are called items.


Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the grid-template-columns property on a grid container as demonstrated below:
```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```
This will give your grid two columns that are 50px wide each.

The number of parameters given to the grid-template-columns property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.

The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the grid-template-rows property in the same way you used grid-template-columns in previous challenge.

You can use absolute and relative units like px and em in CSS Grid to define the size of rows and columns. You can use these as well:

fr: sets the column or row to a fraction of the available space,

auto: sets the column or row to the width or height of its content automatically,

%: adjusts the column or row to the percent width of its container.

Here's the code that generates the output in the preview:

```grid-template-columns: auto 50px 10% 2fr 1fr;```

This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

So far in the grids you have created, the columns have all been tight up against each other. Sometimes you want a gap in between the columns. To add a gap between the columns, use the grid-column-gap property like this:

```grid-column-gap: 10px;```

You can add a gap in between the rows of a grid using grid-row-gap in the same way that you added a gap in between columns.

grid-gap is a shorthand property for grid-row-gap and grid-column-gap from the previous two challenges that's more convenient to use. If grid-gap has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

To control the amount of columns an item will consume, you can use the grid-column property in conjunction with the line numbers you want the item to start and stop at.

Here's an example:

```grid-column: 1 / 3;```

You define the horizontal lines you want an item to start and stop at using the grid-row property on a grid item.

In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the justify-self property on a grid item. By default, this property has a value of stretch, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

start: aligns the content at the left of the cell,

center: aligns the content in the center of the cell,

end: aligns the content at the right of the cell.

Just as you can align an item horizontally, there's a way to align an item vertically as well. To do this, you use the align-self property on an item. This property accepts all of the same values as justify-self.

Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using justify-items on your grid container. This property can accept all the same values as justify-self, the difference being that it will move all the items in our grid to the desired alignment.

Using the align-items property on a grid container will set the vertical alignment for all the items in our grid.

You can group cells of your grid together into an area and give the area a custom name. Do this by using grid-template-areas on the container like this:
```
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```
The code above merges the top three cells together into an area named header, the bottom three cells into a footer area, and it makes two areas in the middle row; advert and content.

Note
Every word in the code represents a cell and every pair of quotation marks represent a row.

In addition to custom labels, you can use a period (.) to designate an empty cell in the grid.

After creating an areas template for your grid container, as shown in the previous challenge, you can place an item in your custom area by referencing the name you gave it. To do this, you use the grid-area property on an item like this:

```.item1 { grid-area: header; }```

This lets the grid know that you want the item1 class to go in the area named header. In this case, the item will use the entire top row because that whole row is named as the header area.

The grid-area property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

```item1 { grid-area: 1/1/2/4; }```

This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:
```
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```
So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.

When you used grid-template-columns and grid-template-rows to define the structure of a grid, you entered a value for each row or column you created.

Lets say you want a grid with 100 rows of the same height. It isn't very practical to insert 100 values individually. Fortunately, there's a better way - by using the repeat function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.

Here's an example that would create the 100 row grid, each row at 50px tall.

```grid-template-rows: repeat(100, 50px);```

You can also repeat multiple values with the repeat function, and insert the function amongst other values when defining a grid structure. Here's what I mean:

```grid-template-columns: repeat(2, 1fr 50px) 20px;```
This is done for the first two columns in this order column the third is 20px

This translates to:

```grid-template-columns: 1fr 50px 1fr 50px 20px;```

Note:
1fr 50px is repeated twice followed by 20px.

There's another built-in function to use with grid-template-columns and grid-template-rows called minmax. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

grid-template-columns: 100px minmax(50px, 200px);
In the code above, grid-template-columns is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.

The repeat function comes with an option called auto-fill. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining auto-fill with minmax.

In the preview, grid-template-columns is set to

```repeat(auto-fill, minmax(60px, 1fr));```

When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one.

Note
If your container can't fit all your items on one row, it will move them down to a new one.

auto-fit works almost identically to auto-fill. The only difference is that when the container's size exceeds the size of all the items combined, auto-fill keeps inserting empty rows or columns and pushes your items to the side, while auto-fit collapses those empty rows or columns and stretches your items to fit the size of the container.

Note
If your container can't fit all your items on one row, it will move them down to a new one.

CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.

In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely.

```
@media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }
```
Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

For example, by setting the display and grid-template-columns properties of the element with the item3 class, you create a grid within your grid.

```
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }
  
  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }
  
  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */
    display: grid;
    grid-template-columns: auto 1fr;
    
    /* enter your code above this line */
  }
  
  .item4 {
    background: lightpink;
    grid-area: footer;
  }
  
  .itemOne {
    background: PaleGreen;
  }
  
  .itemTwo {
    background: BlanchedAlmond;
  }
  
</style>
  
<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

