---
layout: page
title: Macro Pad
category: project
img: macro-pad-s0-v06-c
---



# Designinig a Macro Pad IoT-Interface

I don't like to grab my smartphone for everything. So to change the track playing on my streaming speaker or to change the brightness of the lights in my appartment I wanted to have a dedicated interface to control everything. Because I wanted to use it all around the appartment and always be on I knew I had to design my own hardware with some smart software for it to truly be a benefit in everyday life. 

I also wanted it to be reasably cost effective, somewhere around 100€ for the protype, and to be able to assemble it myself. 

To design the interface I started from a components perspective. Essentially working botttom-up to make sure I could fit everything in a package as small as possible. I knew I wanted a reasonably sized battery, a powerful microchip with built in wi-fi, 3-6 buttons and a conveniant solution for the power supply. Additonally I included a rotary dial in the plans, to change music volume or light brightness easily.

On the user interface side, I wanted a screen that I could programm to display all the information needed in detail. I wanted the whole product to feel substantial and I wanted to be able to use immediatly after having not used it for a long while. The buttons had to be reprogrammable, depending on what it is currently used for and it needed lighting for use in the dark and indicator lights for battery status.

By nature of the components used, I knew that the PCB layout would basically be grouped into 3 components. There would be one group made up of the 6 buttons, which take up the same footprint on the pcb as on the interface level. The same goes for the rotary dial. So the rest of the components had to make up one group as well. Which meant to minimize the footprint I had to stack the micro controller, the battery and the screen on top of each other.

I cut all the components out on paper and arranged them in several positions to find what works best. At this point I decided to got with 6 buttons, because it looks better and gives access to more functionality. 

Finally I fit in a USB-C interface at the back to allow for charging and reprogramming.


So finally this is what I ended up with. Fully functional wi-fi interface to connect to all the IoT devices without resorting to apps on my phone. It uses proven hardware to give a quality feel and has some nice additions like customizable lighting.

In the future I would like to adapt the current design to use even less ressources, find a better looking OLED screen and improve the design of the top plate, by exploring different manufacturing techniques. 


<br>


<br>

<img src="{{ '/assets/img/portfolio/macro-pad-s0-v06-c.png' | absolute_url }}" class="portrait">

<br>


<br>

<img src="{{ '/assets/img/portfolio/macro-pad-s1-v06-c.png' | absolute_url }}" class="portrait">

<br>


<br>

<img src="{{ '/assets/img/portfolio/mp-pcb-schematic.png' | absolute_url }}" class="portrait">

<br>