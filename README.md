# Sassy Website
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#-results)



Create a mockup website as seen in the [reference image folder](./images_reference). 

**Instructions**: 

* To run this project, use `npm run start`
* The starter code is in the `src` folder. Work in the existing files.
* Write your styles using sass. 
* Make use of nesting and variables where possible.
* Make sure to design for mobile first!

* Using Flexbox change how elements are displayed on the page depending on the screen size.
* Elements with class `.card` should use the `$secondary-color` variable as the background color.
* Elements with class `.card` should use the `$border-size` and `$secondary-color` variables for the border.
* `aside` should have its border property defined using the `$border-size` and `$secondary-color` variables.

* Breakpoints:
    - 768px - tablet (the width of `.card` should be 80%)
    - 1024px - desktop (`.cards` container should center its childeren using justify-content)

* Colors for styling: 
    - Card background color: #e0ddb2
    - Card and aside border color: #e0ddb2
    - Color used for nav and footer: #0e749e
* Use the images in the [images folder](./src/images) for the header and cards.

![mockup-image-mobile](./images_reference/mobile1.png)

![mockup-image-mobile](./images_reference/mobile2.png)

![mockup-image-tablet](./images_reference/tablet.png)

![mockup-image-desktop](./images_reference/desktop.png)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Sass

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | SCSS should be compiled into CSS in the file `/src/styles/main.css` |

### Navigation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Link tags in `nav` should use the text color `#016690` |

### Cards

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | `.card` should have background color `#e0ddb2` |

### Cards and aside

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | `.card` should have border color `#dad6ab` |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | `aside` should have border color `#dad6ab` |

### Images

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Page should background images provided in the `src/images` folder |

### Responsivity

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | On 768px Breakpoint and and above `.card` should have its `width` property set to `80%` |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | On 1025px Breakpoint and and above `.cards` container should have its `justify-content` property set to `center` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=UIB-framework-variables)


[//]: # (autograding info end)