---
layout: page
title: Using CGI to Synthezise Data for AI Training
category: project
img: cv
---

# So I had an idea...

...while working for the robotics team in the company where I am right now. They had a very specific problem. The need a computer vision system to recognise steel bars. As far as I am aware nobody has used AI to solve this before and the reason seemed pretty clear. There just isn't any data out there. But these bars are geometrically quite simple and I had been thinking about supplementing AI with CG before, so I suggested to try this new approach. We generate labeled data to be able to do supervised learning on open-source CV networks.
 
This is by no means a new apprroach, as there are companies in the US and China offering services similar to this and as far as I can tell they are using a software suite by Nvidia. This product however appears to be targeted at applications like autonomous navigation, where a number of known objects is placed in a scene. So essentially a robot gym with CV integration. Similar approaches also exist for autonomous drivinig. 

For our specific problem a working solution seemed to be achievable by building a system from the ground up using the free rendering software blender. So I started modelling the objects and building a pipeline to render out images with the labelling data.
<br>
<br>

# The data

After a couple of days I was able to render out a few images of the first models. With each image I rendered out the segmentation map as sepereate images. So here is an example of a stack of bars I modelled. These have actual physics to make sure the stacking happens in a realistic way. The positions are randomly generated and the camera moves between renders, so that we can synthesize a lot of different images from the same source. 

This is an early example of stacked L-profile bars.

<br>

<img src="{{ '/assets/img/portfolio/00013.png' | absolute_url }}" class="small">

<br>


And here as an example we see the segmentation map for the 6th object, which can be provided by the rendering engine. The challenge was to integrate this into the rendering function in Blender, but rendering each object seperately and combining them after worked quite well. In this instance the object is not occluded, so you can see the entire outline, while for occluded objects this approach would only show the part visible to the camera.

<br>

<img src="{{ '/assets/img/portfolio/6_mask0094.png' | absolute_url }}" class="small">

<br>


After rendering the segmentation maps for all the images and combining them in a grayscale image with the object's ID as the color value we get this as the segmentation map for all objects. This image is basically just training data in an image file. A limitation of this pipeline is that due to the nature of image data we can only combine 255 objects in this image. If more objects are needed in the scene this part would have to be adapted. For this application it is very unlikely, that there are ever more than 100 objects in the scene, but object detection networks can handle more than 255, so there is definitely a limitation there.

<br>

<img src="{{ '/assets/img/portfolio/combined_mask_00013.png' | absolute_url }}" class="small">
<br>


And finally if we also get the position data from the scene we can overlay the position of each of the objects in the image and use that for training too. So here's a combined image with the colors stemming from the segmentation map and annoted object names and positions.

<br>

<img src="{{ '/assets/img/portfolio/cv.png' | absolute_url }}" class="small">

<br>


As of right now it is still unclear if this approach will produce a dataset that is sufficient to train a good model. After generating around 200 images and using them for training, the neural net was able to predict some real bars, but the precision could be improved. There are less than 100 images per class at this point, which is definetly not enough. Additionally to further improve the sim-to-real gap real annotated images could be added to the dataset.

Thanks for reading.