---
title: Apple Vision Pro Inputs in Unity
date: '2024-05-30'
tags: ['Unity','Apple Vision Pro','VisionOS','C#','Mixed Reality','AR/VR','iOS']
draft: false
summary: Explaining how to integrate input in Vision OS using Unity C#
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

## Overview
I will explain how to integrate basic input in Vision Pro using Unity. I will tell you how to add **pinch**, **pinch and move**, **direct poke** and **gaze pinch**. There are some prerequisites for the development in Vision OS and I will guide you with each step. In the end we will make a game in Unity where a car rotates left/right with the steering wheel.

## Prerequisites
- **Unity 2022.3 (LTS)** or later
- **Xcode 15** beta 2.
- **VisionOS Simulator**
- **Apple Silicon (M1/M2) Mac** in order to compile for visionOS
- **visionOS Build Support** (experimental) and **iOS Build Support**
- Universal Render Pipeline (**URP**) preferred or the Built-in Render Pipeline
- **Unity Pro** Licence

*[Source](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@0.1/manual/Requirements.html)*

## Getting Started
In order to get started, you need Polyspatial to be installed in your project. You can either enable it in **Edit > Project Settings > PolySpatial > Enable PolySpatial Runtime** or add it as a Package in Package Manager
- `com.unity.polyspatial`
- `com.unity.polyspatial.xr`
- `com.unity.polyspatial.visionos`

![visionos_packages](/static/images/blog/visionos_packages.png)

## Input with Direct Poke or Pinch
You will need to have a **Volume Camera** working for rendering the game, the settings required for **Bounded/Unbounded camera** and the **XR Management settings** with Apple XR enabled. For that, do the following

- Import **Unity Polyspatial Samples** from `com.unity.polyspatial` package
- Add Volume Camera from **Heirarchy->XR->Setup->Volume Camera**
- Add the `Bounded_VolumeCameraConfiguration` in Volume Window Configuration
- Add Usage Description in **Project Settings -> XR Plugin Management -> Apple visionOS**
- Change the App Mode to **Mixed Reality**

Follow the steps listed [here](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@0.1/manual/TutorialCreateFromScratch.html) for more details.

Now follow the following steps
- Create a **Cube** in the scene
- Reset the **Camera** to `0,0,-1`
- **Scale** it so that it is inside the Volume Camera `0.1, 0.1, 0.1`
- Create an **Empty GameObject** called **InputManager**
- Add a script to InputManager and name it **ColorChangeOnInput.cs**
- Replace it with the following script

```csharp
using UnityEngine;
using Unity.PolySpatial.InputDevices;
using UnityEngine.InputSystem.EnhancedTouch;
using Touch = UnityEngine.InputSystem.EnhancedTouch.Touch;
using TouchPhase = UnityEngine.InputSystem.TouchPhase;
using UnityEngine.InputSystem.LowLevel;


public class ColorChangeOnInput : MonoBehaviour
{
    private void OnEnable()
    {
        EnhancedTouchSupport.Enable();
    }

    private void Update()
    {
        if(Touch.activeTouches.Count > 0)
        {
            foreach (var touch in Touch.activeTouches)
            {
                if(touch.phase == TouchPhase.Began)
                {
                    SpatialPointerState touchData = EnhancedSpatialPointerSupport.GetPointerState(touch);
                    if(touchData.targetObject != null)
                    {
                        // Now we are pinching/direct poking
                        ChangeObjectColor(touchData.targetObject);
                        break;
                    }
                }
            }
        }
    }

    private void ChangeObjectColor(GameObject obj)
    {
        var renderer = obj.GetComponent<Renderer>();
        if(renderer != null)
        {
            renderer.material.color = new Color(Random.value, Random.value, Random.value);
        }
    }
}

```

This script will change the color of the Cube when you look at it and pinch or poke the cube.

Run the scene in Unity and on clicking the cube, a random color will be set. You can test the scene in the Vision OS Simulator by building for the Simulator in Build Settings and running through XCode. Make sure to change the **Target SDK** to **Simulator SDK**

![visionos_buildsettings](/static/images/blog/visionos_buildsettings.png)

Here is how it should look like in simulator. Click on the cube to change it's color.

![visionos_hellocube](/static/images/blog/visionos_hellocube.png)

## Input with Pinch Move
Create a new script and call it **RotateObjectOnInput.cs**. This script will create an input when the user pinches the target object and moves the pinch. The target should rotate.

```csharp
using UnityEngine;
using Unity.PolySpatial.InputDevices;
using UnityEngine.InputSystem.EnhancedTouch;
using Touch = UnityEngine.InputSystem.EnhancedTouch.Touch;
using TouchPhase = UnityEngine.InputSystem.TouchPhase;
using UnityEngine.InputSystem.LowLevel;

public class RotateObjectOnInput : MonoBehaviour
{
    public float rotationSpeed = 0.1f;
    public float followRotationSpeed = 0.1f;
    public GameObject followingObject;

    private GameObject selectedObject;
    private Vector3 lastInteractionPosition;

    private void OnEnable()
    {
        EnhancedTouchSupport.Enable();
    }

    private void Update()
    {
        if (Touch.activeTouches.Count > 0)
        {
            foreach (var touch in Touch.activeTouches)
            {
                SpatialPointerState touchData = EnhancedSpatialPointerSupport.GetPointerState(touch);
                if (touchData.targetObject != null && touchData.Kind != SpatialPointerKind.Touch)
                {

                    // Now we are pinching
                    if (touch.phase == TouchPhase.Began && touchData.targetObject.CompareTag("Player"))
                    {
                        selectedObject = touchData.targetObject;
                        lastInteractionPosition = touchData.interactionPosition;
                    }
                    else if (touch.phase == TouchPhase.Moved && selectedObject != null)
                    {
                        var deltaPosition = touchData.interactionPosition - lastInteractionPosition;
                        float rotationAmount = deltaPosition.x * rotationSpeed; // Adjust the multiplier as needed
                        selectedObject.transform.Rotate(-Vector3.forward, rotationAmount);
                        lastInteractionPosition = touchData.interactionPosition;
                    }
                }
            }
        }

        if (Touch.activeTouches.Count == 0)
        {
            selectedObject = null;
        }

        FollowObject();
    }

    private void FollowObject()
    {
        if (selectedObject == null)
            return;
        var lastRotation = followingObject.transform.rotation;
        lastRotation.y = selectedObject.transform.rotation.z * followRotationSpeed * -1f;
        followingObject.transform.rotation = lastRotation;
    }
}

```

Create **two game objects**. One that will be the **steering wheel** of a car and the other will be a **car** itself.

![visionos_scene](/static/images/blog/visionos_scene.png)

- Attach this script to **InputManager gameobject**
- Remove the old **ColorChangeOnInput.cs** script
- Change **RotationSpeed** to **100**
- Change **FollowRotationSpeed** to 1
- Drag the **car gameObject** in the **Following Object**
- Add tag `Player` to the steering wheel
- Hit Play

Click the steering wheel and drag it left or right, the wheel moves and the car follows the movement. Adjust the speeds from the inspector if required.

![visionos_editor](/static/images/blog/visionos_editor.gif)

Build the project and try it in the VisionOS Simulator. You will be able to do this when you pinch and move.

![visionos_simulator](/static/images/blog/visionos_simulator.gif)

## Conclusion
This concludes our tutorial. You can add more scenes and also view the samples provided by Unity in **Polyspatial samples**. Try them out by following this [link](https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@0.1/manual/Samples.html).

Hope it helps 😄

