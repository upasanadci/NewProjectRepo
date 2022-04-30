# Sassy Website
[![Status overview badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](#results)


Create a mockup website as seen in the [reference image folder](./images_reference). 

**Instructions**: 

* To run this project, use `npm run start`
* Use sass to create the mockup. 
* Make use of nesting and variables where possible.
* Make sure to design for mobile first! 
* Breakpoints:
    - 768px - tablet 
    - 1024px - desktop
* Colors for styling: 
    - Card background color: #e0ddb2
    - Card and aside borders: #dad6ab
    - Color used for nav and footer: #016690
* Use the images in the [images folder](./src/images) for the header and cards.

![mockup-image-mobile](./images_reference/mobile1.png)

![mockup-image-mobile](./images_reference/mobile2.png)

![mockup-image-tablet](./images_reference/tablet.png)

![mockup-image-desktop](./images_reference/desktop.png)

[//]: # (autograding info start)
## Results


### 1-Sass should be used .

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status0.svg) | styles/main.css dir should be compiled  |

### 2.Nesting and variables .

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status1.svg) | variables should be used  |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status2.svg) | Nesting should be used |

### 3-design for mobil first  .

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status3.svg) | $desktop screen should be 1025px  |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status4.svg) | $tablet screen should be 768px  |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status5.svg) | @media with min-width for $tablet should be used  |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status6.svg) | @media with min-width for $desktop should be used  |

### 4-Colors for styling.

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status7.svg) | Card background color should be  #e0ddb2  |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status8.svg) | Card and aside borders should be #dad6ab |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status9.svg) | Color used for nav and footer should #016690  |



[🔬 Results Details](https://github.com/DigitalCareerInstitute/UIB-framework-variables/actions)

[📢 Give Feedback or Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=UIB-framework-variables&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FUIB-framework-variables)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-framework-variables/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)