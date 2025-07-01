---
layout: page
title: Renderings for my Master's Thesis
category: project
img: blender_ma
---

### Introduction

To support the presentation of my thesis visually, I decided to make a few clips in Blender. I find, that in robotics you often find yourself gesturing the position that the robot arm is currently in, as it's often quite hard to keep everyone aligned on what is going on. So for my final presentation, I wanted some help to explain. I was able to get the model for the robot arm and the spindle from the manufacturers, but everything else was done by me. 

To make the robot move as realistic as possible, I rigged the model with a kinematic structure for animation. In Blender you can set constraints on the armature, so I went through all of the segments for each axis and added constraints acccording to the real world behaviour of the robot. For example the first segment is only allowed to rotate around its vertical axis. The movement simulated in the first clip is the exact path, that I used to simulate the results in the thesis. To show the actual movement I set the tool center point (TCP) to move along the predermined path at a constant speed. From there the movement of the robot is calculated with Blender's inverse kinematics function. This is made possible by the constraints, because they only leave six degrees of freedom on the end effector, just like the real thing. 


<br>

<video autoplay muted loop width="600">
  <source  src="{{ '/assets/video/tset_anim_2.mp4' | absolute_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br>

In the second clip, I'm showing the possible orientations for the end effector. The robot is rotating the cutting tool around the z-axis without changing the position. Showing, that this movement is possible was the starting point for my thesis. 

The lighting setup for both shots is kept quite simple. There is a key light on the left, a fill light on the right and a backlight behind the scene, to accentuate the robot's sharp edges.

For the materials I also kept it simple with a shader for the paint and one for plastic parts. The shader for the paint is made within Blender and is based on a Voronoi texture, which is applied to the normals. This gives a sort of textured rough paint look, which I am personally quite fond of. I decided not to model any wear into the shader, as it wouldn't have worked for this application. Both shots do not have a background, because I had to place these into my keynote presentation.

<br>


<video autoplay muted loop width="600">
  <source  src="{{ '/assets/video/rotation_mabi_3.mp4' | absolute_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>


<br>

Thats about it. I rendered these out as an image sequence and composited them in After Effects and DaVinci Resolve.

Here's a screenshot of the Blender setup.

<img src="{{ '/assets/img/portfolio/blender_ma_1.png' | absolute_url }}">

