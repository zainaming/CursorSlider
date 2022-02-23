# React Native carousel slider

A slideshow component for cycling through elements—images(url Image) or slides like a carousel

## Getting Started


### Dependencies

- No any Dependencies required for this

### Installing

- First, install our library | use below npm script.
```
npm i cursorslider
```
```
yarn add cursorslider
```
- Any modifications needed to be made to files/folders
- Well-done.

### Demo

- Ios and Android Demo is there.

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/79901119/155265773-b5f48f58-c718-48c7-81e6-e23163df273f.gif)

![Screen-Recording-2022-02-23-at-1 (2)](https://user-images.githubusercontent.com/79901119/155266413-d97f3f86-36ac-4122-982f-52d40d673e0d.gif)



## code

### 1. add below import in your code :
```
import CursoerSlider from 'cursorslider';
```

### 2. Define your image array source :

- Define your image array source as the name of DATA, for below examples i create array in DATA variable:

```
const DATA = [
    {
      id: 1,
      UrlImage:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      UrlImage:
        'https://media.istockphoto.com/photos/beautiful-day-to-be-spent-poolside-in-the-back-of-your-luxury-home-picture-id1263907794?b=1&k=20&m=1263907794&s=170667a&w=0&h=aB5glvDXvF4ZKgguAaTpgHNXPZXNOxvm_oB9a3DJFLs=',
    },
    {
      id: 3,
      UrlImage:
        'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      UrlImage:
        'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      UrlImage:
        'https://images.pexels.com/photos/346776/pexels-photo-346776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 6,
      UrlImage:
        'https://images.pexels.com/photos/8110136/pexels-photo-8110136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500g',
    },
    {
      id: 7,
      UrlImage:
        'https://images.pexels.com/photos/97047/pexels-photo-97047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
```

### 3. Use Slider such as these below examples :

```
 <CursoerSlider
    autoScrool={false}
    ImagePerview={true}
    SwipeScrool={true}
    ControllBtn={true}
    Data={DATA}
    height={60}
 />
```

### Executing program

- Just run your program

```
npm run ios && npm run android
```
```
react-native run-ios && react-native run-android 
```

### Props

Props  | Value Type | Description
------------- | ------------- | ------------
autoScrool  | True or false  | if True, when image swiped circularly return to the first image again in 2 secound delay.
SwipeScrool  | True or false  |if True, when image swiped using mouse dragging.
ImagePerview  | True or false  |if True, when you see full screen image on click.
ControllBtn  | True or false  | if True, when you see next and prev image on next/prev arows.
Data  | Array  | gave a image array for sliding.
height | Number |gave a no to control slider height.

## Help

Any advise for common problems or issues.
- just email or whatsapp

```
ranazainamin.developer@gmail.com
+923051522429
```

## Authors

Contributors names and contact info

ex. Rana zain amin  

## License

This project is licensed under the [Rana zain] License - see the LICENSE.md file for details

