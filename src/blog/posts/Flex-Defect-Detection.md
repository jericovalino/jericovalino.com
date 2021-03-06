---
    title: "Flex Defect Detection"
---



## Flex Defect Detection

This is a project that utilize opensource machine learning and machine vision tools(Google's Tensorflow with OpenCV ) to assist in identifying cosmetic defects for electronic products.

Before                     |  After
:-------------------------:|:-------------------------:
<img src="https://raw.githubusercontent.com/jericovalino/Flex-Defect-Detection/master/extra/detection.PNG" alt="GUI" width="430"/>  |  <img src="https://raw.githubusercontent.com/jericovalino/Flex-Defect-Detection/master/extra/detection1.PNG" alt="GUI" width="430"/>



#### The GUI of the Application
To create the graphical user interface, I've used Tkinter, the standard Python interface to the Tk GUI toolkit, and is Python's de facto standard GUI. Tkinter is included with standard Linux, Microsoft Windows and Mac OS X installs of Python.
It uses widgets to create objects such as buttons, labels, frames and etc. To learn more about Tkinter and how to start creating simple GUI's with it, you can go to this [tkinter documentaion](https://docs.python.org/3/library/tk.html).

#### Custom Trained M-RCNN Model to Detect Electronic Defects
To train the model, you can follow the instructions from my previous [github repository](https://github.com/jericovalino/Train_Mask_RCNN).
Only 7 defective samples from FPCA(flex printed circuit assembly) Toshiba are used as a basis of the machine learning of what is failed. Then I took more than a couple of pictures of each samples with different angles/orientations. All in all, I've collected 23 images as a data to be used in training the model. <br/>
Here are the image datasets I've used to train the model. 

<img src="https://raw.githubusercontent.com/jericovalino/Flex-Defect-Detection/master/extra/images.PNG" alt="GUI" width="420"/>

You can download the label and the pre-trained M-RCNN model [here](https://drive.google.com/open?id=10P9eOnwiRWgtlqGMUap13Fp6I2S0Rr3g).

#### Configuring the Python Script
* Get the flex_defect_detection.py and assets folder from this repository and place it inside the C:\Train_Mask_RCNN\Tensorflow_API-Custom_Mask_RCNN folder (It maybe different in yours). <br/>
* Open the script using code editor, then edit the default "PATHS" to match your set-up. Save.
* Test the scripts by openning it.
* If the scripts open without trowing any errors, you can now re-open the script using code editor and save it as "flex_defect_detection.pyw"
* Create a shortcut in your Desktop by clicking your way tru the following.
> In Desktop, click the mouse right button>> click "New">> click "Shortcut">> paste the absulute path of the script in the text field or you can click the "Browse" button and find the script>> click "Next">> type "Flex Defect Detection">> click "Finish" <br/>
> You can also change the app icon.

<img src="https://raw.githubusercontent.com/jericovalino/Flex-Defect-Detection/master/extra/icon.PNG" alt="GUI" width="60"/>

#### User's Guide
* To open the application, just double click your newly created shorcut in the Desktop. The window will open after a few seconds. <br/>
* To start the detection, position the flex that are you going to test in front of the microscope camera. You can see the video stream from the camera in the window application. Click the "RUN DETECTION" button. The first run will take a while since it's going to load and run the inference into the computer's memory so please be patient. The following run will take much less time of about 6-7 seconds for the detection to complete. <br/>
* After the detection, a window that shows the image result will pop-up. Under the detection button, the word will show "PASS" if there is no defect detected in the flex, otherwise "FAIL" if the flex didn't pass the inspection.
* To start again, just close the pop-up window and repeat the same proccess. <br/>
(Note: all the captured and result images will be save by default. You can toggle the switch in the menu to turn it off.)
(Note: if something is not working as it should, you can re-edit the script using a code editor and make sure that the paths are all correct.)
*