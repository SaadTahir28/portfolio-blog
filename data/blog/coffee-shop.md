---
title: Coffee Shop
date: '2025-01-22'
tags: ['3D Modeling','Blender','Rendering']
draft: false
summary:  
images: []
layout: PostSimple
canonicalUrl:
---

# Overview
I recently learned making 3D models in Blender so I thought I would share what I learnt. Let's dive right into the cup of coffee.
I followed the tutorial from [PolygonRunway](https://www.youtube.com/watch?v=0TzjpR3pdpk&ab_channel=PolygonRunway) to create this model.

![coffeeshop](/static/images/blog/coffeeshop.png)

<br/>

# Important Keys
1. You can move around the scene using `Middle Mouse Button`.
2. `A` to select everything
3. `X` to delete selected
4. `Shift+A` to add a mesh e.g. Cube.
5. `S` to scale, `R` to rotate, `G` to move and combining `X,Y,Z` to operate in that axis.
6. `Tab` can be used to toggle modes `Object Mode` and `Edit Mode`.
7. `E` to extrude face
8. `I` to create an inset
9. `Ctrl+R` to add edge loops. `Mouse Scroll` to increase/decrease loops.
10. `LMB` to confirm editing. `RMB` to reset editing.
11. `1` to select vertices, `2` to select edges, `3` to select faces.
12. `Shift+D` to create independent duplicate.
13. `P` to created separate selection from the actual object.
14. `Numpad+(any number)` to view from that camera angle.
15. `Ctrl+Alt+LMB` to select the whole loop.
16. `Shift+LMB` for multi object selection.
17. `Ctrl+L` to copy modifiers from one object to another.
18. `Ctrl+2` to add subdivision modifier.
19. `Ctrl+P` to parent the object to selected.
20. `Shift+S` to change the cursor.
21. `Shift+RMB` to move the cursor to that position.
22. `F` to fill the circle.
23. `Alt+D` to duplicate and also copy materials and shape.
24. `Shift+R` to repeat the old process.
25. `Ctrl+B` to add Bevel modifier.
<br/>

# Creating a curved railing
In order to create this, I first cut out all the edges as a separate selection and deleted the faces. It left me with the edges only. Make sure to separate out the cuts too. Then right click on the edges and `Convert To -> Curve`. Now you can adjust its Bevel Depth to make it round.

![railing](/static/images/blog/railing.png)
<br/>

# Modifier
I used the `Solidify` modifier in order to create solid cup and `Subdivision` modifier to make it rounded. Then we select both of them, Right Click and select `Shade Smooth`. I also used `Bevel` modifier for smoothness of the whole scene.

# Material, Lighting and Rendering
For materials, it's really simple. Just select the object and add material of you liking. If you want emitting material then just change the Surface to Emission.

For Lights, you need to add a light by pressing `Shift+A` and set it's power. Add as much you like. I added three area lights in the scene. One on top, one at the back and one on the right.

For Rendering, you need to set the render resolution and number of samples and the rendering will be done. You can view the render image by pressing `F12` and save the image.

# Conclusion
I will be learning new stuff and sharing a blogs here. 
Here is my blender file [CoffeeShop.blend](/static/images/blog/coffeeshop.blend). Happy Modeling!! 💘




