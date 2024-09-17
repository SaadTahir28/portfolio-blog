---
title: MRTK3 with Hololens 2 using Unity
date: '2024-09-16'
tags: ['Unity','Hololens2','MRTK3','C#','Mixed Reality','AR/VR','Windows']
draft: false
summary:  A guide to create an AR app for Hololens2 using MRTK3 in Unity
images: []
layout: PostSimple
canonicalUrl:
authors: ['default']
---
# Overview

I recently got a chance to work on a project on Hololens 2 and I thought that I would share how I did that using a very powerful XR tool called MRTK3 (Mixed Reality ToolKit 3). In this blog, I will tell you how to set up the project with MRTK3 in Unity and tell you about its features. So let’s get started.

## Hololens 2

Hololens 2 is a Mixed Reality Headset which you can use for AR Apps. It was created by **Microsoft** and is a very lightweight but powerful headset in the current market. I have had a chance to experience it with my own hands and it's futuristic. You can use your hands to move around the screens, make a cinema screen at home and pick objects and place them anywhere in your house.

## Prerequisites

In order to create an app for Hololens 2, you need to have the following things installed.

* A Windows 10 or 11 PC
* Visual Studio 2022
* Unity 2022.3 LTS
* Mixed Reality Feature Tool for Unity

Follow [these](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/getting-started/setting-up/setup-dev-env) instructions to setup a development environment

## MRTK3 Installation and Project Setup

Create a new 3D project in Unity and open it. Now you need to add MRTK3 in it.

* To do that, first open **MixedRealityFeatureTool.exe** and let it refresh for a few minutes.
* Press **Start** and now you can set the location of the project where you want to add MRTK3 to.
* After adding the location, Press **Discover Features** button where you can add all the features required.
* Select all from MRTK3 and Select **Mixed Reality OpenXR Plugin** from **Platform Support**
* Now press **Get Features** and it will download and integrate MRTK3 in your project.
* Press **Import** and then **Approve** and it's done.
* Open Unity and load all the packages. In case Unity asks to RESTART, just say Yes.

Now you are good to go. Everything is imported. You can check the Packages in Project Hierarchy.

![hololens2-1](/static/images/blog/hololens2-1.png)

To enable creating XR apps, you need to follow [this](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/getting-started/setting-up/setup-new-project#4-configure-mrtk-profile-after-import) link and complete the import.

## New Scene in Unity with MRTK3

This step is pretty simple now.

1. Remove Main Camera
2. Add **MRTK XR Rig** in the scene
3. Add **MRTKInputSimulator** in the scene for testing in Editor
4. Add a 3D plane
5. Press Play

Now can now test the scene using your mouse and keyboard. You can bring hands with CTRL, SPACE, ALT and you can use your mouse for inputs etc. WASD for movement. Pretty simple right? But now let’s add the cool stuff.

## Object Interaction

* Add a cube and set scale to 0.1 and position to (0, 1.6, 1\)
* Add **Object Manipulator** script to it
* Add **Rigidbody** for more fun
* Create a table using basic shapes and put this cube on it
* Press play.

You can now move it using your hands, rotate it and throw it.

![hololens2-2](/static/images/blog/hololens2-2.gif)

Awesome, you can explore the options in Object Manipulator Script for Advanced interactions like Constraints etc.

## Basic Dialogue and Speech Interaction

Another useful step for XR apps is UI and MRTK3 has a really cool dialogue called Canvas Dialogue which follows you around where you move. You can poke the buttons and say the word and it will be pressed as well.

1. Add **CanvasDialog** in the scene
2. Enable **MRTK Speech** inside **MRTK XR Rig** in the hierarchy
3. Press play.

Now when you hover over the button to press, stay there and it will show “Say, Ok”. This cannot be tested inside the Editor but can be tested when built on the device.
![hololens2-3](/static/images/blog/hololens2-3.gif)

## Conclusion

And that’s it. You can play around with it and even test it on the hololens 2 using [this](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/advanced-concepts/using-visual-studio?tabs=hl2) link. I hope you learnt something from this. [Here](https://github.com/SaadTahir28/blog-mrtk3) is the link to the demo project as well. Enjoy\!
