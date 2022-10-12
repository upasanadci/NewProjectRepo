# Sassy Website
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#-results)



Create a mockup website as seen in the [reference image folder](./images_reference). 

**Instructions**: 

* To run this project, use `npm run start`
* Use sass to create the mockup. 
* Make use of nesting and variables where possible.
* Make sure to design for mobile first!

* Using Flexbox change how elements are displayed on the page depending on the screen size.
* Breakpoints:
    - 768px - tablet (set the `.card` width to 80%)
    - 1024px - desktop (set the parent container`.cards` justify-content to center)

* Colors for styling: 
    - Card background color: #e0ddb2
    - Card and aside borders: #e0ddb2
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


### css

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Should generate compiled css |

### Nav

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | anchor tags inside `nav` should have a color of #016690 |

### Card

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | `.card` should be of #e0ddb2 background color |

### Card and aside

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | `.card and aside` should have a border color of #dad6ab |

### Images

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Page should display images from the images folder using css `background-image` property |

### Footer

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | `footer` should have a background color of #0e749e |

### Medium Screens - `.card` class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | On 768px Breakpoint and and above cards should have their `flex-flow` property set to `nowrap` |

### Large Screens - Parent container `.cards`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | On 1025px Breakpoint and and above `.cards` container should have its `justify-content` property set to `center` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=UIB-framework-variables)


[//]: # (autograding info end)